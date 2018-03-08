(function (window) {
    function Joueur(cheminSprite) {
        this.initialize(cheminSprite);
    }
    Joueur.prototype = new createjs.Sprite();
    Joueur.prototype.Sprite_initialize = Joueur.prototype.initialize;
    Joueur.prototype.initialize = function (cheminSprite) {
        let data = {
            images: [cheminSprite],
            frames: {
                width: 185,
                height: 146
            },
            animations: {
                // start, end, next, speed
                run: [0, 11, "run"],
                raffut: [12, 23, "null"],
                jump: [24, 32, "jump"],
                plonge: [36, 41, "glisse"],
                glisse: [48, 51, "glisse"],
                leve: [60, 65, "run"],
                perd: [72, 81, "pleure"],
                pleure: [84, 88, "pleure"]
            }
        };
        let spriteSheet = new createjs.SpriteSheet(data);
        this.constructor(spriteSheet);
    }
    window.Joueur = Joueur;
}(window));