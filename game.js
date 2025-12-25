let players = [];
let scores = {};
let currentPlayer = "";
let time = 30;
let timer;
let score = 0;

function addPlayer() {
  const name = document.getElementById("playerName").value;
  if (!name || players.includes(name)) return;

  players.push(name);
  scores[name] = 0;

  const li = document.createElement("li");
  li.textContent = name;
  document.getElementById("players").appendChild(li);

  document.getElementById("playerName").value = "";
}

function startGame() {
  if (players.length < 2) {
    alert("Add at least 2 players");
    return;
  }

  document.getElementById("setup").hidden = true;
  document.getElementById("game").hidden = false;

  currentPlayer = players[0];
  startRound();
}

function startRound() {
  score = 0;
  time = 30;
  document.getElementById("score").innerText = 0;
  document.getElementById("timer").innerText = `⏱️ ${time}`;

  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = `⏱️ ${time}`;
    if (time <= 0) {
      clearInterval(timer);
      endTurn();
    }
  }, 1000);
}

function tap() {
  score++;
  document.getElementById("score").innerText = score;
}

function endTurn() {
  scores[currentPlayer] = score;
  players.shift();

  if (players.length > 0) {
    currentPlayer = players[0];
    startRound();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("game").hidden = true;
  document.getElementById("results").hidden = false;

  const winner = Object.entries(scores)
    .sort((a, b) => b[1] - a[1])[0];

  document.getElementById("winner").innerText =
    `${winner[0]} wins with ${winner[1]} points!`;
}
let character = "";

function addPlayer() {
  const name = document.getElementById("playerName").value;
  character = document.getElementById("character").value;
  if (!name || players.includes(name)) return;

  players.push(name);
  scores[name] = { score: 0, char: character };

  const li = document.createElement("li");
  li.textContent = `${character} ${name}`;
  document.getElementById("players").appendChild(li);

  document.getElementById("playerName").value = "";
}
