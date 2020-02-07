class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();

    this.isRunning = false;
    
    this.scoreController = 0;
    this.scoreControllerCharacter = 0;
    this.scoreCharacter = 100;
    this.scoreDiva = 100;
    
    this.total={
      spell01: [10,true],
      spell02: [5,false],
      spell03: [5,false],
      spell04: [5,true],
      spell05: [5,false],
      spell06: [5,false]
    }

    this.setControlBindings();

    this.characterMoviment = 'characterIdle';
    this.divaMoviment = 'characterIdle';

    this.soundAttackCharacter = document.getElementById('soundAttackCharacter');
    this.soundAttackOrc = document.getElementById('soundAttackOrc');
    this.soundJumpCharacter = document.getElementById('soundJumpCharacter');
    this.soundRunCharacter = document.getElementById('soundRunCharacter');
    this.soundRunOrc = document.getElementById('soundRunOrc');
    this.backgroundSong =document.getElementById('backgroundSong');

  }

  cleanCanvas() {
    const context = this.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }

  setControlBindings () {
    const $buttonStart = document.getElementById('btn-start');
    const $buttonReset = document.getElementById('btn-reset');
    const $buttonPause = document.getElementById('btn-pause');
   
    
    $buttonStart.addEventListener('click', () => {
      //document.getElementById('playerCanvas').style.visibility = 'visible';
      this.start();
    });

    $buttonReset.addEventListener('click', () => {
      this.reset();
    });

    $buttonPause.addEventListener('click', () => {
      this.togglePause();
    });

  }

  checkCollision(){
    /*Position Character*/
    const characterX = (this.character.positionX + this.character.startX)*GRID_SIZE;
    const characterY = (this.character.positionY + this.character.startY)*GRID_SIZE;

    /*Position Diva*/
    const divaX = (this.diva.positionX + this.diva.startX)*GRID_SIZE;
    const divaY = (this.diva.positionY + this.diva.startY)*GRID_SIZE;

    
  
      
    /*SPELL 01**************************************/
    if(this.magic){
      if(this.total.spell01[1] === true){
        /* Magic Position */
       let obstacleX = (this.magic.positionX + this.magic.startX)*GRID_SIZE;
       const obstacleHeight  = 25;
       let obstacleY = (this.magic.positionY + this.magic.startY)*GRID_SIZE;
       const obstacleWidth = 25;

       const blockWidth = 100;
       const blockHeight = 70;
        /*
        console.log('-------------------')
        console.log(magicX + 25);
        console.log('=>');
        console.log(characterX +70);

        console.log(characterY);
        console.log('<')
        console.log(magicY +25);

        console.log(characterX)
        console.log('<');
        console.log(magicX +25);

        console.log(characterY + 70);
        console.log('<');
        console.log(magicY +25);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          characterX + blockWidth > obstacleX &&
          characterX < obstacleX + obstacleWidth &&
          characterY + blockHeight > obstacleY &&
          characterY < obstacleY + obstacleHeight
          
          ){

            //console.log('COLLISIONNNNNNNNNNNNNNNNNNNNNNNNN')
        
          if(this.scoreController === 1){
            if(this.magic || this.magic02 || this.magic03){

              /*TOTAL CONTROLLER - Total number cant be negative*/ //SPELL 01//
              if(this.total.spell01[0]>=0){
              
              /*LIFE */
              this.scoreCharacter-= this.magic.power;

              document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
              document.getElementById('porcent-character').innerHTML = this.scoreCharacter.toString() + '%';

              }//this.total.spell01>=0 

              this.scoreController = 0;
            }
          }//this.magic
          
        }
        
      }//if(collision)
     
    }//if(this.magic)

    /*SPELL 02**************************************/
    if(this.magic02){
      if(this.total.spell02[1] === true){
       /* Magic Position */
       let obstacleX = (this.magic02.positionX + this.magic02.startX)*GRID_SIZE;
       const obstacleHeight  = 25;
       let obstacleY = (this.magic02.positionY + this.magic02.startY)*GRID_SIZE;
       const obstacleWidth = 25;

       const blockWidth = 100;
       const blockHeight = 70;
    

        /*CHECKCOLLISION*/
        if(
          characterX + blockWidth > obstacleX &&
          characterX < obstacleX + obstacleWidth &&
          characterY + blockHeight > obstacleY &&
          characterY < obstacleY + obstacleHeight
          ){
        
          if(this.scoreController === 1){
            
              /*CHECKCOLLISION SPELL 02*/
              if(this.total.spell02[0]>=0){
              
                /*LIFE */
                this.scoreCharacter-= this.magic02.power;

                document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
                document.getElementById('porcent-character').innerHTML = this.scoreCharacter.toString() + '%';

              }//this.total.spell02>=0
    
              this.scoreController = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic)

    /*SPELL 03**************************************/
    if(this.magic03){
      if(this.total.spell03[1] === true){
        /* Magic Position */
         /* Magic Position */
         let obstacleX = (this.magic03.positionX + this.magic03.startX)*GRID_SIZE;
         const obstacleHeight  = 25;
         let obstacleY = (this.magic03.positionY + this.magic03.startY)*GRID_SIZE;
         const obstacleWidth = 25;
 
         const blockWidth = 100;
         const blockHeight = 70;
    

        /*CHECKCOLLISION*/
        if(
          characterX + blockWidth > obstacleX &&
          characterX < obstacleX + obstacleWidth &&
          characterY + blockHeight > obstacleY &&
          characterY < obstacleY + obstacleHeight
          ){
        
          if(this.scoreController === 1){
            
              /*CHECKCOLLISION SPELL 03*/
              if(this.total.spell03[0]>=0){
              
                /*LIFE */
                this.scoreCharacter-= this.magic03.power;

                document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
                document.getElementById('porcent-character').innerHTML = this.scoreCharacter.toString() + '%';
    
              }//this.total.spell03>=0
    
              this.scoreController = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic03)


    /*SPELL 04**************************************/
    if(this.magic04){
      if(this.total.spell04[1] === true){
        /* Magic Position */
        let obstacleX = (this.magic04.positionX + this.magic04.startX)*GRID_SIZE;
        const obstacleHeight  = 25;
        let obstacleY = (this.magic04.positionY + this.magic04.startY)*GRID_SIZE;
        const obstacleWidth = 25;

        const blockWidth = 100;
        const blockHeight = 70;
        /*
        console.log('-------------------')
        console.log(magicY + 25);
        console.log('=>');
        console.log(divaY);
        console.log(divaX+5);
        console.log('>=')
        console.log(magicX);
        console.log(divaY +5)
        console.log('>');
        console.log(magicY);
        console.log(magicX +25);
        console.log('>=');
        console.log(divaX);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          divaX + blockWidth > obstacleX &&
          divaX < obstacleX + obstacleWidth &&
          divaY + blockHeight > obstacleY &&
          divaY < obstacleY + obstacleHeight
          ){
        
          if(this.scoreControllerCharacter === 1){
              
              /*CHECKCOLLISION SPELL 04*/
              if(this.total.spell04[0]>=0){
                
                /*LIFE */
                this.scoreDiva-= this.magic04.power;

                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
                document.getElementById('porcent-diva').innerHTML = this.scoreDiva.toString() + '%';

              }//this.total.spell04>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic04)

    /*SPELL 05**************************************/
    if(this.magic05){
      if(this.total.spell05[1] === true){
        /* Magic Position */
        let obstacleX = (this.magic05.positionX + this.magic05.startX)*GRID_SIZE;
        const obstacleHeight  = 25;
        let obstacleY = (this.magic05.positionY + this.magic05.startY)*GRID_SIZE;
        const obstacleWidth = 25;

        const blockWidth = 100;
        const blockHeight = 70;
        /*
        console.log('-------------------')
        console.log(magicY + 25);
        console.log('=>');
        console.log(divaY);
        console.log(divaX+5);
        console.log('>=')
        console.log(magicX);
        console.log(divaY +5)
        console.log('>');
        console.log(magicY);
        console.log(magicX +25);
        console.log('>=');
        console.log(divaX);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
          divaX + blockWidth > obstacleX &&
          divaX < obstacleX + obstacleWidth &&
          divaY + blockHeight > obstacleY &&
          divaY < obstacleY + obstacleHeight
          ){
        
          if(this.scoreControllerCharacter === 1){
              
              /*CHECKCOLLISION SPELL 05*/
              if(this.total.spell05[0]>=0){
               
                /*LIFE */
                this.scoreDiva-= this.magic05.power;
          
                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
                document.getElementById('porcent-diva').innerHTML = this.scoreDiva.toString() + '%';
    
              }//this.total.spell05>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic05)


    /*SPELL 06**************************************/
    if(this.magic06){
      if(this.total.spell06[1] === true){
        /* Magic Position */
        let obstacleX = (this.magic06.positionX + this.magic06.startX)*GRID_SIZE;
        const obstacleHeight  = 25;
        let obstacleY = (this.magic06.positionY + this.magic06.startY)*GRID_SIZE;
        const obstacleWidth = 25;

        const blockWidth = 100;
        const blockHeight = 70;
        
       /*console.log('-------------------')
        console.log(divaX + blockWidth);
        console.log('>');
        console.log(obstacleX);

        console.log(divaX);
        console.log('<')
        console.log(obstacleX + obstacleWidth);

        console.log(divaY + blockHeight)
        console.log('>');
        console.log(obstacleY);

        console.log(divaY);
        console.log('<');
        console.log(obstacleY + obstacleHeight);
        debugger;*/

        /*CHECKCOLLISION*/
        if(
         
           divaX + blockWidth > obstacleX &&
           divaX < obstacleX + obstacleWidth &&
           divaY + blockHeight > obstacleY &&
           divaY < obstacleY + obstacleHeight

          ){
        
          if(this.scoreControllerCharacter === 1){
             
              /*CHECKCOLLISION SPELL 06*/
              if(this.total.spell06[0]>=0){
                
                /*LIFE */
                this.scoreDiva-= this.magic06.power;
          
                document.getElementById('score-diva').style.width = this.scoreDiva.toString() + '%';
                document.getElementById('porcent-diva').innerHTML = this.scoreDiva.toString() + '%';
    
              }//this.total.spell06>=0
    
              this.scoreControllerCharacter = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic06)



    

    
    
  }//CheckColision

  reset() {
    

    this.diva = new Diva(this, 10, 0,-8,INICIAL_DX,INICIAL_DY,'pink', divaImages);
    this.character = new Diva(this,10, 0,-8,INICIAL_CX,INICIAL_CY, 'green', characterImages);

    this.scoreCharacter = 100;
    this.scoreDiva = 100;

    document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
    document.getElementById('porcent-character').innerHTML = this.scoreDiva.toString() + '%';


    document.getElementById('score-diva').style.width = this.scoreCharacter.toString() + '%';
    document.getElementById('porcent-diva').innerHTML = this.scoreCharacter.toString() + '%';

    this.characterMoviment = 'characterIdle';
    this.divaMoviment = 'characterIdle';

    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }
    
    }

  gameOver(){
    
    if(this.scoreCharacter <= 0){
      document.getElementById('character-loose').style.visibility='visible';
      document.getElementById('diva-loose').style.visibility = 'hidden';

    }
 
    if(this.scoreDiva <= 0){
      document.getElementById('character-loose').style.visibility = 'hidden';
      document.getElementById('diva-loose').style.visibility='visible';

      

      
      

    }

    //Inspect spell quantify - diva loose
    if(this.total.spell01[0] === 0 && this.total.spell02[0] === 0 && this.total.spell03[0] === 0){
      document.getElementById('character-loose').style.visibility = 'hidden';
      document.getElementById('diva-loose').style.visibility='visible';

      

     
      
    }

    //Inspect spell quantify - character loose
    if(this.total.spell04[0] === 0 && this.total.spell05[0] === 0 && this.total.spell06[0] === 0){

      document.getElementById('character-loose').style.display='inline-flex';
      document.getElementById('diva-loose').style.visibility = 'hidden';

      document.getElementById('gameOver').style.backgroundImage = "url('./images/GameItens/back.png')";

     

      //console.log(this.isRunning);
    }
  }


  runLogic() {
    this.diva.runLogic();

    this.character.runLogic();

    if (this.magic) {
      this.magic.runLogic();
    }

    if (this.magic02) {
      this.magic02.runLogic();
    }

    if(this.magic03){
      this.magic03.runLogic();
    }

    if(this.magic04){
      this.magic04.runLogic();
    }

    if(this.magic05){
      this.magic05.runLogic();
    }

    if(this.magic06){
      this.magic06.runLogic();
    }

    if(this.magicCharacter){
      this.magicCharacter.runLogic();
    }
  }

  paint(timestamp) {
    this.cleanCanvas();

    
      
    //position default:
    this.diva.changeImage(this.divaMoviment,'diva',timestamp);

    //position default:
    this.character.changeImage(this.characterMoviment,'character',timestamp);

   
    if (this.magic) {
      this.magic.paint();
    }

    if(this.magic02){
      this.magic02.paint();
    }

    if(this.magic03){
      this.magic03.paint();
    }

    if(this.magic04){
      this.magic04.paint();
    }

    if(this.magic05){
      this.magic05.paint();
    }

    if(this.magic06){
      this.magic06.paint();
    }

    if(this.magicCharacter) {
      this.magicCharacter.paint();
    }

    
    
  }

  loop(timestamp) {
    this.runLogic();
    this.paint(timestamp);
    this.checkCollision();
    this.gameOver();   
    this.backgroundSong.play();
    
    if(this.isRunning){
      window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }
    
  }

  start () {
    
    
    this.reset();
    //this.loop();
  }


  

  togglePause () {
    if (!this.isRunning) {
      this.isRunning = true;
      this.loop();
    }else if(this.isRunning){
      this.isRunning = false;
    }
  }

}
