function displayPopup(message) {
  const popup = document.querySelector('.popup');
  popup.style.display = 'flex';
  popup.querySelector('#popup-message').textContent = message;
}

// Function to hide the popup
function hidePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none'; // Hide popup
}

function gameOver() {
  const cells = Array.from(document.querySelectorAll('.grid-cell')).map(cell => cell.textContent);

  // Check if there are any empty cells
  if (cells.includes('')) return false;

  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      const index = row * 4 + col;

      // Check right neighbor in the same row
      if (col < 3 && cells[index] === cells[index + 1]) {
        return false;
      }

      // Check bottom neighbor in the same column
      if (row < 3 && cells[index] === cells[index + 4]) {
        return false;
      }
    }
  }

  // If no moves are possible, return true (game over)
  displayPopup('You lost! Try again.');
  return true;
}
