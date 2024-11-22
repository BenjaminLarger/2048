function addRandomTile() {
  const emptyCells = Array.from(document.querySelectorAll('.grid-cell'))
    .filter(cell => !cell.textContent); // Find empty cells
  
  if (emptyCells.length === 0) return; // No space for a new tile
  
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  randomCell.textContent = Math.random() < 0.9 ? 2 : 4; // Add 2 or 4 randomly
}


function initializeGame() {
  createGrid();
  addRandomTile();
  addRandomTile();
  applyColors();
}

initializeGame();

document.addEventListener('keydown', handleKeys);
// Add event listener to the restart button inside the popup
document.getElementById('restart-btn-end').addEventListener('click', () => {
  hidePopup();
  initializeGame();
});

document.addEventListener('keydown', handleKeys);
// Add event listener to the restart button inside the popup
document.getElementById('restart-btn').addEventListener('click', () => {
  hidePopup();
  initializeGame();
});