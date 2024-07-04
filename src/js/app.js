document.addEventListener("DOMContentLoaded", () => { 
  const cells = document.querySelectorAll(itemcell);
  const image = document.createElement("img");
  image.src = './js/goblin.png';
  const goblinCell = null;

  function indexCell (){
    const index = Math.floor(Math.random() * cells.length);
    return cells[index];
  }

  function playGoblin (){
    newIndex = indexCell();
    if(goblinCell != newIndex) {
      goblinCell = newIndex;
      goblinCell.appendChild(image);
    }
  }
  setInterval(playGoblin, 2000);

});

