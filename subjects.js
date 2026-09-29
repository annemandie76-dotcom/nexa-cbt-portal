import { requireCandidate, logOutCandidate } from "./auth-guard.js";

const SUBJECTS = [
  { slug: "maths", name: "Mathematics" },
  { slug: "english", name: "English Language" },
  { slug: "chemistry", name: "Chemistry" },
  { slug: "physics", name: "Physics" }
];

const grid = document.getElementById("subjectGrid");
const logoutButton = document.getElementById("logoutBtn");

logoutButton.addEventListener("click", logOutCandidate);

function currentScoreKey(candidateId, subjectSlug) {
  return `nexa_current_score_${candidateId}_${subjectSlug}`;
}

function renderSubjects(candidate) {
  grid.innerHTML = "";

  SUBJECTS.forEach((subject) => {
    const scoreRaw = localStorage.getItem(
      currentScoreKey(candidate.uid, subject.slug)
    );
    const done = scoreRaw !== null;

    const card = document.createElement("div");
    card.className = "subject-card" + (done ? " subject-card--done" : "");

    card.innerHTML = `
      <h2>${subject.name}</h2>
      <p class="subject-meta">20 Questions &middot; 15 mins</p>
      <p class="subject-status">
        ${done ? "Current score: " + scoreRaw + " / 20" : "Not attempted in this session"}
      </p>
      <a href="exam.html?subject=${subject.slug}" class="btn-start">
        ${done ? "Retake Test" : "Start Test"}
      </a>
    `;

    grid.appendChild(card);
  });
}

requireCandidate(renderSubjects);
