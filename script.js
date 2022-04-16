function makeGrid(gridWidth = 600, gridHeight = 600, tileSize = 20) {
  const gridContainer = document.querySelector('#grid');
  gridContainer.style.width = gridWidth + "px";
  gridContainer.style.height = gridHeight + "px";

  const temp = document.createElement('div');
  temp.classList.add('grid-tile');
  temp.style.width = tileSize + 'px';
  temp.style.height = tileSize + 'px';
  for(let i = 0; i < Math.floor(gridWidth / (tileSize + 2)) * Math.floor(gridHeight / (tileSize +
        2)); i++) {
    gridContainer.appendChild(temp.cloneNode());
  }
}

makeGrid();



