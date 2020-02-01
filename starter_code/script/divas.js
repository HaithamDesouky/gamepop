class Diva {
  constructor(game){
    this.game = game;
    this.column = 0;
    this.row=0;
  }

  paint(){
    const context = this.game.context;

    context.save();

    context.fillStyle = 'green';
    context.fillRect((-this.column + INITIAL_RX) * GRID_SIZE,(INITIAL_RY - this.row)* GRID_SIZE,50,50);
    
    context.restore();
  }
}
