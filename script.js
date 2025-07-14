
import { submitScore, loadLeaderboard } from './firebase_leaderboard.js';

// Додаємо випадковий тестовий запис
submitScore("Tester", Math.floor(Math.random() * 1000));

// Завантажуємо таблицю
const leaderboardBody = document.querySelector('#leaderboard-body');

loadLeaderboard().then(data => {
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
}).catch(err => {
  leaderboardBody.innerHTML = '<tr><td colspan="3">Failed to load</td></tr>';
});
