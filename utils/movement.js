function handleKeys(event) {
  if (gameOver() === true) {
    console.log('Game over!');
    return;
  }

  switch (event.key) {
    case 'ArrowUp':
      moveUp();
      break;
    case 'ArrowDown':
      moveDown();
      break;
    case 'ArrowLeft':
      moveLeft();
      break;
    case 'ArrowRight':
      moveRight();
      break;
    default:
      return; // Ignore other keys
  }
  applyColors();
}

function applyColors() {
  const cells = Array.from(document.querySelectorAll('.grid-cell'));
  cells.forEach(cell => {
    cell.style.backgroundColor = getTileColor(Number(cell.textContent));
    // If one cell has a value of 2048, the player wins
    if (cell.textContent === '2048') {
      displayPopup('You win! Congratulations!');
    }
  });
}

function mergeCells(cells) {
  const merged = [];
  let lastValue = null;
  cells.forEach(value => {
    if (value) {
      if (value === lastValue) {
        merged[merged.length - 1] = lastValue * 2;
        lastValue = null;
      } else {
        merged.push(value);
        lastValue = value;
      }
    }
  });
  return merged.concat(Array(cells.length - merged.length).fill(''));
}

function moveLeft() {
  console.log('moveLeft()');
  for (let row = 0; row < 4; row++) {
    const cells = Array.from(document.querySelectorAll(`.grid-cell[data-row="${row}"]`))
      .map(cell => cell.textContent);
    const merged = mergeCells(cells);
    merged.forEach((value, index) => {
      document.querySelector(`.grid-cell[data-row="${row}"][data-col="${index}"]`).textContent = value;
    });
  }
  addRandomTile();
}

function moveUp() {
  for (let col = 0; col < 4; col++) {
    const cells = Array.from(document.querySelectorAll(`.grid-cell[data-col="${col}"]`))
      .map(cell => cell.textContent);
    const merged = mergeCells(cells);
    merged.forEach((value, index) => {
      document.querySelector(`.grid-cell[data-row="${index}"][data-col="${col}"]`).textContent = value;
    });
  }
  addRandomTile();
}

function moveRight() {
  for (let row = 0; row < 4; row++) {
    const cells = Array.from(document.querySelectorAll(`.grid-cell[data-row="${row}"]`))
      .map(cell => cell.textContent).reverse();
    const merged = mergeCells(cells).reverse();
    merged.forEach((value, index) => {
      document.querySelector(`.grid-cell[data-row="${row}"][data-col="${index}"]`).textContent = value;
    });
  }
  addRandomTile();
}

function moveDown() {
  for (let col = 0; col < 4; col++) {
    const cells = Array.from(document.querySelectorAll(`.grid-cell[data-col="${col}"]`))
      .map(cell => cell.textContent).reverse();
    const merged = mergeCells(cells).reverse();
    merged.forEach((value, index) => {
      document.querySelector(`.grid-cell[data-row="${index}"][data-col="${col}"]`).textContent = value;
    });
  }
  addRandomTile();
}