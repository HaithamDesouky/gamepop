class Diva {
  constructor(game){
    this.game = game;
    this.direction = 'up';
    this.column = 0;
    this.row=0;
  }

 

  runLogic(){

    switch (this.direction) {
      case 'right':
       this.column++;
       console.log('Diva position: column '+this.column);
        break;
      case 'left':
        this.column--;
        console.log('Diva position: column'+this.column);
        break;
      case 'down':
        if(this.row > 7){
          this.row++;
        }
        
        console.log('Diva position: row'+this.row);
        break;
      case 'up':
        if(this.row < 7){
          this.row++;
        }
        
        console.log('Diva position: row up'+this.row);
        break;
    }
  }

  changeDirection(direction){
    this.direction = direction;

     switch (this.direction) {
      case 'right':
       this.column++;
       console.log('Diva position: column '+this.column);
        break;
      case 'left':
        this.column--;
        console.log('Diva position: column'+this.column);
        break;
      case 'down':
        if(this.row > 7){
          this.row++;
        }
        
        console.log('Diva position: row'+this.row);
        break;
      case 'up':
        if(this.row < 7){
          this.row++;
        }
        
        console.log('Diva position: row up'+this.row);
        break;
    }
  }

  paint(){
    const context = this.game.context;

    context.save();

    context.fillStyle = 'green';
    context.fillRect((-this.column + INITIAL_RX) * GRID_SIZE,(INITIAL_RY - this.row)* GRID_SIZE,50,50);
    
    context.restore();
  }


 
}
