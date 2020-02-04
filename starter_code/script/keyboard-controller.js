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
        32: 'jumpDiva',
        37: 'left',
        39: 'right',
        38: 'spellDiva',

        //-CHACARACTER CONTROLER ------:
        83: 'jumpCharacter',
        68: 'rightCharacter',
        65: 'leftCharacter',
        87: 'spellCharacter'
      };

      if (Object.keys(controls).includes(code.toString())) {
        const value = controls[code];
        switch (value) {

          /*******DIVA**************/
          /*JUMP*/
          case 'jumpDiva':
            this.game.diva.jump();
            break;

          case 'left':
          case 'right':
            this.game.diva.move(value);
            break;

          case 'spellDiva':
           
            //THE SAME POSITION AS DIVA
            this.game.magic = new Magic(this.game, 10, 0,0,INICIAL_DX,INICIAL_DY, 0, 0, 'left','black');

           

            this.game.magic.positionY = this.game.diva.positionY;
            this.game.magic.positionX = this.game.diva.positionX;

            this.game.magic.attack();
            break;

          /*******Character**************/
          /*JUMP*/
          case 'jumpCharacter':
            this.game.character.jump();
            break;

          /*Moviment*/
          case 'rightCharacter':
          case 'leftCharacter':
            this.game.character.move(value);
          break;

          /*ATTACK*/
          case 'spellCharacter':
            

            this.game.magicCharacter = new Magic(this.game, 10, 0,0,INICIAL_CX,INICIAL_CY, 0, 0, 'right','purple');

            this.game.magicCharacter.positionY = this.game.character.positionY;
            this.game.magicCharacter.positionX = this.game.character.positionX;

            this.game.magicCharacter.attack();
          break;


        }
      }
    });
  }
}
