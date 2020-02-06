class Magic {
  constructor(game, power, positionX,positionY,startX,startY, velocityX, velocityY,attackDirection, spell) {
    this.game = game;

    this.power = power;

    this.positionX = positionX;
    this.positionY = positionY;

    this.startX = startX;
    this.startY = startY;

    this.velocityX = velocityX;
    this.velocityY = velocityY;

    this.attackDirection = attackDirection;

    this.spell = spell;
    this.imageSpell = new Image();

    this.acelerationControl = Math.random() * 0.3;

    /*Acceleration*/
    this.aceleration = {
      y: 0.95 + this.acelerationControl,
      x: 1
    };
  }

  attack() {
    console.log('attack active');
    const direction = {
      'left': -1,
      'right': 1
    }
    
    const multiplier =  direction[this.attackDirection];
    
    this.velocityX = multiplier * 0.3;
    this.velocityY = -1 * 0.3;
  }

 

  
  runLogic() {
    const positionX = this.positionX;
    const positionY = this.positionY;
    
    const velocityX = this.velocityX;
    const velocityY = this.velocityY;

    const aceleration = this.aceleration;

    let newVelocity = {
      y: (velocityY + (aceleration.y / 1000) * 16),
      x: velocityX / (1 + (aceleration.x / 1000) * 16)
    };

    let newPosition = {
      y: positionY + newVelocity.y,
      x: positionX + newVelocity.x
    };

    
    this.velocityX = newVelocity.x;
    this.velocityY = newVelocity.y;

    this.positionX = newPosition.x;
    this.positionY = newPosition.y;

    
  }

  paint() {
    const context = this.game.context;

    context.save();

    //this.game.context.fillStyle = this.color;
    switch(this.spell){
      case 'spell01':
        this.imageSpell.src = '../images/Orc/Spell/skull.png';
      break;
      case 'spell02':
        this.imageSpell.src = '../images/Orc/Spell/skull1.png';
      break;
      case 'spell03':
        this.imageSpell.src = '../images/Orc/Spell/skull2.png';
      break;
      case 'spell04':
        this.imageSpell.src = '../images/Character/Spell/potion.png';
      break;
      case 'spell05':
        this.imageSpell.src = '../images/Character/Spell/potion2.png';
      break;
      case 'spell06':
        this.imageSpell.src = '../images/Character/Spell/potion3.png';
      break;
    }

    context.drawImage(
        this.imageSpell,
        (this.positionX + this.startX) * GRID_SIZE,
        (this.positionY + this.startY) * GRID_SIZE,
        50,
        50
      );


    context.restore();
  }
}
