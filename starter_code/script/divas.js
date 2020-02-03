
class Diva {
  constructor(game){
    this.game=game;

     /*Position*/
    this.position = {
      x: 0,
      y: -8
    }

    /*Velocity*/
    this.velocity = {
      x: 0,
      y: 0
    };

    /*Acceleration*/
    this.aceleration = {
      y:0.8,
      x:2
    }
    
  }

  divaJump(){
    this.velocity.y = -0.2;
    console.log('divaJump is working');

  }

  move(direction){
    const multiplierMap = {left: 1, right: 1};
    const multiplier = multiplierMap[direction];
    this.velocity.x = multiplier * 5;
    console.log('move is working');
  }

 
  runLogic(){
    const position = this.position;
    const velocity = this.velocity;
    const aceleration = this.aceleration;
    

    let newVelocity = {
      y: velocity.y + (aceleration.y / 1000 * 16),
    };

    let newPosition = {
      y:position.y + newVelocity.y,
    };

    Object.assign(this.velocity, newVelocity);
    Object.assign(this.position, newPosition);
    console.log(this.position.y);
  }

  


  paint(){
    const context = this.game.context;

    const position = this.position;
    
    context.save();

    this.game.context.fillStyle = 'pink';
    this.game.context.fillRect((position.x + INICIAL_DX) * GRID_SIZE,(position.y + INICIAL_DY) * GRID_SIZE, 50, 50);

    context.restore();
  }
}

