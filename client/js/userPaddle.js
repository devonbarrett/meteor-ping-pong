userPaddle = {
				y: 200,
				dy: 30,
				draw: function(){
					ctx.beginPath();
					ctx.moveTo(5,this.y);
					ctx.lineTo(5,this.y + 100);
					ctx.lineWidth = 10;
					ctx.lineCap = 'round';
					ctx.strokeStyle = '#ffffff';
					ctx.stroke();
				},
				move: function(direction){
					direction ? this.y += this.dy : this.y -= this.dy;
					if(this.y > 400)  this.y = 400;
					if(this.y < 0)  this.y = 0;
				}
			};