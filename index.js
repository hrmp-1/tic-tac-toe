const grid = document.querySelector(".grid");

const buttons = grid.children;

let useNext = "X"

let internalGrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

function updateGrid(value, i) {
    
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

function checkGrid(){
    for (let i = 0; i < 3; i++) {
        //console.log(`Row ${i}: ${internalGrid[i][0]} ${internalGrid[i][1]} ${internalGrid[i][2]}`)
        if (internalGrid[i][0] === internalGrid[i][1] && internalGrid[i][1] === internalGrid[i][2] && internalGrid[i][1] != null) {
            console.log("Three Across!")
        }

        if (internalGrid[0][i] === internalGrid[1][i] && internalGrid[1][i] === internalGrid[2][i] && internalGrid[1][i] != null) {
            console.log("Three Down!")
        }

        if ((internalGrid[0][0] === internalGrid[1][1] && internalGrid[1][1] === internalGrid[2][2] && internalGrid[1][1] != null)
            ||
            (internalGrid[0][2] === internalGrid[1][1] && internalGrid[1][1] === internalGrid[2][0] && internalGrid[1][1] != null)
        ) {
            console.log("Three Diagonal!");
        }
    }
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", (e) => {
        //console.log(`Button: ${i+1} has been clicked!`)
        button.textContent = useNext;
        updateGrid(useNext, i)
        if (useNext === "X") {
            useNext = "O"
        } else {
            useNext = "X"
        }
        checkGrid()
    })
}