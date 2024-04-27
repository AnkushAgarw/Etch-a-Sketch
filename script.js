gridContainer = document.querySelector(".container");

button = document.querySelector("button");
button.addEventListener("click", setNewGrid)

let gridNumber = 16

function setNewGrid() {
    gridNumber = Number(prompt("Choose how many squares per side you want in the grid. Maximum of 100", "16"));

    if (gridNumber > 100) {
        alert("The Maximum number of grid is 100")
    } else {
        gridContainer.textContent = "";

        for (let i = 0; i < gridNumber * gridNumber; i++) {
            grid = document.createElement("div");
            grid.classList.add("grid");
            grid.style.width = `${960 / gridNumber}px`;
            gridContainer.appendChild(grid);
        }
    }
}

for (let i = 0; i < gridNumber * gridNumber; i++) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${960 / gridNumber}px`;
    gridContainer.appendChild(grid);
}

gridContainer.addEventListener("mouseover", (e) => {
    target = e.target;
    if (target.matches(".grid")){
        target.classList.add("hover");
    }
})