class Character{
  constructor(game){
    this.game = game;
    this.row = 0;
    this.column = 0;
  }

  paint(){
    const context = this.game.context;

    context.save();

    context.fillStyle = 'pink';
    context.fillRect((this.column + INITIAL_LX) * GRID_SIZE,(INITIAL_LY - this.row)* GRID_SIZE,50,50);
    
    context.restore();
  }
}