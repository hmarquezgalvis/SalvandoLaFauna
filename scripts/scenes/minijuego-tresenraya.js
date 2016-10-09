RA.MiniJuegoTresEnRaya = function (game) {
    var bg;
    var boton_volver;
};
RA.MiniJuegoTresEnRaya.prototype = {
    preload: function () {
        //this.load.image('menu_bg', '/assets/menu/menu.png');
    },
    create: function () {
        this.game.stage.backgroundColor = '#333';
        //bg = this.add.sprite(0, 0, 'menu_bg');

        boton_volver = this.add.text(10, 40, 'Regresar', { fill: "#ffffff" });
        boton_volver.inputEnabled = true;
        boton_volver.events.onInputDown.add(this.volver_menu, this);
    },
    volver_menu: function () {
        this.state.start('Menu');
    },
    logros: function () {

    }
};