const grid = document.querySelector(".grid");

const buttons = grid.children;

let useNext = "X"

function checkGrid(boxFilled){
    
}

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    button.addEventListener("click", (e) => {
        console.log(`Button: ${i+1} has been clicked!`)
        button.textContent = useNext;
        if (useNext === "X") {
            useNext = "O"
        } else {
            useNext = "X"
        }
        checkGrid(i)
    })
}