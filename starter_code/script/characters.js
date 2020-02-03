class Character{
  constructor(game){
    this.game=game;

     /*Position*/
     this.position = {
      x: 0,
      y: 0
    }
  }

  paint(){
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'greenyellow';
    this.game.context.fillRect((this.position.x + INICIAL_CX) * GRID_SIZE,(this.position.y + INICIAL_CY) * GRID_SIZE, 50, 50);

    context.restore();
  }

}