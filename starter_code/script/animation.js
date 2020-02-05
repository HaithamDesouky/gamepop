let currentFrame = 0;
let frame_width = 900;
let frame_height = 900;

class Animation {
  constructor(game){
    this.game = game;    
  }

  runningCharacterRight(){
    console.log( 'running Left');
    //the position where the frame will be drawn
    var x = this.game.character.positionX + this.game.character.startX;
    var y = this.game.character.positionY + this.game.character.startY;

    //image source
    var arraySrc = ['../images/Character/Running/00.png',
                    '../images/Character/Running/01.png',
                    '../images/Character/Running/02.png',
                    '../images/Character/Running/03.png',
                    '../images/Character/Running/04.png',
                    '../images/Character/Running/05.png',
                    '../images/Character/Running/06.png',
                    '../images/Character/Running/07.png',
                    '../images/Character/Running/08.png',
                    '../images/Character/Running/09.png',
                    '../images/Character/Running/10.png',
                    '../images/Character/Running/11.png'];

    this.game.context.save();                
    const characterSrc =  arraySrc[0];
    const imageCharacter = new Image();
    imageCharacter.src = characterSrc;
    this.game.context.drawImage(imageCharacter, (this.game.character.positionX + this.game.character.startX) * GRID_SIZE, (this.game.character.positionY + this.game.character.startY) * GRID_SIZE, 160, 160);
    this.game.context.restore();              
    
  }

  idleBlinkingCharacter(){
    //the position where the frame will be drawn
    var x = this.game.character.positionX + this.game.character.startX;
    var y = this.game.character.positionY + this.game.character.startY;

    //image source
    var arraySrc = ['../images/Character/IdleBlinking/00.png',
                    '../images/Character/IdleBlinking/01.png',
                    '../images/Character/IdleBlinking/02.png',
                    '../images/Character/IdleBlinking/03.png',
                    '../images/Character/IdleBlinking/04.png',
                    '../images/Character/IdleBlinking/05.png',
                    '../images/Character/IdleBlinking/06.png',
                    '../images/Character/IdleBlinking/07.png',
                    '../images/Character/IdleBlinking/08.png',
                    '../images/Character/IdleBlinking/09.png',
                    '../images/Character/IdleBlinking/10.png',
                    '../images/Character/IdleBlinking/11.png',
                    '../images/Character/IdleBlinking/12.png',
                    '../images/Character/IdleBlinking/13.png',
                    '../images/Character/IdleBlinking/14.png',
                    '../images/Character/IdleBlinking/15.png',
                    '../images/Character/IdleBlinking/16.png',
                    '../images/Character/IdleBlinking/17.png'];

    this.game.context.save();  
    const caracterSrc =  arraySrc[17];
    const imageCaracter = new Image();

    /*function drawImage(){
      updateFrame();
    };*/

    imageCaracter.src = caracterSrc;
    this.game.context.drawImage(imageCaracter, (this.game.character.positionX + this.game.character.startX) * GRID_SIZE, (this.game.character.positionY + this.game.character.startY) * GRID_SIZE, 160, 160);
    this.game.context.restore();

  }


  runningCharacterLeft(){
    console.log( 'running Left');
    //the position where the frame will be drawn
    var x = this.game.character.positionX + this.game.character.startX;
    var y = this.game.character.positionY + this.game.character.startY;

    //image source
    var arraySrc = ['../images/Character/Running/12.png',
                    '../images/Character/Running/01.png',
                    '../images/Character/Running/02.png',
                    '../images/Character/Running/03.png',
                    '../images/Character/Running/04.png',
                    '../images/Character/Running/05.png',
                    '../images/Character/Running/06.png',
                    '../images/Character/Running/07.png',
                    '../images/Character/Running/08.png',
                    '../images/Character/Running/09.png',
                    '../images/Character/Running/10.png',
                    '../images/Character/Running/11.png'];

    this.game.context.save();                
    const characterSrc =  arraySrc[0];
    const imageCharacter = new Image();
    imageCharacter.src = characterSrc;
    this.game.context.drawImage(imageCharacter, (this.game.character.positionX + this.game.character.startX) * GRID_SIZE, (this.game.character.positionY + this.game.character.startY) * GRID_SIZE, 160, 160);
    this.game.context.restore();              
    
  }

