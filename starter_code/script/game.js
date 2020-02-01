class Game {
  constructor($canvas){
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.diva = new Diva(this);
    this.magic = new Magic(this);
    this.character = new Character(this);

    this.loop();
  }


  paint(){
    this.diva.paint();
    this.magic.paint();
    this.character.paint();
  }

  runLogic(){
    
  }

  loop(){
    this.runLogic();
    this.paint();
    console.log('funcionando');

    setTimeout(() => {
      this.loop();
    }, 500);
 
  }

}

