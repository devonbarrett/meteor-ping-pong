ball = {
				x: 450, 
				y: 250,
				r: 15,
				dx: 5,
				dy: 5,
				spin: 0,
				draw: function(){
					ctx.beginPath();
					ctx.fillStyle = '#ffffff';
					ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, false)
					ctx.fill();
				},
				move: function(){
					this.x += this.dx;
					this.y += this.dy;
					if(this.x < 7 && (userPaddle.y < this.y && userPaddle.y + 100 >= this.y) ){ this.dx = -this.dx;} 
					if(this.x > 893 && (aiPaddle.y < this.y && aiPaddle.y + 100 >= this.y) ){ this.dx = -this.dx;} 
					this.y > 492 || this.y < 5 ? this.dy = -this.dy: true; 			   
				}
}