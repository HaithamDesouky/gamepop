
class Magic{
  constructor(game){
    this.game=game;

     /*Position*/
    this.position = {
      x: 0,
      y:0
    }

    /*Velocity*/
    this.velocity = {
      x: 0,
      y: 0
    };

    /*Acceleration*/
    this.aceleration = {
      y:0.5,
      x:3.5
    }
  }

  attack(direction){
    const multiplierMap = {spell01: -1};
    const multiplier = multiplierMap[direction];
    this.velocity.x = multiplier * 0.1;
  }

  runLogic(){
    const position = this.position;
    const velocity = this.velocity;
    const aceleration = this.aceleration;

    console.log(velocity);
    

    let newVelocity = {
      //y: velocity.y + (aceleration.y / 1000 * 16),
      x: velocity.x / (1 + aceleration.x / 1000 * 16)
      
    };

    
    let newPosition = {
      //y:position.y + newVelocity.y,
      x:position.x + newVelocity.x
    };

    
    Object.assign(this.velocity, newVelocity);
    if(newPosition.y > -8 && 
      newPosition.y < 0 ){
        this.position.y = newPosition.y;
        if(newPosition.x + INICIAL_DX <= 13 && newPosition.x + INICIAL_DX >= 6){
          this.position.x = newPosition.x;
        }
      }
      
  
  }

  paint(){
    
    
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'black';
    this.game.context.fillRect((this.position.x + INICIAL_DX+2)*GRID_SIZE, (this.position.y +INICIAL_DY-2)*GRID_SIZE, 50, 50);
    

    context.restore();

   
    
    
  }
}
