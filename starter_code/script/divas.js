
class Diva {
  constructor(game){
    this.game=game;

     /*Position*/
    this.column = 0;
    this.row = 0;

    this.velocity = {
      x: 0,
      y: 0
    };

    /*Acceleration and speed*/
    //this.ySpeed = 0.4;
    this.gravity = 1;
  }

  position(value){
    switch(value){
      case 'left':
        if(this.column>-4){
          this.column--;
        }
        
        console.log('deu certo ' + this.column);
        break
      case 'right':
        if(this.column<0){
          this.column++;
        }
        console.log( 'parabens eim '+this.column);
        break;
      case 'up':
        
        /*if(this.row>-5){
          this.row--;
          
        }*/
        this.divaJump();
        
        
        console.log('deu certo ' + this.column);
        break
      case 'down':
        if(this.row<0){
          this.row++;
        }
        console.log( 'parabens eim ROW'+this.column);
        break;
    }
  }

  runLogic(){
    this.divaJump();

    const velocity = this.velocity;
    let row = this.row;
    //const column = this.column;
    const gravity = this.gravity;

    let newVelocity = {
      y: velocity.y + (gravity / 1000 * 16)
    };

    let newPosition = {
      y: row + newVelocity.y
    };

    

    velocity.y = newVelocity.y;
    this.row = newPosition.y;

  }

  divaJump(){
    this.velocity.y = -0.1;
  }


  paint(){
    const context = this.game.context;

    context.save();

    this.game.context.fillStyle = 'pink';
    this.game.context.fillRect((this.column + INICIAL_DX) * GRID_SIZE,(this.row + INICIAL_DY) * GRID_SIZE, 50, 50);

    context.restore();
  }
}

