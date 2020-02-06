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

    /*Animation*/
    this.image = image;
    this.timer = 0;
    this.imageCounterCharacter = 0;
    this.imageCounterDiva = 0;
    this.speedOfAnimation = 20;
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

      if (newPosition.x + this.startX <= 17 && newPosition.x + this.startX > 4) {
        this.positionX = newPosition.x;
      }

      if (newPosition.y > -8 && newPosition.y < 0) {
        this.positionY = newPosition.y;
      }
    } else {
      if (newPosition.x + this.startX < 10 && newPosition.x + this.startX >= -1) {
        this.positionX = newPosition.x;
      }

      if (newPosition.y > -8 && newPosition.y <= 0) {
        this.positionY = newPosition.y;
      }
    } //this.startX >= 6
  } //runLogic();

  changeImage(value, character, timestamp) {
    //this.game.cleanCanvas();

    switch (value) {
      case 'characterIdle':
        this.speedOfAnimation = 20;
        this.runImageLoop(this.image.characterIdle, character, timestamp);
        break;

      case 'jumpingCharacter':
        this.speedOfAnimation = 40;
        this.runImageLoop(this.image.jumpingCharacter, character, timestamp);
        break;

      case 'attackCharacter':
        this.speedOfAnimation = 20;
        this.runImageLoop(this.image.attackCharacter, character, timestamp);
        break;

      case 'leftCharacter':
        this.speedOfAnimation = 20;
        this.runImageLoop(this.image.leftCharacter, character, timestamp);
        break;

      case 'rightCharacter':
        this.speedOfAnimation = 20;
        this.runImageLoop(this.image.rightCharacter, character, timestamp);
        break;

      case 'hurtCharacter':
        this.speedOfAnimation = 25;
        this.runImageLoop(this.image.rightCharacter, character, timestamp);
        break;
    }
  }

  runImageLoop(array, character, timestamp) {
    if (character === 'diva') {
      const numberOfImages = array.length;

      if (this.timer < timestamp - this.speedOfAnimation) {
        this.timer = timestamp;
        if (this.imageCounterDiva >= numberOfImages - 1) {
          this.imageCounterDiva = 0;
        } else if (this.imageCounterDiva < numberOfImages - 1) {
          this.imageCounterDiva++;
          // console.log(this.imageCounterDiva);
        }
      }

      this.paint(array[this.imageCounterDiva]);
    } else if (character === 'character') {
      const numberOfImages = array.length;

      if (this.timer < timestamp - this.speedOfAnimation) {
        this.timer = timestamp;
        if (this.imageCounterCharacter >= numberOfImages - 1) {
          this.imageCounterCharacter = 0;
        } else if (this.imageCounterCharacter < numberOfImages - 1) {
          this.imageCounterCharacter++;
          //console.log(this.imageCounterCharacter);
        }
      }
      this.paint(array[this.imageCounterCharacter]);
    }
  }

  paint(image) {
    const context = this.game.context;

    if (image) {
      context.drawImage(
        image,
        (this.positionX + this.startX) * GRID_SIZE,
        (this.positionY + this.startY) * GRID_SIZE,
        180,
        180
      );
    }

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
