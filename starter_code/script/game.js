class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();

    this.scoreController = 0;
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

  }

  cleanCanvas() {
    const context = this.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }

  checkCollision(){
    /*Position Character*/
    const characterX = (this.character.positionX + this.character.startX)*GRID_SIZE;
    const characterY = (this.character.positionY + this.character.startY)*GRID_SIZE;

    /*SPELL 01**************************************/
    if(this.magic){
      if(this.total.spell01[1] === true){
        /* Magic Position */
        const magicX = (this.magic.positionX + this.magic.startX)*GRID_SIZE;
        const magicY = (this.magic.positionY + this.magic.startY)*GRID_SIZE;
    

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(characterY) <= Math.round(magicY) + 25 &&
          Math.round(characterX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(characterY) + 50 > Math.round(magicY) 
          ){
        
          if(this.scoreController === 1){
            if(this.magic || this.magic02 || this.magic03){

              /*TOTAL CONTROLLER - Total number cant be negative*/ //SPELL 01//
              if(this.total.spell01[0]>=0 && this.total.spell01[1] === true){
              
              /*LIFE */
              this.scoreCharacter-= this.magic.power;
              document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';

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
        const magicX = (this.magic02.positionX + this.magic02.startX)*GRID_SIZE;
        const magicY = (this.magic02.positionY + this.magic02.startY)*GRID_SIZE;
    

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(characterY) <= Math.round(magicY) + 25 &&
          Math.round(characterX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(characterY) + 50 > Math.round(magicY) 
          ){
        
          if(this.scoreController === 1){
            
              /*CHECKCOLLISION SPELL 02*/
              if(this.total.spell02[0]>=0){
              
                /*LIFE */
                this.scoreCharacter-= this.magic02.power;
                document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
    
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
        const magicX = (this.magic03.positionX + this.magic03.startX)*GRID_SIZE;
        const magicY = (this.magic03.positionY + this.magic03.startY)*GRID_SIZE;
    

        /*CHECKCOLLISION*/
        if(
          /*UP*/
          Math.round(characterY) <= Math.round(magicY) + 25 &&
          Math.round(characterX) + 50 >= Math.round(magicX) &&

          /*BOTTOM*/
          Math.round(characterY) + 50 > Math.round(magicY) 
          ){
        
          if(this.scoreController === 1){
            
              /*CHECKCOLLISION SPELL 03*/
              if(this.total.spell03[0]>=0){
              
                /*LIFE */
                this.scoreCharacter-= this.magic03.power;
                document.getElementById('score-character').style.width = this.scoreCharacter.toString() + '%';
    
              }//this.total.spell03>=0
    
              this.scoreController = 0;
            }
          
          
        }
        
      }//if(collision)
     
    }//if(this.magic03)
    
    
  }//CheckColision


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

  paint() {
    this.cleanCanvas();

    this.diva.paint();

    this.character.paint();

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

  loop() {
    this.runLogic();
    this.paint();
    this.checkCollision();

    window.requestAnimationFrame(timestamp => this.loop(timestamp));
  }

  start() {
    this.diva = new Diva(this, 10, 0,-8,INICIAL_DX,INICIAL_DY,'pink');
    this.character = new Diva(this,10, 0,-8,INICIAL_CX,INICIAL_CY, 'green');

    this.loop();
  }
}
