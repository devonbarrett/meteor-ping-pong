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

	var fps = 60;
	function draw() {
	    setTimeout(function() {
	        requestAnimationFrame(draw);
	        if(!wait){
				court.draw();
			}
	    }, 1000 / fps);
	}
	
	/** first draw **/
	ctx.clearRect(0,0,900,500);
	userPaddle.draw();
	aiPaddle.draw();
	staticBars.draw();
	ball.draw();
	wait = true;
	draw();
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
	help = function(){
		 $('#helpOverlay').toggle();
	}

	/**TWITTER**/
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
	/**********/
};	