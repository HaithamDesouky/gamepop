
class Magic{
  constructor(game){
    this.game=game;

    /*Position*/
    this.column = 0;
    this.row = 0;
  }

  paint(){
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(300, 300, 50, 50);

    context.restore();
  }

}
