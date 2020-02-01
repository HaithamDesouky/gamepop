const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
/*
console.dir(context);

context.fillStyle = 'green';

//context.fillRect(0,0,70,300);
context.fillRect(0,0,700,500);
*/

class Game {
  constructor($canvas){
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.diva = new Diva(this);
    this.magic = new Magic(this);
    this.character = new Character(this);

    this.paint();
  }


  paint(){
    this.diva.paint();
    this.magic.paint();
    this.character.paint();
  }

}

class Diva {
  constructor(game){
    this.game = game;
  }

  paint(){
    this.game.context.fillStyle = 'green';
    this.game.context.fillRect(0,0,300,500);
  }
}

class Magic{
  constructor(game){
    this.game = game;
  }

  paint(){
    this.game.context.fillStyle = 'yellow';
    this.game.context.fillRect(0,0,100,100);
  }
}

class Character{
  constructor(game){
    this.game = game;
  }

  paint(){,
    this.game.context.fillStyle = 'pink';
    this.game.context.fillRect(100,100,400,200);
  }
}

const game = new Game($canvas);