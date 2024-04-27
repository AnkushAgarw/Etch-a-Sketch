gridContainer = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    grid = document.createElement("div");
    grid.classList.add("grid");
    gridContainer.appendChild(grid);
}