  jumpingCharacterRight(){
    //console.log( 'running Left');
    //the position where the frame will be drawn
    var x = this.game.character.positionX + this.game.character.startX;
    var y = this.game.character.positionY + this.game.character.startY;

    //image source
    var arraySrc = ['../images/Character/JumpStart/00.png',
                    '../images/Character/JumpStart/01.png',
                    '../images/Character/JumpStart/02.png',
                    '../images/Character/JumpStart/03.png',
                    '../images/Character/JumpStart/04.png',
                    '../images/Character/JumpStart/05.png'];

    this.game.context.save();                
    const characterSrc =  arraySrc[0];
    const imageCharacter = new Image();
    imageCharacter.src = characterSrc;
    this.game.context.drawImage(imageCharacter, (this.game.character.positionX + this.game.character.startX) * GRID_SIZE, (this.game.character.positionY + this.game.character.startY) * GRID_SIZE, 160, 160);
    this.game.context.restore();              
    
  }

  runThrowingRight(){
    //console.log( 'running Left');
    //the position where the frame will be drawn
    var x = this.game.character.positionX + this.game.character.startX;
    var y = this.game.character.positionY + this.game.character.startY;

    //image source
    var arraySrc = ['../images/Character/RunThrowing/00.png',
                    '../images/Character/RunThrowing/01.png',
                    '../images/Character/RunThrowing/02.png',
                    '../images/Character/RunThrowing/03.png',
                    '../images/Character/RunThrowing/04.png',
                    '../images/Character/RunThrowing/05.png',
                    '../images/Character/RunThrowing/06.png',
                    '../images/Character/RunThrowing/07.png',
                    '../images/Character/RunThrowing/08.png',
                    '../images/Character/RunThrowing/09.png',
                    '../images/Character/RunThrowing/10.png',
                    '../images/Character/RunThrowing/11.png'];

    
    let imageCharacter = new Image();
    



    /*let counter = 0;
    let frame_width = 114;
    let frame_height = 88;

    draw() {
        let frame = Math.floor(counter % 4);
        this.game.context.drawImage(
          characterImage,
          frame * frame_width,
          0,
          frame_width,
          frame_height,
          this.positionX,
          this.positionY,
          this.width,
          this.height
        );
        counter = counter + 0.1;
      }
}*/
  /*drawImage(){
    let frame = arraySrc[counter];
    imageCharacter.src = frame;}*/
    

/*
    this.game.context.drawImage(
      imageCharacter,
      0,
      0,
      900,
      900,
      game.character.positionX + game.character.startX) * GRID_SIZE,
      game.character.positionY + game.character.startY) * GRID_SIZE,
      160,
      160
    )
  }
    */
    
    

    /*function updateFrame(){
      currentFrame++;
      console.log(currentFrame + 'in updateFrame');
      
    }

    const context = this.game.context;
    const game = this.game;

    function drawImage(){
      if(currentFrame <  arraySrc.length){

        updateFrame();

        console.log(currentFrame + 'in drawImage');

        //let characterSrc =  arraySrc[currentFrame];
        //console.log(typeof characterSrc);
        

        imageCharacter.src = arraySrc[currentFrame];
        console.log(imageCharacter.src);

        //context.save();
        //context.clearRect( (game.character.positionX + game.character.startX) * GRID_SIZE, (game.character.positionY + game.character.startY) * GRID_SIZE, 160, 160);
             
        context.drawImage(imageCharacter, (game.character.positionX + game.character.startX) * GRID_SIZE, (game.character.positionY + game.character.startY) * GRID_SIZE, 160, 160);
        context.restore();
      }
      
      
    }*/

    //debugger;

   
    //drawImage();
   
      
    

    
    
    
  }


}