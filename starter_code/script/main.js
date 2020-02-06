window.addEventListener('load', () => {
  const $canvas = document.querySelector('canvas');
  
  document.getElementById('character-loose').style.display = 'none';
  document.getElementById('diva-loose').style.display = 'none';

  //document.getElementById('playerCanvas').style.visibility = 'hidden';
  
  const game = new Game($canvas);

  //game.start();
});
