class KeyboardController {
  constructor(game) {
    this.game = game;
    
    //ARRAY CONTROLLER
    this.i = 0;

    
  }

  setKeyBindings() {
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();
      const code = event.keyCode;
      

      const controls = {
        //-DIVA CONTROLER ------:
        38: 'jumpDiva',   //arrowUp
        37: 'left',       //arrowleft
        39: 'right',      //arrowright
        32: 'spellDiva',   //space
        40: 'changeSpellDiva', //arrowdown

        //-CHACARACTER CONTROLER ------:
        87: 'jumpCharacter',  //W
        68: 'rightCharacter',  //D
        65: 'leftCharacter',   //A
        9: 'spellCharacter',   //Tab
        83: 'changeSpellCharacter' //S
      };

      if (Object.keys(controls).includes(code.toString())) {
        const value = controls[code];
        switch (value) {

          /*******DIVA**************/
          /*JUMP*/
          case 'jumpDiva':
            //position default:
            this.game.divaMoviment = 'jumpingCharacter';
            this.game.diva.changeImage(this.game.divaMoviment,this.game.timestamp);
            

            this.game.diva.jump();

            

            this.game.scoreDiva -= 2;
            document.getElementById('score-diva').style.width = this.game.scoreDiva.toString() + '%';
            document.getElementById('porcent-diva').innerHTML = this.game.scoreDiva.toString() + '%';

            break;

          case 'left':

            this.game.divaMoviment = 'leftCharacter';
            this.game.diva.changeImage(this.game.divaMoviment,this.game.timestamp);

            this.game.diva.move(value);
          break;


          case 'right':

            this.game.divaMoviment = 'rightCharacter';
            this.game.diva.changeImage(this.game.divaMoviment,this.game.timestamp);

            this.game.diva.move(value);
            break;

          case 'spellDiva':

            this.game.divaMoviment = 'attackCharacter';
           
            this.game.diva.changeImage(this.game.divaMoviment,this.game.timestamp);
      
          /*SPELL 01 SELECT*/
          if(this.game.total.spell01[1] === true){

            if(this.game.total.spell01[0] > 0 /*this.game.scoreDiva > 0*/){
              this.game.total.spell01[0]--;
              document.getElementById('spell01').innerText = this.game.total.spell01[0];
              //THE SAME POSITION AS DIVA
              this.game.magic = new Magic(this.game, 5, 0,0,INICIAL_DX,INICIAL_DY, 0, 0, 'left','black');

              this.game.magic.positionY = this.game.diva.positionY;
              this.game.magic.positionX = this.game.diva.positionX;

              this.game.magic.attack();

              this.game.scoreController = 1;
              
            } else if(this.game.total.spell01[0] <= 0){
              this.game.total.spell01[1] = false;
             
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
              document.getElementById(arraySelect[this.i]).style.backgroundColor = 'red';

              this.game.total.spell01[1] = true;
              this.game.total.spell02[1] = false;
              this.game.total.spell03[1] = false;

              this.i++;
            }else if(this.i === 1){
              document.getElementById(arraySelect[this.i]).style.backgroundColor = 'red';

              this.game.total.spell01[1] = false;
              this.game.total.spell02[1] = true;
              this.game.total.spell03[1] = false;

              document.getElementById(arraySelect[this.i-1]).style.backgroundColor = 'white';
              this.i++;
              
            }else if(this.i === 2){
              document.getElementById(arraySelect[this.i]).style.backgroundColor = 'red';

              this.game.total.spell01[1] = false;
              this.game.total.spell02[1] = false;
              this.game.total.spell03[1] = true;

              document.getElementById(arraySelect[this.i-1]).style.backgroundColor = 'white';
              this.i=0;
            }

            
          break;
/********************************************************************************************************************
 * ********************************************************************************************************************/
          /*******Character**************/

          /*JUMP*/
          case 'jumpCharacter':

            this.game.characterMoviment = 'jumpingCharacter';
            this.game.character.changeImage( this.characterMoviment,this.game.timestamp);

            this.game.character.jump();

            this.game.scoreCharacter -= 1;
            document.getElementById('score-character').style.width = this.game.scoreCharacter.toString() + '%';
            document.getElementById('porcent-character').innerHTML = this.game.scoreCharacter.toString() + '%';
            
            break;

          /*Moviment*/
          case 'rightCharacter':
            this.game.character.move(value);

            this.game.characterMoviment = 'rightCharacter';
            this.game.character.changeImage(this.characterMoviment, this.game.timestamp);
          break;

          case 'leftCharacter':
            this.game.character.move(value);

            this.game.characterMoviment = 'leftCharacter';
            this.game.character.paint( this.game.characterMoviment);
          break;

          /*ATTACK*/
          case 'spellCharacter':

            this.game.characterMoviment = 'attackCharacter';
            this.game.character.changeImage(this.characterMoviment, this.game.timestamp);
          
          /*SPELL 04 SELECT*/
          if(this.game.total.spell04[1] === true){

            if(this.game.total.spell04[0] > 0 /*this.game.scoreDiva > 0*/){
              this.game.total.spell04[0]--;
              document.getElementById('spell04').innerText = this.game.total.spell04[0];
              //THE SAME POSITION AS CHARACTER
              this.game.magic04 = new Magic(this.game, 5, 0,0,INICIAL_CX,INICIAL_CY, 0, 0, 'right','purple');

            

              this.game.magic04.positionY = this.game.character.positionY;
              this.game.magic04.positionX = this.game.character.positionX;

              this.game.magic04.attack();

              this.game.scoreControllerCharacter = 1;
              
            } else if(this.game.total.spell04[0] <= 0){
              this.game.total.spell04[1] = false;
              console.log('this.game.total.spell04[1] === true '+ this.game.total.spell04[1])
            }

          /*SPELL 05 SELECT*/ 
          }else if(this.game.total.spell05[1] === true){
            console.log('spell 05 select');


            if(this.game.total.spell05[0] > 0 /*this.game.scorecharacter > 0*/){

              this.game.total.spell05[0]--;
              document.getElementById('spell05').innerText = this.game.total.spell05[0];
              //THE SAME POSITION AS character
              this.game.magic05 = new Magic(this.game, 20, 0,0,INICIAL_CX,INICIAL_CY, 0, 0, 'right','yellow');

            

              this.game.magic05.positionY = this.game.character.positionY;
              this.game.magic05.positionX = this.game.character.positionX;

              this.game.magic05.attack();

              this.game.scoreControllerCharacter = 1;
              
            } else if(this.game.total.spell05[0] <= 0){
              this.game.total.spell05[1] = false;
              console.log('this.game.total.spell05[1] === true '+ this.game.total.spell05[1])
            }

            /*SPELL 06 SELECT*/ 
          }else if(this.game.total.spell06[1] === true){
            console.log('spell 06 select');


            if(this.game.total.spell06[0] > 0 /*this.game.scoreCharacter > 0*/){

              this.game.total.spell06[0]--;

              document.getElementById('spell06').innerText = this.game.total.spell06[0];

              //CREATION MAGIC 06 - THE SAME POSITION AS character
              this.game.magic06 = new Magic(this.game, 8, 0,0,INICIAL_CX,INICIAL_CY, 0, 0, 'right','orange');

              this.game.magic06.positionY = this.game.character.positionY;
              this.game.magic06.positionX = this.game.character.positionX;

              this.game.magic06.attack();

              this.game.scoreControllerCharacter = 1;
              
            } else if(this.game.total.spell06[0] <= 0){
              this.game.total.spell06[1] = false;
              console.log('this.game.total.spell06[1] === true '+ this.game.total.spell06[1])
            }
            
          }
            
          break;

          case 'changeSpellCharacter':
            
            const arrayCharacter = ['macroSpell04','macroSpell05', 'macroSpell06'];

            if(this.i === 0){
              document.getElementById(arrayCharacter[arrayCharacter.length-1]).style.backgroundColor = 'white';
              document.getElementById(arrayCharacter[this.i]).style.backgroundColor = 'pink';

              this.game.total.spell04[1] = true;
              this.game.total.spell05[1] = false;
              this.game.total.spell06[1] = false;

              this.i++;
            }else if(this.i === 1){
              document.getElementById(arrayCharacter[this.i]).style.backgroundColor = 'pink';

              this.game.total.spell04[1] = false;
              this.game.total.spell05[1] = true;
              this.game.total.spell06[1] = false;

              document.getElementById(arrayCharacter[this.i-1]).style.backgroundColor = 'white';
              this.i++;
              
            }else if(this.i === 2){
              document.getElementById(arrayCharacter[this.i]).style.backgroundColor = 'pink';

              this.game.total.spell04[1] = false;
              this.game.total.spell05[1] = false;
              this.game.total.spell06[1] = true;

              document.getElementById(arrayCharacter[this.i-1]).style.backgroundColor = 'white';
              this.i=0;
            }


          break;


        }
      }
    });
  }
}
