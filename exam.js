import { auth, db } from "./firebase-config.js";
import { requireCandidate } from "./auth-guard.js";
import {
  addDoc,
  collection,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const params = new URLSearchParams(window.location.search);
const subjectSlug = params.get("subject") || "maths";
const exam = window.EXAM_DATA[subjectSlug];

if (!exam) {
  window.location.replace("subjects.html");
  throw new Error("Unknown exam subject.");
}

let currentIndex = 0;
const answers = new Array(exam.questions.length).fill(null);
let timeLeft = exam.duration;
let timerId = null;
let examStarted = false;
let isSubmitting = false;

const subjectNameEl = document.getElementById("subjectName");
const timerDisplayEl = document.getElementById("timerDisplay");
const questionProgressEl = document.getElementById("questionProgress");
const questionTextEl = document.getElementById("questionText");
const optionsListEl = document.getElementById("optionsList");
const navGridEl = document.getElementById("navGrid");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const quizView = document.getElementById("quizView");
const resultView = document.getElementById("resultView");
const resultScoreEl = document.getElementById("resultScore");
const resultSubjectEl = document.getElementById("resultSubject");
const saveStatusEl = document.getElementById("saveStatus");

subjectNameEl.textContent = exam.name;

exam.questions.forEach((_, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "nav-btn";
  button.textContent = index + 1;
  button.addEventListener("click", () => {
    currentIndex = index;
    render();
  });
  navGridEl.appendChild(button);
});

function render() {
  const question = exam.questions[currentIndex];

  questionProgressEl.textContent =
    `Question ${currentIndex + 1} of ${exam.questions.length}`;
  questionTextEl.innerHTML = question.q;
  optionsListEl.innerHTML = "";

  Object.keys(question.options).forEach((letter) => {
    const label = document.createElement("label");
    label.className =
      "option" + (answers[currentIndex] === letter ? " selected" : "");

    label.innerHTML = `
      <input type="radio" name="option" value="${letter}"
        ${answers[currentIndex] === letter ? "checked" : ""}>
      <span class="option-letter">${letter}</span>
      <span class="option-text">${question.options[letter]}</span>
    `;

    label.addEventListener("click", () => {
      answers[currentIndex] = letter;
      render();
    });

    optionsListEl.appendChild(label);
  });

  navGridEl.querySelectorAll(".nav-btn").forEach((button, index) => {
    button.classList.toggle("answered", answers[index] !== null);
    button.classList.toggle("current", index === currentIndex);
  });

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === exam.questions.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    render();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < exam.questions.length - 1) {
    currentIndex++;
    render();
  }
});

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function startTimer() {
  timerDisplayEl.textContent = formatTime(timeLeft);
  timerId = window.setInterval(() => {
    timeLeft--;
    timerDisplayEl.textContent = formatTime(Math.max(timeLeft, 0));

    if (timeLeft <= 0) {
      window.clearInterval(timerId);
      submitExam(true);
    }
  }, 1000);
}

async function saveScore(score) {
  const candidate = auth.currentUser;

  if (!candidate) {
    throw new Error("Candidate is not logged in.");
  }

  const registrationNumber =
    localStorage.getItem("nexa_registration_number") || "Unknown";

  await addDoc(
    collection(db, "candidates", candidate.uid, "scores"),
    {
      candidateId: candidate.uid,
      registrationNumber,
      subjectSlug,
      subjectName: exam.name,
      score,
      totalQuestions: exam.questions.length,
      percentage: Math.round((score / exam.questions.length) * 100),
      submittedAt: serverTimestamp()
    }
  );
}

async function submitExam(autoSubmitted) {
  if (isSubmitting) return;

  const unanswered = answers.filter((answer) => answer === null).length;
  if (!autoSubmitted && unanswered > 0) {
    const proceed = window.confirm(
      `You have ${unanswered} unanswered question(s). Submit anyway?`
    );
    if (!proceed) return;
  }

  isSubmitting = true;
  submitBtn.disabled = true;
  window.clearInterval(timerId);

  let score = 0;
  exam.questions.forEach((question, index) => {
    if (answers[index] === question.answer) score++;
  });

  localStorage.setItem(
    `nexa_current_score_${auth.currentUser.uid}_${subjectSlug}`,
    String(score)
  );

  resultScoreEl.textContent = `${score} / ${exam.questions.length}`;
  resultSubjectEl.textContent = exam.name;
  quizView.style.display = "none";
  resultView.style.display = "flex";
  saveStatusEl.textContent = "Saving your score...";

  try {
    await saveScore(score);
    saveStatusEl.textContent = "Your score was saved successfully.";
    saveStatusEl.className = "save-status save-status--success";
  } catch (error) {
    console.error("Could not save score:", error);
    saveStatusEl.textContent =
      "Your score could not be saved. Check your connection before leaving this page.";
    saveStatusEl.className = "save-status save-status--error";
    isSubmitting = false;
    submitBtn.disabled = false;
  }
}

submitBtn.addEventListener("click", () => submitExam(false));

requireCandidate(() => {
  if (examStarted) return;
  examStarted = true;
  render();
  startTimer();
});
