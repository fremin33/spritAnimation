(function(window) {
	function Modele(img) {
 		this.src=img;
 		this.initialize();
	}	

	Modele.prototype = new createjs.Sprite();
	// constructors:
	Modele.prototype.Sprite_initialize = Modele.prototype.initialize;	
	
	Modele.prototype.initialize = function() {
		
		//A completer



		this.constructor(spriteSheet);		
	}

window.Modele = Modele;
} (window));
