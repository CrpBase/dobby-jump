import { submitScore, loadLeaderboard } from './firebase_leaderboard.js';

const leaderboardEl = document.querySelector("#leaderboard tbody");

function renderLeaderboard(scores) {
  leaderboardEl.innerHTML = "";
  scores.forEach((entry, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${index + 1}</td><td>${entry.name}</td><td>${entry.score}</td>`;
    leaderboardEl.appendChild(row);
  });
}

loadLeaderboard().then(renderLeaderboard);

// приклад автозапису
// submitScore("Anon", Math.floor(Math.random() * 1000));