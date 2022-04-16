function makeGrid() {
  const gridContainer = document.querySelector('#grid');
  console.log(gridContainer);

  const temp = document.createElement('div');
  temp.classList.add('grid-tile');
  for(let i = 0; i < 23 * 23; i++) {
    gridContainer.appendChild(temp.cloneNode());
    console.log(i);
  }
}

makeGrid();

