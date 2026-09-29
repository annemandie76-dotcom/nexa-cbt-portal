import { db } from "./firebase-config.js";
import { requireCandidate, logOutCandidate } from "./auth-guard.js";
import {
  collection,
  getDocs,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const SUBJECTS = [
  { slug: "maths", name: "Mathematics" },
  { slug: "english", name: "English Language" },
  { slug: "chemistry", name: "Chemistry" },
  { slug: "physics", name: "Physics" }
];

const breakdown = document.getElementById("breakdown");
const totalScore = document.getElementById("totalScore");
const historyMessage = document.getElementById("historyMessage");
const historyList = document.getElementById("historyList");
const logoutButton = document.getElementById("logoutBtn");

logoutButton.addEventListener("click", logOutCandidate);

function currentScoreKey(candidateId, subjectSlug) {
  return `nexa_current_score_${candidateId}_${subjectSlug}`;
}

function renderCurrentResults(candidate) {
  let total = 0;
  let maxTotal = 0;
  breakdown.innerHTML = "";

  SUBJECTS.forEach((subject) => {
    const scoreRaw = localStorage.getItem(
      currentScoreKey(candidate.uid, subject.slug)
    );
    const score = scoreRaw === null ? 0 : Number.parseInt(scoreRaw, 10);

    total += score;
    maxTotal += 20;

    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `
      <span>${subject.name}</span>
      <strong>${scoreRaw === null ? "Not attempted" : score + " / 20"}</strong>
    `;
    breakdown.appendChild(row);
  });

  totalScore.textContent = `${total} / ${maxTotal}`;
}

function formatSubmittedDate(timestamp) {
  if (!timestamp || typeof timestamp.toDate !== "function") {
    return "Just submitted";
  }

  return timestamp.toDate().toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}

async function loadScoreHistory(candidate) {
  try {
    const historyQuery = query(
      collection(db, "candidates", candidate.uid, "scores"),
      orderBy("submittedAt", "desc")
    );

    const snapshot = await getDocs(historyQuery);
    historyList.innerHTML = "";

    if (snapshot.empty) {
      historyMessage.textContent =
        "You do not have any saved exam attempts yet.";
      return;
    }

    historyMessage.textContent = "";

    snapshot.forEach((scoreDocument) => {
      const attempt = scoreDocument.data();
      const item = document.createElement("article");
      item.className = "history-item";

      item.innerHTML = `
        <div>
          <h3>${attempt.subjectName}</h3>
          <p>${formatSubmittedDate(attempt.submittedAt)}</p>
        </div>
        <div class="history-score">
          <strong>${attempt.score} / ${attempt.totalQuestions}</strong>
          <span>${attempt.percentage}%</span>
        </div>
      `;

      historyList.appendChild(item);
    });
  } catch (error) {
    console.error("Could not load score history:", error);
    historyMessage.textContent =
      "Your previous scores could not be loaded. Check your Firebase setup and internet connection.";
  }
}

requireCandidate((candidate) => {
  renderCurrentResults(candidate);
  loadScoreHistory(candidate);
});
