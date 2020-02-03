
class Magic{
  constructor(game){
    this.game=game;
    this.acelerationControl = Math.random()*0.3;
    let desaparecer = false;

     /*Position*/
    this.position = {
      x:0,
      y:0
    }

    /*Velocity*/
    this.velocity = {
      x: 0,
      y: 0
    };

    /*Acceleration*/
    this.aceleration = {
      y:0.95+this.acelerationControl,
      x:1
    }
  }

  attack(direction){
    const multiplierMap = {spell01: -1};
    const multiplier = multiplierMap[direction];
    this.velocity.x = multiplier * 0.3;
    this.velocity.y = multiplier * 0.3;
  }


  

  runLogic(){
    const position = this.position;
    const velocity = this.velocity;
    const aceleration = this.aceleration;

    
    

    let newVelocity = {
      y: velocity.y + (aceleration.y / 1000 * 16),
      x: velocity.x / (1 + aceleration.x / 1000 * 16)
      
    };

    
    let newPosition = {
      y:position.y + newVelocity.y,
      x:position.x + newVelocity.x
    };

    //console.log(newPosition.y);

    Object.assign(this.velocity, newVelocity);
    Object.assign(this.position, newPosition);
        
  
  }

  checkColision(){
    let positionCharacter = this.game.character.position;

    console.log('colision' + positionCharacter);

    
  }

  paint(){
    
    
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'black';
    this.game.context.fillRect((this.position.x + INICIAL_DX)*GRID_SIZE, (this.position.y +INICIAL_DY)*GRID_SIZE, 25, 25);
    

    context.restore();

   
    
    
  }
}
