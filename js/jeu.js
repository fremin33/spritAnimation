/*****************************/
/* Les variables globales	*/
/***************************/

var stage;
var fond;
var arbitrePersonnage;
var nbElementScene = 3;
var nbElement = 0;
var finAnim = false;

function init() {
    // Initialisation de la Scene
    stage = new createjs.Stage("myCanvas");

    // Initialisation du background
    fondImg = new Image();
    fondImg.src = "images/background.png";
    fondImg.onload = chargement;

    // Initialisation de l'image rugbyman
    cheminSprite = new Image();
    cheminSprite.src = "images/spriteJoueur.png"
    cheminSprite.onload = chargement;


    // Initialisation de l'image rugbyman
    cheminSprite = new Image();
    cheminSprite.src = "images/spriteArbitre.png"
    cheminSprite.onload = chargement;

    stage.update();
}


function chargement() {
    nbElement++;
    if (nbElement == nbElementScene) {
        jouer();
    }
}


function jouer() {

    fond = new createjs.Bitmap(fondImg);
    stage.addChild(fond);


    // Création d'un object Joueur
    rugbymanPersonnage = new Joueur('images/spriteJoueur.png');
    stage.addChild(rugbymanPersonnage);
    rugbymanPersonnage.y = 400;
    // Lance l'action run
    rugbymanPersonnage.gotoAndPlay('run');

    // Création d'un object Joueur
    arbitrePersonnage = new Arbitre('images/spriteArbitre.png');
    stage.addChild(arbitrePersonnage);
    arbitrePersonnage.gotoAndPlay('stagionnaire');
    arbitrePersonnage.y = 410;
    arbitrePersonnage.x = 900;


    // Detection des evenements 
    document.addEventListener('keydown', gestionClick)
    // Raffraichissement de la page automatique
    createjs.Ticker.addEventListener('tick', tick);
}


function gestionClick(e) {
    switch (e.keyCode) {
        case 38:
            rugbymanPersonnage.gotoAndPlay('jump');
            break;
        case 32:
            rugbymanPersonnage.gotoAndPlay('plonge');
            break;
        case 39:
            rugbymanPersonnage.gotoAndPlay('run');
            break;
        case 82:
            rugbymanPersonnage.gotoAndPlay('raffut');
            break;
        default:
            break;
    }

}
function stop() {
    if (fond.x <= -700 ) {
        arbitrePersonnage.gotoAndPlay('stop');
        finAnim = true;
    }
}

function tick(e) {
    if (!finAnim) {
        stop();
    }
    arbitrePersonnage.x -=10;
    fond.x -= 10;
    stage.update(e);
}


window.onload = init;