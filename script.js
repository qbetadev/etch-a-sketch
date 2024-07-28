const gridContainer = document.querySelector('.container-grid');
const buttonSize = document.querySelector('.button_size');
const buttonReset = document.querySelector('.button_reset');
const buttonRainbow = document.querySelector('.button_rainbow');
const buttonColor = document.querySelector('.button_color');
const inputColor = document.querySelector('.input_color');

//Color for painting after page loading
const DEFAULT_COLOR = 'rgb(0,0,0)';
//Grid size after page loading
const DEFAULT_SIZE = 16;
//Coloring mode after page loading
const DEFAULT_MODE = 'color';

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

// When true, moving the mouse draws on the canvas
let mouseDown = false;

function changeCurrentColor(newColor) {
    currentColor = newColor;
}

function changeCurrentMode(newMode) {
    currentMode = newMode;
}

function createGrid(size) {
    for (let row = 0; row < size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('container-grid__row');
        for (let cell = 0; cell < size; cell++) {
            const rowCell = document.createElement('div');
            rowCell.classList.add('container-grid__cell');
            rowCell.addEventListener('mousedown', () => {
                mouseDown = true;
            })
            rowCell.addEventListener('mouseup', () => {
                mouseDown = false;
            })
            rowCell.addEventListener('mouseover', () => {
                if (mouseDown && currentMode === 'color') {
                    rowCell.style.backgroundColor = currentColor;
                    increaseOpacity(rowCell);
                } else if (mouseDown && currentMode === 'rainbow') {
                    randomColor(rowCell);
                    increaseOpacity(rowCell);
                }
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

function changeGridSize() {
    currentSize = prompt('Please, enter the drawing pad size (max. 100)');
    if (currentSize > 100) {
        currentSize = 100;
    } else if (currentSize <= 0) {
        currentSize = DEFAULT_SIZE;
    } else if (!Number(currentSize)) {
        currentSize = prompt('Enter number!');
    }
    gridContainer.textContent = '';
    createGrid(currentSize);
    return currentSize;
}

//Reset grid with the last saved size
function resetGrid() {
    gridContainer.textContent = '';
    createGrid(currentSize);
}

buttonSize.addEventListener('click', changeGridSize);
buttonReset.addEventListener('click', resetGrid);
buttonRainbow.addEventListener('click', () => {
    changeCurrentMode('rainbow');
});
buttonColor.addEventListener('click', () => {
    changeCurrentMode('color');
})
inputColor.addEventListener('input', (element) => {
    changeCurrentColor(element.target.value);
});

createGrid(DEFAULT_SIZE);