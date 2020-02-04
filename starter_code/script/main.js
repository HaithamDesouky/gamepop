window.addEventListener('load', () => {
  const $canvas = document.querySelector('canvas');
  

  //document.querySelector('#score-character').style.width = '80%';



  const game = new Game($canvas);

  game.start();
});
