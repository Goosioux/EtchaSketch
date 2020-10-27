//value for initial grid creation
let i = 0;
//creates 16 divs in the grid
while (i < 256) {
  const div = document.createElement('div');
  const parent = document.querySelector('.container');
  div.classList.add('grid-item');
  div.addEventListener('mouseover', () => div.classList.add('hovered'));
  parent.appendChild(div);
  i++;
}
//reset and resize function
function gridReset(){
  const parent = document.querySelector('.container');
  //clears the board
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
  //prompts the user to input a new size
  let gridSize = +prompt('Please enter a number between 1 and 16.');
  while (gridSize < 1 || gridSize > 16) {
    gridSize = +prompt('Number out of range. Please choose a number between 1 and 50.')
  }
  //sets the new grid size using user input
  const container = document.querySelector('.container');
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  //populates it with the new divs
  let i = 0;
  while(i <= gridSize ** 2) {
    const div = document.createElement('div');
    const container = document.querySelector('.container');
    div.classList.add('grid-item');
    div.addEventListener('mouseover', () => div.classList.add('hovered'));
    container.appendChild(div)
    i++
  }
}
let reset = document.querySelector('.resetBtn');
reset.addEventListener('click', gridReset);