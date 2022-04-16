
function getTile(tileSize) {
  const tile = document.createElement('div');
  tile.classList.add('grid-tile');
  tile.style.width = tileSize + 'px';
  tile.style.height = tileSize + 'px';
  tile.style.backgroundColor = 'black';
  tile.style.opacity = 0;
  return tile;
}

function makeGrid(gridWidth = 600, gridHeight = 600, tileSize = 10) {
  const gridContainer = document.querySelector('#grid');
  gridContainer.style.width = gridWidth + "px";
  gridContainer.style.height = gridHeight + "px";

  const temp = getTile(tileSize);
  temp.addEventListener('mouseover', () => console.log("test"));
  for(let i = 0; i < Math.floor(gridWidth / (tileSize + 2)) * Math.floor(gridHeight / (tileSize +
      2)); i++) {
    const temp2 = temp.cloneNode();
    temp2.addEventListener('mouseover', function() {
      this.style.opacity = parseFloat(this.style.opacity) + 0.2;
    });
    gridContainer.appendChild(temp2);
  }
}

function clearGrid() {
  const gridContainer = document.querySelector('#grid');
  while(gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  const tilesPerSide = prompt("How many tiles per side?");
  makeGrid(600, 600, (600 / tilesPerSide) - 2);
}

makeGrid();

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearGrid);