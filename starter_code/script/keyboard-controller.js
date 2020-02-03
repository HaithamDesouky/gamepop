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
        38: 'spell01'
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
            console.log(this.controlAttack);
            console.log('GO GIRL '+ this.game.diva.position.y);

           this.game.spellControl++;

            if(!this.controlAttack){

              //THE SAME POSITION AS DIVA
              this.game.magic.position.y = this.game.diva.position.y;
              this.game.magic.position.x = this.game.diva.position.x;

              this.game.magic.attack(value);
              this.controlAttack++;
              console.log(this.controlAttack);
            }
            
            
            
          break;
        }
      }

    });
  }
}
