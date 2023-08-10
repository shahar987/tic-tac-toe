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
  switchPlayer(){
    if(this.currentPlayer=== "x"){
        this.currentPlayer = "o"
    }
    else{
        this.currentPlayer = "x"
    }
  }

  chooseCell(position) {
    const positionAvailable =
      this.board[position[0]][position[1]] === null ? true : false;
    if (positionAvailable) {
      this.board[position[0]][position[1]] = this.currentPlayer;
      this.checkStatus()
      this.switchPlayer()
      return true;
    } else {
      return false;
    }
  }

  reset(){
    this.board = [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]
    this.currentPlayer = "x"
    this.status = "playing"
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

  checkStatus() {
    if (!this.checkIfBoardFull()) {
      //row one win
      if (
        this.board[0][0] === this.board[0][1] &&
        this.board[0][0] === this.board[0][2] &&
        this.board[0][0] !== null
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //row tow win
      else if (
        this.board[1][0] === this.board[1][1] &&
        this.board[1][0] === this.board[1][2] &&
        this.board[1][0] !== null
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //row three win
      else if (
        this.board[2][0] === this.board[2][1] &&
        this.board[2][0] === this.board[2][2] &&
        this.board[2][0] !== null
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //column one win
      else if (
        this.board[0][0] === this.board[1][0] &&
        this.board[0][0] === this.board[2][0] &&
        this.board[0][0] !== null
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //column tow win
      else if (
        this.board[0][1] === this.board[1][1] &&
        this.board[0][1] === this.board[2][1] &&
        this.board[0][1] !== null
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //column three win
      else if (
        this.board[0][2] === this.board[1][2] &&
        this.board[0][2] === this.board[2][2] &&
        this.board[0][2]
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //left diagonal win
      else if (
        this.board[0][0] === this.board[1][1] &&
        this.board[0][0] === this.board[2][2] &&
        this.board[0][0]
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //right diagonal win
      else if (
        this.board[0][2] === this.board[1][1] &&
        this.board[0][2] === this.board[2][0] &&
        this.board[0][2]
      ) {
        this.status = `${this.currentPlayer} win`
      }
      //playing
      else {
        this.status = "playing";
      }
    }

    //no one win
    else {
      this.status = "fail"
    }
  }
}


