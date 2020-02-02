class KeyboardController{
  constructor(game){
    this.game=game;

    
  }

  setKeyBindings(){
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();

      //console.log(event);

      //KEY BEHAVIOR!!
      switch (event.keyCode) {

        //-DIVA CONTROLER ------:
          case 37:
            console.log('LEFT');
            this.game.diva.position('left');
            break;

          case 39:
            console.log('Right');
            this.game.diva.position('right');
            break;
          
          case 40:
            console.log('down');
            this.game.diva.position('down');
            break;

          case 32:
            console.log('Jump');
            this.game.diva.position('up');       
            break;
            
      }

          
    });
  }

}
