const gridContainer = document.querySelector('.container-grid');
const buttonSize = document.querySelector('.container-buttons__button-size');
const buttonReset = document.querySelector('.container-buttons__button-reset');

function createGrid(size) {
    for (let row = 0; row < size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('container-grid__row');
        for (let cell = 0; cell < size; cell++) {
            const rowCell = document.createElement('div');
            rowCell.classList.add('container-grid__cell');
            rowCell.addEventListener('mouseover', () => {
                rowCell.style.backgroundColor = 'green';
                rowCell.style.opacity = 1;
            })
            gridRow.appendChild(rowCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

function changeGridSize() {
    let gridSize = prompt('Please, enter the drawing pad size (max. 100)');
    if (gridSize > 100) {
        gridSize = 100;
    } else if (gridSize <= 0) {
        gridSize = defaultGridSize;
    } else if (!Number(gridSize)) {
        gridSize = prompt('Enter number!');
    }
    gridContainer.textContent = '';
    createGrid(gridSize);
    return gridSize;
}

function resetGrid() {
    gridContainer.textContent = '';
    if (userGridSize == 0) {
        createGrid(defaultGridSize);
    } else {
        createGrid(userGridSize);
    }
}

let defaultGridSize = 4;
let userGridSize = 0;

buttonSize.addEventListener('click', () => {
    userGridSize = changeGridSize();
})

buttonReset.addEventListener('click', () => {
    resetGrid();
})

createGrid(defaultGridSize);