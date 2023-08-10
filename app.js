const game = new TicTacToe();

const cells = document.querySelectorAll(".cell")
cells.forEach(function(element) {
    element.addEventListener('click', (e)=>playMove(e.target.id));
  });

const renderCurrentPlayer = (currentPlayer) =>{
    const currPlayerElement = document.getElementById("currentPlayer")
    currPlayerElement.textContent = `${currentPlayer} play`
}

const renderMove=(cellId, currentPlayer)=>{
    const cell = document.getElementById(cellId)
    if(currentPlayer === "x"){
        const x = document.createElement("div")
        x.className = "x"
        cell.appendChild(x)
    }else{
        const circle = document.createElement("div")
        circle.className = "circle"
        cell.appendChild(circle)
    }

}

const playMove=(cellId)=>{
    const position = cellId.split("").map(Number)
    const currentPlayer = game.currentPlayer
    console.log(currentPlayer)
    renderCurrentPlayer(currentPlayer)
    game.chooseCell(position)
    renderMove(cellId, currentPlayer)
}

