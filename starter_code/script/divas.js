class Diva {
  constructor(game, power, positionX, positionY, startX, startY, color, image) {
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
      y: 0.5,
      x: 3.5
    };
    this.image = image;
    this.timer = 0;
    this.imageCounter = 0;
    this.speedOfAnimation = 20;
    this.imageCar = new Image();
  }

  jump() {
    this.velocity.y = -0.2;
  }

  move(direction) {
    const multiplierMap = { left: -1, right: 1, rightCharacter: 1, leftCharacter: -1 };
    const multiplier = multiplierMap[direction];
    this.velocity.x = multiplier * 0.1;
  }

  runLogic() {
    const positionY = this.positionY;
    const positionX = this.positionX;

    const velocity = this.velocity;
    const aceleration = this.aceleration;

    let newVelocity = {
      y: velocity.y + (aceleration.y / 1000) * 16,
      x: velocity.x / (1 + (aceleration.x / 1000) * 16)
    };

    let newPosition = {
      y: positionY + newVelocity.y,
      x: positionX + newVelocity.x
    };

    //console.log(newPosition.y + this.startY)

    Object.assign(this.velocity, newVelocity);
    if (this.startX >= 6) {
      /*if(newPosition.y > -8 && 
        newPosition.y < 0 ){
          this.positionY = newPosition.y;
          if(newPosition.x + this.startX <= 13 && newPosition.x + this.startX > 8){
            this.positionX = newPosition.x;
          }
      }*/

      if (newPosition.x + this.startX <= 18 && newPosition.x + this.startX > 8) {
        this.positionX = newPosition.x;
        if (newPosition.y > -8 && newPosition.y < 0) {
          this.positionY = newPosition.y;
        }
      }
    } else {
      if (newPosition.x + this.startX < 7 && newPosition.x + this.startX >= 2) {
        this.positionX = newPosition.x;
        if (newPosition.y > -8 && newPosition.y < 0) {
          this.positionY = newPosition.y;
        }
      }
    }
  }

  changeImage(value, timestamp) {
    switch (value) {
      case 'characterIdle':
        this.speedOfAnimation = 20
        this.runImageLoop(this.image.characterIdle, timestamp);
        //this.game.animation.idleBlinkingCharacter();
        break;
    }
  }

  runImageLoop(array, timestamp) {
    const numberOfImages = array.length;
    if (this.timer < timestamp - this.speedOfAnimation) {
      this.timer = timestamp;
      if (this.imageCounter < numberOfImages - 1) {
        this.imageCounter++;
      } else {
        this.imageCounter = 0;
      }
    }
    this.paint(array[this.imageCounter]);
  }

  paint(imageSrc) {
    const context = this.game.context;
    this.imageCar.src = imageSrc;
    context.drawImage(
      this.imageCar,
      (this.positionX + this.startX) * GRID_SIZE,
      (this.positionY + this.startY) * GRID_SIZE,
      160,
      160
    );
    /*context.save();
    
    this.game.context.fillStyle = this.color;
    this.game.context.fillRect((this.positionX + this.startX) * GRID_SIZE,(this.positionY + this.startY) * GRID_SIZE, 50, 50);

    context.restore();*/
    /*
    const carUrl = '../images/Character/Running/00.png';
      const imageCar = new Image();
      imageCar.src = carUrl;
      context.drawImage(imageCar, (this.positionX + this.startX) * GRID_SIZE, (this.positionY + this.startY) * GRID_SIZE, 160, 160);*/

    // switch (value) {
    //   case 'runningCharacterLeft':
    //     this.game.animation.runningCharacterLeft();
    //     break;

    //   case 'runningCharacterRight':
    //     this.game.animation.runningCharacterRight();
    //     break;

    //   case 'jumpingCharacterRight':
    //     this.game.animation.jumpingCharacterRight();
    //     break;

    //   case 'runThrowingRight':
    //     this.game.animation.runThrowingRight();
    //     break;

    //   case 'characterIdle':
    //     this.game.animation.idleBlinkingCharacter();
    //     break;
    // }
  }
}
