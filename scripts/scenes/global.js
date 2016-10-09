// Main
var CONFIG = {
    width: 800,
    height: 600
};
var GAME = new Phaser.Game(CONFIG.width, CONFIG.height, Phaser.AUTO);
GAME.state.add('Menu', RA.Menu);
GAME.state.add('MiniJuego_TresEnRaya', RA.MiniJuegoTresEnRaya);

GAME.state.start('Menu');