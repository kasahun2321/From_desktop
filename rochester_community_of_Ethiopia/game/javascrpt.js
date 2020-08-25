let canvas, ctx, W, H, sFps, fTimeStarted, fTimeEnded, bricks = [], paddle, isPlaying, gameOver,level, touchCtrl;

const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 20;
const PADDING = 10;

const isColliding = (a, b) => a.x + a.w > b.x && b.x + b.s > a.x && a.y + a.h > b.y && b.y + b.s > a.y;

/**Brick's and Paddle's class */
const Brick = class {
	constructor(x, y, fill, stroke="white") {
		this.x = x;
		this.y = y;
		this.w = BRICK_WIDTH - PADDING;
		this.h = BRICK_HEIGHT - PADDING;
		this.fill = fill;
		this.stroke = stroke;
		this.live = level;
	}

	draw() {
		ctx.fillStyle = this.fill;
		ctx.strokeStyle = this.stroke;
		ctx.fillRect(this.x, this.y, this.w, this.h);
		ctx.strokeRect(this.x, this.y, this.w, this.h);

		if(this.live <= 0) bricks.splice(bricks.indexOf(this), 1);
	}
}

/**Ball object */
const ball = {
	x: null,
	y: null,
	radius: 10,
	vel: {x:4, y:4},
	draw() {
		ctx.beginPath();
		ctx.fillStyle = "green";
		ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		ctx.fill();
		ctx.closePath();
	},
	update() {
		this.x += this.vel.x;
		this.y -= this.vel.y;
		if(this.x - this.radius < 0 || this.x + this.radius > W)
			this.vel.x = -this.vel.x;
		if(this.y - this.radius < 0)
			this.vel.y = -this.vel.y;
		else if(this.y + this.radius > paddle.y + paddle.h)
			game.end();
		this.draw();
		
	}
}

const byId = id => document.getElementById(id);


/**Everything to be updated on here 
 * @method game is the actual function to be updated when isPlaying
 * @method home contains the display rendered when not isPlaying
*/
const update = {  

	home() {
		let section = document.createElement("section");
		section.id = "sec";
		document.body.appendChild(section);
		section.innerHTML = `
		<div class="oops">
			<h1 id="gameOver" style="color:red"></h1>
			<h1 style="font-size:13px;color:navy">Mirielle's Game</h1>
			<button id="playBtn">PLAY NOW</button>
		</div>
		`;
	},

	game() {
		let obj = {
			x: ball.x - ball.radius,
			y: ball.y - ball.radius,
			s: ball.radius * 2
		}; 
		
		bricks.forEach((brick, index) => {
			if(isColliding(brick, obj)) {
				brick.live--;
				ball.vel.y = -ball.vel.y;
			}
			brick.draw();
		});
	
		paddle.draw();
		if(isColliding(paddle, obj)) ball.vel.y = -ball.vel.y;
		
		ball.update();

		// new Level
		if(bricks.length === 0) {
			let tmp = level;
			alert(`Congratulations on your new Level\n
			Level: ${tmp + 1}`);
			game.start();
			level = tmp + 1;
		}
		
		ctx.fillStyle = "lightgray";
		ctx.fillRect(touchCtrl.x, touchCtrl.y, touchCtrl.w, touchCtrl.h);
	
		// draw fps
		ctx.fillStyle = "navy";
		ctx.font = "bold 15px Verdana";
		ctx.fillText(sFps, W - 100, 25);
		ctx.fillText(`Level: ${level}`, 10, 25);
	}
}


/***Main game */
const game = {
	initComponent() {
		// draw bricks
		for(let r=0; r < 6; r++) {
			for(let c=0; c < 6; c++) {
				let x = PADDING + c * BRICK_WIDTH;
				let y = PADDING * 5 + r * BRICK_HEIGHT;
				bricks.push(new Brick(x, y, "red", "#222"));
			}
		}
		// position paddle
		paddle = new Brick(null, H - BRICK_HEIGHT * 4, "navy");
		paddle.w = BRICK_WIDTH * 2;
		paddle.x = W/2 - paddle.w/2 - PADDING;
		// position ball
		ball.x = paddle.x + paddle.w / 2;
		ball.y = paddle.y - ball.radius;
		
		touchCtrl = {x:0, y:paddle.y + PADDING * 2, w:W, h:H - (paddle.y + PADDING * 2)};
	},

	start() {
		isPlaying = true;
		gameOver = false;
		level = 1;
		this.initComponent();
	},

	end() {
		isPlaying = false;
		gameOver = true;
		
	},

	animate() {
		ctx.clearRect(0, 0, W, H);
		if(isPlaying) {
			byId("cvs").style.display = "block";
			byId("sec").display = "none";
			update.game();
		}
		else {
			byId("cvs").style.display = "none";
			byId("sec").display = "block";
			if(gameOver) byId("gameOver").innerHTML = "GAME OVER";
		}
		requestAnimationFrame(game.animate);
		fTimeEnded = performance.now();
		sFps = `FPS: ${~~(1000 / (fTimeEnded - fTimeStarted))}`;
		fTimeStarted = fTimeEnded;
	}
}


/**All EventHandlers are written here */
const eventHandler = {
	checkBoundary() {
		if(paddle.x < 0) paddle.x = 0;
		else if(paddle.x + paddle.w > W)
			paddle.x = W - paddle.w;
	},

	touch(e) {
		const {pageX, pageY} = e.touches[0];
		if(pageY >= touchCtrl.y) {
			paddle.x = pageX - paddle.w/2;	
		}
		eventHandler.checkBoundary();
	},
	
	mouse(e) {
		const {pageX, pageY} = e;
		if(pageY >= touchCtrl.y) {
			paddle.x = pageX - paddle.w/2;
		}
		eventHandler.checkBoundary();
	},

	key(e) {
		const KEYBOARD_SPEED = 10;
		if(e.keyCode == 37) 
			paddle.x -= KEYBOARD_SPEED;
		else if(e.keyCode === 39)
			paddle.x += KEYBOARD_SPEED;
		eventHandler.checkBoundary();
	},

	init() {
		addEventListener("keydown", this.key);
		addEventListener("touchmove", this.touch);
		// canvas.addEventListener("mousemove", this.mouse);
		byId("playBtn").addEventListener("click", () => game.start());
	}
}


/**Starting point for the game */
const init = () => {
	canvas = byId("cvs");
	ctx = canvas.getContext("2d");
	W = canvas.width = 360;
	H = canvas.height = innerHeight;
	cvs.style.marginLeft = (innerWidth - canvas.width) / 2 + "px"
	
	isPlaying = false;
	gameOver = false;

	update.home();
	requestAnimationFrame(game.animate);
	eventHandler.init();
}

addEventListener("load", init);