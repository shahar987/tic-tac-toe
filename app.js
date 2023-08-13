const game = new TicTacToe();

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
  cell.addEventListener("click", (e) => {
    playMove(e.target.id);
  });
});

const renderHistory = (history) => {
  const { playerX, playerO } = history;
  const playerXRes = document.getElementById("playerXRes");
  const playerORes = document.getElementById("playerORes");
  playerXRes.textContent = playerX;
  playerORes.textContent = playerO;
};

const renderCurrentPlayer = () => {
  let currentPlayer = game.currentPlayer;
  const currPlayerElement = document.getElementById("currentPlayer");
  currentPlayer = currentPlayer.toUpperCase();
  currPlayerElement.className = currentPlayer === "X" ? "currentPlayer neon-text--blue" : "currentPlayer neon-text--pink"
  currPlayerElement.textContent = currentPlayer;
};

const renderMove = (cellId, currentPlayer) => {
  const cell = document.getElementById(cellId);
  if (currentPlayer === "x") {
    const x = document.createElement("p");
    x.textContent = "X";
    x.className = "neon-text--blue";
    cell.appendChild(x);
  } else {
    const circle = document.createElement("p");
    circle.textContent = "O";
    circle.className = "neon-text--pink";
    cell.appendChild(circle);
  }
  if (game.status !== "playing") showPopup();
};
const playMove = (cellId) => {
  const position = cellId.split("").map(Number);
  const currentPlayer = game.currentPlayer;
  if (game.chooseCell(position)) {
    renderMove(cellId, currentPlayer);
  }
  renderCurrentPlayer();
};

const renderBoard = () => {
  for (let row = 0; row < game.board.length; row++) {
    for (let col = 0; col < game.board[row].length; col++) {
      if (game.board[row][col] !== null) {
        renderMove(`${row}${col}`, game.board[row][col]);
      } else {
        const cell = document.getElementById(`${row}${col}`);
        const child = cell.firstChild;
        if (child) cell.removeChild(child);
      }
    }
  }
};

const showPopup = () => {
  const popup = document.querySelector(".popup");
  const message = document.querySelector(".message");
  message.textContent = game.status;
  popup.classList.add("show");
};

const removePopup = () => {
  const popup = document.querySelector(".popup");
  popup.classList.remove("show");
};

const startGame = () => {
  const currentPlayer = game.currentPlayer;
  const history = game.history;
  renderBoard();
  renderCurrentPlayer();
  renderHistory(history);
  if (game.status !== "playing") showPopup();
};

const resetGame = () => {
  game.reset();
  removePopup();
  startGame();
};

startGame();

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", () => resetGame());
