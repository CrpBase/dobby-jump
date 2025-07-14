
import { submitScore, loadLeaderboard } from './firebase_leaderboard.js';

const leaderboardBody = document.querySelector('#leaderboard-body');

function render(data) {
  leaderboardBody.innerHTML = '';
  data.forEach((entry, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${entry.name}</td>
      <td>${entry.score}</td>
    `;
    leaderboardBody.appendChild(row);
  });
}

loadLeaderboard().then(render).catch(() => {
  leaderboardBody.innerHTML = '<tr><td colspan="3">Failed to load</td></tr>';
});

document.querySelector('#send-score').addEventListener('click', () => {
  submitScore("Tester", Math.floor(Math.random() * 1000)).then(() =>
    loadLeaderboard().then(render)
  );
});
