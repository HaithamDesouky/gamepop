class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();

    this.spellControl = false;
  }

  cleanCanvas() {
    const context = this.context;
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  }

  checkCollision() {
    /* Magic Position */
    /*const magicX = this.magic.positionX;
    const magicY = this.magic.positionY;*/

    /*Position Character*/
    const characterX = this.character.positionX;
    const characterY = this.character.positionY;

    
    if(this.character.positionX<0){
      console.log('checkcollison is working');
    }


    /*
    const positionCharacter = this.game.character.position;
    console.log(position.x);
    console.log(positionCharacter.x);
    console.log(position.y);
    console.log(positionCharacter.y);*/

    
  }


  runLogic() {
    this.diva.runLogic();

    this.character.runLogic();

    if (this.magic) {
      this.magic.runLogic();
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
