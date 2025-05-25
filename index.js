const grid = document.querySelector(".grid");
const startBtn = document.querySelector(".start-button");
const player1 = document.querySelector("#Player1");
const player2 = document.querySelector("#Player2");
const buttons = grid.children;

const displayController = (function() {

    let player1Name = "";
    let player2Name = "";

    let useNext = "X"

    let internalGrid = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]

    const updateGrid = (value, i) => {
    
        if (i <= 2) {
            internalGrid[0][i] = value
        } else if (i <= 5) {
            internalGrid[1][i-3] = value
        } else {
            internalGrid[2][i-6] = value
        }

        //console.log(`Row 1: ${internalGrid[0][0]} ${internalGrid[0][1]} ${internalGrid[0][2]}`);
        //console.log(`Row 2: ${internalGrid[1][0]} ${internalGrid[1][1]} ${internalGrid[1][2]}`);
        //console.log(`Row 3: ${internalGrid[2][0]} ${internalGrid[2][1]} ${internalGrid[2][2]}`);

    }

    const checkGrid = () =>{
        for (let i = 0; i < 3; i++) {
            //console.log(`Row ${i}: ${internalGrid[i][0]} ${internalGrid[i][1]} ${internalGrid[i][2]}`)
            if (internalGrid[i][0] === internalGrid[i][1] && internalGrid[i][1] === internalGrid[i][2] && internalGrid[i][1] != null) {
                console.log("Three Across!")
                return true
            }

            if (internalGrid[0][i] === internalGrid[1][i] && internalGrid[1][i] === internalGrid[2][i] && internalGrid[1][i] != null) {
                console.log("Three Down!")
                return true
            }

            if ((internalGrid[0][0] === internalGrid[1][1] && internalGrid[1][1] === internalGrid[2][2] && internalGrid[1][1] != null)
                ||
                (internalGrid[0][2] === internalGrid[1][1] && internalGrid[1][1] === internalGrid[2][0] && internalGrid[1][1] != null)
            ) {
                console.log("Three Diagonal!");
                return true
            }
        }
    }

    const startGame = () => {
        //hide start button
        startBtn.style.display = "none";

        //prompt user for player names
        player1Name = prompt("Please enter Player1's Name?");
        player2Name = prompt("Please enter Player2's Name?");

        player1.textContent = `Player 1: ${player1Name}`
        player2.textContent = `Player 2: ${player2Name}`

        //reveal tic tac toe gameboard
        grid.classList.remove("hidden");
    }

    const gameFinish = () => {
        alert("Game Finished!")
        
        for (let i = 0; i < buttons.length; i++) {
            const button = buttons[i];

            button.textContent = "";
        }

        player1Name = "";
        player2Name = "";

        player1.textContent = `Player 1: ${player1Name}`
        player2.textContent = `Player 2: ${player2Name}`

        startBtn.style.display = "block";

        grid.classList.add("hidden");
    }

    const updateBoard = (i) => {

        updateGrid(useNext, i)
        if (useNext === "X") {
            useNext = "O"
        } else {
            useNext = "X"
        }


        if (checkGrid()) {
            gameFinish()
        }

        return useNext;
    }

    return { updateBoard, updateGrid, checkGrid, startGame }
})();

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];


    button.addEventListener("click", (e) => {
        button.textContent = displayController.updateBoard(i);
    })
}

startBtn.addEventListener("click", (e) => {
    displayController.startGame();
})