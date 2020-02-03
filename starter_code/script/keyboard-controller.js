class KeyboardController {
  constructor(game) {
    this.game = game;
    this.controlAttack = 0;
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();
      const code = event.keyCode;
      //let teste = 0;

      const controls = {
        //-DIVA CONTROLER ------:
        32: 'space',
        37: 'left',
        39: 'right',
        38: 'spell01',
        87: 'player2Spell1'
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
          case 'player2Spell1':
            this.game.magic = new Magic(this.game);
            /*
            let obj={
              power: 10,
              position: this.game.character.position,
              direction: this.game.character.direction,
              color: 'purple'
            }
            this.game.magic = new Magic(this.game, {
             ...obj
            });
            */
            this.game.magic.position.y = this.game.character.position.y;
            this.game.magic.position.x = this.game.character.position.x;
            break;
          case 'spell01':
            console.log('GO GIRL ' + this.game.diva.position.y);

            //THE SAME POSITION AS DIVA
            this.game.magic = new Magic(this.game);

            this.game.magic.position.y = this.game.diva.position.y;
            this.game.magic.position.x = this.game.diva.position.x;

            this.game.magic.attack(value);
            break;
        }
      }
    });
  }
}
