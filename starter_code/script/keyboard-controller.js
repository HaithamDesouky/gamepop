class KeyboardController {
  constructor(game) {
    this.game = game;
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();
      const code = event.keyCode;

      const controls = {
        //-DIVA CONTROLER ------:
        32: 'space',
        37: 'left',
        39: 'right',
        49: 'spell01'
      };

      if (Object.keys(controls).includes(code.toString())) {
        const value = controls[code];
        switch (value) {
          case 'space':
            this.game.diva.divaJump();
            console.log('jump');
            break;
          case 'left':
          case 'right':
            this.game.diva.move(value);
            //console.log('moviment');
            break;
          case 'spell01':
            this.game.magic.attack(value);
        }
      }

      //console.log(event);

      //KEY BEHAVIOR!!
      /*switch (event.keyCode) {

        //-DIVA CONTROLER ------:
          case 37:
            console.log('LEFT');
            this.game.diva.position('left');
            break;

          case 39:
            console.log('Right');
            this.game.diva.position('right');
            break;
          
          case 40:
            console.log('down');
            this.game.diva.position('down');
            break;

          case 32:
            console.log('Jump');
            this.game.diva.position('up');       
            break;
            
      }*/
    });
  }
}
