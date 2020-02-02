class Game {
  constructor($canvas){
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.diva = new Diva(this);
    this.magic = new Magic(this);
    this.character = new Character(this);

    this.keyboardController = new KeyboardController(this);
    this.keyboardController.setKeyBindings();
    

    this.loop();
  }

  directionDiva(value){
    switch (value) {
      case 'up':
      case 'down':
      case 'left':
      case 'right':
        this.diva.changeDirection(value);
        break;
    }

  }

  clearScreen () {
    const context = this.context;
    context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }


  paint(){
    this.clearScreen();

    this.diva.paint();
    this.magic.paint();
    this.character.paint();
  }

  runLogic(){
    //this.diva.runLogic();
    //this.character.runLogic();
  }

  
  loop(){
    //this.runLogic();
    this.paint();
    console.log('funcionando');

    /*setTimeout(() => {
      this.loop();
    }, 500);*/

    window.requestAnimationFrame(timestamp => this.loop(timestamp));
 
  }

  /*
  const loop = timestamp => {
    paint();
    runLogic();
    window.requestAnimationFrame(loop);
  };*/

}

