window.addEventListener('load', () => {
  const $canvas = document.querySelector('canvas');
  const $score = document.querySelector('#score-diva')

  const game = new Game($canvas);

  game.start();
});
