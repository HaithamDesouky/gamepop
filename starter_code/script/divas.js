
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
      y:0.5,
      x:3.5
    }
    
  }

  divaJump(){
    this.velocity.y = -0.2;
    //console.log('divaJump is working');

  }

  move(direction){
    const multiplierMap = {left: -1, right: 1};
    const multiplier = multiplierMap[direction];
    this.velocity.x = multiplier * 0.1;
    
  }
  
 
  runLogic(){
    const position = this.position;
    const velocity = this.velocity;
    const aceleration = this.aceleration;
    

    let newVelocity = {
      y: velocity.y + (aceleration.y / 1000 * 16),
      x: velocity.x / (1 + aceleration.x / 1000 * 16)
      
    };

    //console.log('newVelocity.x ' + newVelocity.x);

    //debugger;

       

    let newPosition = {
      y:position.y + newVelocity.y,
      x:position.x + newVelocity.x
    };

    //console.log('newPosition.x ' + newPosition.x);

    //debugger;
   
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

    const position = this.position;
    
    context.save();

    this.game.context.fillStyle = 'pink';
    this.game.context.fillRect((position.x + INICIAL_DX) * GRID_SIZE,(position.y + INICIAL_DY) * GRID_SIZE, 50, 50);

    context.restore();
  }
}

