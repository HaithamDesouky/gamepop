class KeyboardController {
  constructor (game) {
    this.game = game;
  }
  setKeyBindings () {
    const reactToKeyPress = this.reactToKeyPress;
    window.addEventListener('keydown', reactToKeyPress);
  }

  //Direção para cada personagem:
  reactToKeyPress (event) {
    //console.log(event);
    const key = event.keyCode;

    switch(key){
      case 32:
        //prevent default - keys
        event.preventDefault();
        console.log('espaço - Ataque');
        //this.game.directionDiva('left');
        break;
      case 37:
        //prevent default - keys
        event.preventDefault();
        console.log('Apertou left');
        this.game.directionDiva('left');

        //console.log('this.game.diva.column');
        break;
      case 39:
        //prevent default - keys
        event.preventDefault();
        console.log('right');
        this.game.directionDiva('right');
        break;
      case 40:
        //prevent default - keys
        event.preventDefault();
        console.log('down');
        this.game.directionDiva('down');
        break;
      case 38:
        //prevent default - keys
        event.preventDefault();
        console.log('up');
        this.game.directionDiva('up');
        break;
    }
  }
 

 
 }
 