class TicTacToe {
  constructor(
    status = "playing",
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    history = { playerX: 0, playerO: 0 },
    currentPlayer = "x"
  ) {
    this.status = status;
    this.board = board;
    this.history = history;
    this.currentPlayer = currentPlayer;
  }

  get allGameDate() {
    return this;
  }

  switchPlayer() {
    if (this.currentPlayer === "x") {
      this.currentPlayer = "o";
    } else {
      this.currentPlayer = "x";
    }
  }

  chooseCell(position) {
    const positionAvailable =
      this.board[position[0]][position[1]] === null ? true : false;
    if (positionAvailable && this.status === "playing") {
      this.board[position[0]][position[1]] = this.currentPlayer;
      this.checkStatus();
      this.switchPlayer();
      return true;
    } else {
      return false;
    }
  }

  reset() {
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayer = "x";
    this.status = "playing";
  }

  checkIfBoardFull() {
    let full = true;
    this.board.forEach((row) => {
      row.forEach((cell) => {
        if (cell === null) {
          full = false;
        }
      });
    });
    return full;
  }

  updateWinningHistory() {
    if (this.currentPlayer === "x") {
      this.history.playerX += 1;
    } else {
      this.history.playerO += 1;
    }
  }

  checkStatus() {
    //row one win
    if (
      this.board[0][0] === this.board[0][1] &&
      this.board[0][0] === this.board[0][2] &&
      this.board[0][0] !== null
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //row tow win
    else if (
      this.board[1][0] === this.board[1][1] &&
      this.board[1][0] === this.board[1][2] &&
      this.board[1][0] !== null
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //row three win
    else if (
      this.board[2][0] === this.board[2][1] &&
      this.board[2][0] === this.board[2][2] &&
      this.board[2][0] !== null
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //column one win
    else if (
      this.board[0][0] === this.board[1][0] &&
      this.board[0][0] === this.board[2][0] &&
      this.board[0][0] !== null
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //column tow win
    else if (
      this.board[0][1] === this.board[1][1] &&
      this.board[0][1] === this.board[2][1] &&
      this.board[0][1] !== null
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //column three win
    else if (
      this.board[0][2] === this.board[1][2] &&
      this.board[0][2] === this.board[2][2] &&
      this.board[0][2]
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //left diagonal win
    else if (
      this.board[0][0] === this.board[1][1] &&
      this.board[0][0] === this.board[2][2] &&
      this.board[0][0]
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    }
    //right diagonal win
    else if (
      this.board[0][2] === this.board[1][1] &&
      this.board[0][2] === this.board[2][0] &&
      this.board[0][2]
    ) {
      this.updateWinningHistory();
      this.status = `Player ${this.currentPlayer} won !`;
    //tie
    } else if (this.checkIfBoardFull()) {
      this.status = "It's a tie";
    }
    //playing
    else {
      this.status = "playing";
    }
  }
}
