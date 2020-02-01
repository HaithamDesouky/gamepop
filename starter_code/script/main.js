const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');


/*
console.dir(context);

context.fillStyle = 'green';

//context.fillRect(0,0,70,300);
context.fillRect(0,0,700,500);
*/


const game = new Game($canvas);