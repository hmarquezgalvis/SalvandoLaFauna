RA.Menu = function (game) {
    var bg;
    var boton_jugar;
};
RA.Menu.prototype = {
    preload: function () {
        this.load.image('menu_bg', '/assets/menu/menu.png');
    },
    create: function () {
        this.game.stage.backgroundColor = '#333';
        bg = this.add.sprite(0, 0, 'menu_bg');

        boton_jugar = this.add.text(10, 40, 'Jugar', { fill: "#ffffff" });
        boton_jugar.inputEnabled = true;
        boton_jugar.events.onInputDown.add(this.jugar, this);
    },
    jugar: function () {
        console.log('jugar');
        this.state.start('MiniJuego_TresEnRaya');
    },
    logros: function () {

    }
};
RA.MissionProblema = function (game) {
    var bg;
};
RA.MissionProblema.prototype = {
    preload: function () {

    },
    create: function () {

    }
};