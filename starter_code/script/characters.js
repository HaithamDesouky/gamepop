class Character {
  constructor(game) {
    this.game = game;

    /*Position*/
    this.position = {
      x: INICIAL_CX,
      y: INICIAL_CY
    };
  }

  paint() {
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'greenyellow';
    this.game.context.fillRect(this.position.x * GRID_SIZE, this.position.y * GRID_SIZE, 50, 50);

    context.restore();
  }
}
