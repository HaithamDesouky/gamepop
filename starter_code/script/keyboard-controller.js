class KeyboardController {
  constructor(game) {
    this.game = game;
    
    this.i = 0;

    this.spell02 = false;
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
        40: 'changeSpellDiva',

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
          
          /*SPELL 01 SELECT*/
          if(this.game.total.spell01[1] === true){

            if(this.game.total.spell01[0] > 0 /*this.game.scoreDiva > 0*/){
              this.game.total.spell01[0]--;
              document.getElementById('spell01').innerText = this.game.total.spell01[0];
              //THE SAME POSITION AS DIVA
              this.game.magic = new Magic(this.game, 10, 0,0,INICIAL_DX,INICIAL_DY, 0, 0, 'left','black');

            

              this.game.magic.positionY = this.game.diva.positionY;
              this.game.magic.positionX = this.game.diva.positionX;

              this.game.magic.attack();

              this.game.scoreController = 1;
              
            } else if(this.game.total.spell01[0] <= 0){
              this.game.total.spell01[1] = false;
              console.log('this.game.total.spell01[1] === true '+ this.game.total.spell01[1])
            }

          /*SPELL 02 SELECT*/ 
          }else if(this.game.total.spell02[1] === true){
            console.log('spell 02 select');


            if(this.game.total.spell02[0] > 0 /*this.game.scoreDiva > 0*/){

              this.game.total.spell02[0]--;
              document.getElementById('spell02').innerText = this.game.total.spell02[0];
              //THE SAME POSITION AS DIVA
              this.game.magic02 = new Magic(this.game, 5, 0,0,INICIAL_DX,INICIAL_DY, 0, 0, 'left','yellow');

            

              this.game.magic02.positionY = this.game.diva.positionY;
              this.game.magic02.positionX = this.game.diva.positionX;

              this.game.magic02.attack();

              this.game.scoreController = 1;
              
            } else if(this.game.total.spell02[0] <= 0){
              this.game.total.spell02[1] = false;
              console.log('this.game.total.spell02[1] === true '+ this.game.total.spell02[1])
            }

            /*SPELL 03 SELECT*/ 
          }else if(this.game.total.spell03[1] === true){
            console.log('spell 03 select');


            if(this.game.total.spell03[0] > 0 /*this.game.scoreDiva > 0*/){

              this.game.total.spell03[0]--;

              document.getElementById('spell03').innerText = this.game.total.spell03[0];

              //CREATION MAGIC 03 - THE SAME POSITION AS DIVA
              this.game.magic03 = new Magic(this.game, 8, 0,0,INICIAL_DX,INICIAL_DY, 0, 0, 'left','orange');

              this.game.magic03.positionY = this.game.diva.positionY;
              this.game.magic03.positionX = this.game.diva.positionX;

              this.game.magic03.attack();

              this.game.scoreController = 1;
              
            } else if(this.game.total.spell03[0] <= 0){
              this.game.total.spell03[1] = false;
              console.log('this.game.total.spell03[1] === true '+ this.game.total.spell03[1])
            }
            
          }
            
          break;

          case 'changeSpellDiva':
            //let i = -1;
            const arraySelect = ['macroSpell01','macroSpell02', 'macroSpell03'];

            if(this.i=== 0){
              document.getElementById(arraySelect[arraySelect.length-1]).style.backgroundColor = 'white';
              document.getElementById(arraySelect[this.i]).style.backgroundColor = 'pink';

              this.game.total.spell01[1] = true;
              this.game.total.spell02[1] = false;
              this.game.total.spell03[1] = false;

              this.i++;
            }else if(this.i === 1){
              document.getElementById(arraySelect[this.i]).style.backgroundColor = 'pink';

              this.game.total.spell01[1] = false;
              this.game.total.spell02[1] = true;
              this.game.total.spell03[1] = false;

              document.getElementById(arraySelect[this.i-1]).style.backgroundColor = 'white';
              this.i++;
              
            }else if(this.i === 2){
              document.getElementById(arraySelect[this.i]).style.backgroundColor = 'pink';

              this.game.total.spell01[1] = false;
              this.game.total.spell02[1] = false;
              this.game.total.spell03[1] = true;

              document.getElementById(arraySelect[this.i-1]).style.backgroundColor = 'white';
              this.i=0;
            }

            
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
            

            this.game.magicCharacter = new Magic(this.game, 3, 0,0,INICIAL_CX,INICIAL_CY, 0, 0, 'right','purple');

            this.game.magicCharacter.positionY = this.game.character.positionY;
            this.game.magicCharacter.positionX = this.game.character.positionX;

            this.game.magicCharacter.attack();
          break;


        }
      }
    });
  }
}
