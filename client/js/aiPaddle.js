aiPaddle = {
				y: 200,
				dy: 10,
				draw: function(){
					ctx.beginPath();
					ctx.moveTo(895,this.y);
					ctx.lineTo(895,this.y + 100);
					ctx.lineWidth = 10;
					ctx.lineCap = 'round';
					ctx.strokeStyle = '#ffffff';
					ctx.stroke();
				},
				move: function(){
					if(ball.dx > 0){
						if(ball.y + 50 > aiPaddle.y){
							aiPaddle.y = aiPaddle.y + 50
						}
						if(ball.y -50 < aiPaddle.y){
							aiPaddle.y = aiPaddle.y - 50
						}
						if(this.y > 400)  this.y = 400;
						if(this.y < 0)  this.y = 0;
					}else{
						if(aiPaddle.y + 50 < 250){
							aiPaddle.y = aiPaddle.y + 10
						}
						if(aiPaddle.y - 50 > 250){
							aiPaddle.y = aiPaddle.y - 10
						}
					}
				}
			};