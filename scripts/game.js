var GAME = {
   renderer: null,
   configuration: {
      width: 800,
      height: 600
   },
   scenes: {}
};

GAME.Init = function() {
   GAME.renderer = PIXI.autoDetectRenderer(GAME.configuration.width, GAME.configuration.height, {backgroundColor : 0x000000});
   document.getElementById('container').appendChild(GAME.renderer.view);

   GAME.scenes.Intro();
};

GAME.scenes.Intro = function(renderer) {
   var stage = new PIXI.Container();
   var bgImageTexture = PIXI.Texture.fromImage('assets/bg.jpg');
   var bgTexture = new PIXI.Texture(bgImageTexture, new PIXI.Rectangle(0, 0, GAME.configuration.width, GAME.configuration.height));
   var bg = new PIXI.Sprite(bgTexture);
   bg.anchor.x = 0;
   bg.anchor.y = 0;
   bg.position.x = 0;
   bg.position.y = 0;
   stage.addChild(bg);

   //var textTexture = new PIXI.Texture('OK');
   //var text = new PIXI.Sprite(textTexture);
   //stage.addChild(text);
   var button = new PIXI.Stage.fromImage('assets/btn_ingresar.png');

   button.position.set(200, 400);
   button.interactive = true;
   button.on('mousedown', function(e) {
      alert('click');
   });
   button.on('touchstart', function(e) {
      alert('tap');
   });
   stage.addChild(button);

   animate();

   function animate() {
     requestAnimationFrame(initPixi);
     GAME.renderer.render(stage);
   }

}

window.onload = GAME.Init;

/*
var background = PIXI.Sprite.fromImage("assets/bg.jpg");
var stage = new PIXI.Stage(0x000000, true);
stage.addChild(background);
*/
/*
var Game = {};

var $container = $('#container'),
   $sceneList = $('>section', $container);

Game.Assets = [
   { path: 'https://i.ytimg.com/vi/MvhwWXF-LfU/maxresdefault.jpg', type: 'image' },
   //{ path: '', type: 'audio' }
];

// Loading Process
Game.loading = function() {
   var self = this;

   var filesLoaded = 0;
   var percent = 0; //max 100

   function initialize() {
      $.each(Game.Assets, function(item, idx) {
         loadAsset(item.path, item.type);
      });
   }


   function loadAsset(filePath, type) {
   	var asset = new Image();
   	asset.src = filePath;
   	asset.onload = function() {
         fileLoaded++;
      };
   }
};

Game.init = function() {

};

Game.loading();
*/
