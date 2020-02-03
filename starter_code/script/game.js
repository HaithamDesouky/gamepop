
class Game {
  constructor($canvas){
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

  runLogic () {
    this.diva.runLogic();
    this.magic.runLogic();
  }

  paint(){
    this.cleanCanvas();

    this.diva.paint();
    this.character.paint();

    if(this.spellControl===1){
      this.magic.paint();
    }
    
  }

  loop(){
    
    this.runLogic();
    this.paint();

    /*setTimeout(() => {
      this.loop();
    }, 200);*/

    window.requestAnimationFrame(timestamp => this.loop(timestamp));
  }

  start(){
    this.diva = new Diva(this);
    this.character = new Character(this);
    this.magic = new Magic(this);
    

    this.loop();

  }

  
}