const gridContainer = document.querySelector('.container-grid');

function createGrid(size) {
    for (let row = 0; row < size; row++) {
        const row = document.createElement('div');
        row.classList.add('container-grid__row');
        for (let cell = 0; cell < size; cell++) {
            const rowCell = document.createElement('div');
            rowCell.classList.add('container-grid__cell');
            rowCell.addEventListener('mouseover', () => {
                rowCell.style.backgroundColor = 'green';
                rowCell.style.opacity = 1;
            })
            row.appendChild(rowCell);
        }
        gridContainer.appendChild(row);
    }
}

createGrid(prompt('Enter size'));