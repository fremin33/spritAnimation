(function (window) {
    function Arbitre(cheminSprite) {
        this.initialize(cheminSprite);
    }
    Arbitre.prototype = new createjs.Sprite();
    Arbitre.prototype.Sprite_initialize = Arbitre.prototype.initialize;
    Arbitre.prototype.initialize = function (cheminSprite) {
        let data = {
            images: [cheminSprite],
            frames: {
                width: 100,
                height: 130
            },
            animations: {
                // start, end, next, speed
                stagionnaire: [0, 0, null],
                stop: [1, 4, null],
            }
        };
        let spriteSheet = new createjs.SpriteSheet(data);
        this.constructor(spriteSheet);
    }
    window.Arbitre = Arbitre;
}(window));