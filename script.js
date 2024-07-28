const gridContainer = document.querySelector('.container-grid');
const buttonSize = document.querySelector('.button_size');
const buttonReset = document.querySelector('.button_reset');

function createGrid(size) {
    for (let row = 0; row < size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('container-grid__row');
        for (let cell = 0; cell < size; cell++) {
            const rowCell = document.createElement('div');
            rowCell.classList.add('container-grid__cell');
            rowCell.addEventListener('mouseover', () => {
                randomColor(rowCell);
                increaseOpacity(rowCell);
            })
            rowCell.addEventListener('mousedown', () => {
                randomColor(rowCell);
                increaseOpacity(rowCell);
            })
            gridRow.appendChild(rowCell);
        }
        gridContainer.appendChild(gridRow);
    }
}

//Random number for color generator
function randomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}

//Random color generator
function randomColor(element) {
	element.style.backgroundColor = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}

//Initial opacity set to 0, increasing step by step by 0.1
function increaseOpacity(element) {
	let opacity = Number(element.style.opacity);
	if (opacity < 1 && opacity >= 0) {
		opacity += 0.1;
	} else {
		opacity = 1;
	}
	element.style.opacity = opacity;
}

//Grid size after each page loading
let defaultGridSize = 16;

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

buttonSize.addEventListener('click', () => {
    userGridSize = changeGridSize();
})

//Grid size set by user via button
let userGridSize = 0;

//Reset grid with the last saved size
function resetGrid() {
    gridContainer.textContent = '';
    if (userGridSize == 0) {
        createGrid(defaultGridSize);
    } else {
        createGrid(userGridSize);
    }
}

buttonReset.addEventListener('click', () => {
    resetGrid();
})

createGrid(defaultGridSize);