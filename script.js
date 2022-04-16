
function getTile(tileSize) {
  const tile = document.createElement('div');
  tile.classList.add('grid-tile');
  tile.style.width = tileSize + 'px';
  tile.style.height = tileSize + 'px';
  return tile;
}

function makeGrid(gridWidth = 600, gridHeight = 600, tileSize = 20) {
  const gridContainer = document.querySelector('#grid');
  gridContainer.style.width = gridWidth + "px";
  gridContainer.style.height = gridHeight + "px";

  const temp = getTile(tileSize);
  temp.addEventListener('mouseover', () => console.log("test"));
  for(let i = 0; i < Math.floor(gridWidth / (tileSize + 2)) * Math.floor(gridHeight / (tileSize +
      2)); i++) {
    const temp2 = temp.cloneNode();
    temp2.addEventListener('mouseover', function() {
      this.style.backgroundColor = 'red';
    });
    gridContainer.appendChild(temp2);
  }
}

makeGrid();