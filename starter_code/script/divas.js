class Diva {
  constructor(game, power, positionX,positionY,startX,startY, color){
    this.game = game;

    this.power = power;

    this.positionX = positionX;
    this.positionY = positionY;
    this.startX = startX;
    this.startY = startY;

    

    this.color = color;
    

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

  jump(){
    this.velocity.y = -0.2;
    
  }

  move(direction){
    const multiplierMap = {left: -1, right: 1 , 'rightCharacter': 1, 'leftCharacter': -1};
    const multiplier = multiplierMap[direction];
    this.velocity.x = multiplier * 0.1;
  }
  
 
  runLogic(){
    const positionY =this.positionY;
    const positionX =this.positionX;

    const velocity = this.velocity;
    const aceleration = this.aceleration;
    
    let newVelocity = {
      y: velocity.y + (aceleration.y / 1000 * 16),
      x: velocity.x / (1 + aceleration.x / 1000 * 16)
    };


    let newPosition = {
      y:positionY + newVelocity.y,
      x:positionX + newVelocity.x
    };

    //console.log(newPosition.y + this.startY)

    
   
    Object.assign(this.velocity, newVelocity);
    if(this.startX >= 6){
      if(newPosition.y > -8 && 
        newPosition.y < 0 ){
          this.positionY = newPosition.y;
          if(newPosition.x + this.startX <= 13 && newPosition.x + this.startX > 8){
            this.positionX = newPosition.x;
          }
      }
    }else {
      if(newPosition.y > -8 && 
        newPosition.y < 0 ){
          this.positionY = newPosition.y;
          if(newPosition.x + this.startX < 7 && newPosition.x + this.startX >= 2){
            this.positionX = newPosition.x;
          }
      }
    }

      
  }

  paint(){
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = this.color;
    this.game.context.fillRect((this.positionX + this.startX) * GRID_SIZE,(this.positionY + this.startY) * GRID_SIZE, 50, 50);

    context.restore();
  }
}