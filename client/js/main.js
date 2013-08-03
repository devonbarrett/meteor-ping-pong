Template.game.score = function () {
		if (typeof Session.get('playerScore') === 'undefined'){
		Session.set('playerScore', 0);
		Session.set('aiScore', 0);
		}
		return Session.get('playerScore') + ' : ' + Session.get('aiScore');
};
Template.game.rendered = function(){
	canvas = document.getElementById('canvas');
	if (canvas.getContext){
		ctx = canvas.getContext('2d');
	}
	window.requestAnimFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      ||  
		window.msRequestAnimationFrame     ||  
		function( callback ){ 
			return window.setTimeout(callback, 1000 / 60);
		};
	})();
	window.cancelRequestAnimFrame = ( function() {
		return window.cancelAnimationFrame          ||
		window.webkitCancelRequestAnimationFrame    ||
		window.mozCancelRequestAnimationFrame       ||
		window.oCancelRequestAnimationFrame     ||
		window.msCancelRequestAnimationFrame        ||
		clearTimeout
	} )();		
		function animate(){
			init = requestAnimFrame(animate);
			if(!wait){
				court.draw();
			}
		}
	
	/** first draw **/
	ctx.clearRect(0,0,900,500);
	userPaddle.draw();
	aiPaddle.draw();
	staticBars.draw();
	ball.draw();
	wait = true;
	animate();
	/****************/
	document.onkeydown = function(evt){
		if(evt.keyCode == 40){
					if(wait){
			        	wait = false;
			        }
					evt.preventDefault();
					userPaddle.move(1);
		}else if(evt.keyCode == 38){
			        if(wait){
			        	wait = false;
			        }
					userPaddle.move(0);
					evt.preventDefault();       
		}
	};
	resetGame = function(){
		court.reset();
		Session.set('playerScore', 0);
		Session.set('aiScore', 0);
	}
};	