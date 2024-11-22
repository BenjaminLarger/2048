function createGrid() {
  console.log('createGrid()');
  const gridContainer = document.querySelector('.grid-container');
  gridContainer.innerHTML = '';

  const gridSize = 4;
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      cell.setAttribute('data-row', row);
      cell.setAttribute('data-col', col);
      gridContainer.appendChild(cell);
    }
  }
}

function getTileColor(value) {
  const colors = {
    2: '#eee4da',
    4: '#ede0c8',
    8: '#f2b179',
    16: '#f59563',
    32: '#f67c5f',
    64: '#f65e3b',
    128: '#edcf72',
    256: '#edcc61',
    512: '#edc850',
    1024: '#edc53f',
    2048: '#edc22e',
  };
  return colors[value] || '#cdc1b4'; // Default for tiles > 2048
}
