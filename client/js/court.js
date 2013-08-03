wait = false;
court = {
				ballmove : 0,
				draw: function(){
					this.ballmove += 1;
					ctx.clearRect(0,0,900,500);
					userPaddle.draw();
					aiPaddle.draw();
					staticBars.draw();
					ball.draw();
					if (court.ballmove % 2 == 0) {
						ball.move();
					}
					aiPaddle.move();
					court.point();
				},
				point: function(){
					if(ball.x > 900){
						court.reset();
						Session.set('playerScore', Session.get('playerScore')+1);
					}
					if(ball.x < 0){
						court.reset();
						Session.set('aiScore', Session.get('aiScore')+1);
					}

				},
				reset: function(){
					ball.x = 450;
					ball.y = 250;
					aiPaddle.y = 200;
					wait = true;
				}
		}
staticBars = {
				draw: function(){
					ctx.beginPath();
					ctx.moveTo(0,0);
					ctx.lineTo(900,0);
					ctx.lineWidth = 10;
					ctx.strokeStyle = '#00ff00';
					ctx.stroke();
					ctx.beginPath();
					ctx.moveTo(0, 500);
					ctx.lineTo(900,500);
					ctx.lineWidth = 10;
					ctx.strokeStyle = '#00ff00';
					ctx.stroke();
				}
			}