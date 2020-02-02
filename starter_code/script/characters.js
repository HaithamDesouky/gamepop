class Character{
  constructor(game){
    this.game=game;

     /*Position*/
     this.column = 0;
     this.row = 0;
  }

  paint(){
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'greenyellow';
    this.game.context.fillRect((this.row + INICIAL_CX) * GRID_SIZE,(this.column + INICIAL_CY) * GRID_SIZE, 50, 50);

    context.restore();
  }

}