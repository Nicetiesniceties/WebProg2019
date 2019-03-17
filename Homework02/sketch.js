let cvsWrapper = null;
let bgImg, baseImg, msgImg, bluebird_upflap_Img, gameoverImg;
let bg_x1, bg_x2, random1, random2;
let x1, y1, g = 12 / 60, tapA = -4, delta_triAng = 0.015;
let vScroll, SecCounter = 0;
let GameOverFlag = false, GameStartFlag = false;
let gapWidth = 120, gameSpeed = 4, difficulty_seed = 0.6;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
	bgImg = loadImage("assets/sprites/background-day.png");
	baseImg = loadImage("assets/sprites/base.png");
	msgImg = loadImage("assets/sprites/message.png");
	gameoverImg = loadImage("assets/sprites/gameover.png");
	up_pipeImg = loadImage("assets/sprites/pipe-green-upper.png");
	low_pipeImg = loadImage("assets/sprites/pipe-green-lower.png");
	bluebird_upflap_Img = loadImage("assets/sprites/bluebird-upflap.png");
	bluebird_midflap_Img = loadImage("assets/sprites/bluebird-midflap.png");
	bluebird_downflap_Img = loadImage("assets/sprites/bluebird-downflap.png");
}

function setup() {
	// Game basic setup.
	// Mounting canvas onto div for convenient styling.
	cvsWrapper = document.getElementById("canvasWrapper");
	const myCanvas = createCanvas(
		cvsWrapper.offsetWidth,
		cvsWrapper.offsetHeight
	);
	myCanvas.parent("canvasWrapper");
	
	// setup code below
	//bg setup
	bgScale = width / bgImg.width;
	baseScale = width / baseImg.width;
	baseHeight = height * 0.85;
	bg_x1 = 0, bg_x2 = width, vScroll = 3;
	random1 = 0; 
	random2 = 0;

	//message setup
	msgScale = width / msgImg.width;

	//birds setup
	triW = 50;
	triH = 40;
	vx = 0;
	vy = 0;
	triAng = 0;
	x1 = width / 2 - triW / 2;
	y1 = height / 2 - triH / 2 + 0.1 * height;

}

function draw() {
	// Render function (called per frame.)
	background(0);
	//for game over
	if(y1 > baseHeight)
		GameOverFlag = true;
	if(GameOverFlag)
	{
		vScroll = 0;
		vy = 0;
		g = 0;
		delta_triAng = 0;
		SecCounter = 0;
	}
	//scrolling the background
	bg_x1 -= vScroll;
	bg_x2 -= vScroll;
	if(bg_x1 <= -width)
	{
		bg_x1 = width;
		random1 = Math.random() * difficulty_seed * width;
		if(up_pipeImg.height + gapWidth + random1 > baseHeight)
			random1 = 0;
	}
	if(bg_x2 <= -width)
	{
		bg_x2 = width;
		random2 = Math.random() * difficulty_seed * width;
		if(up_pipeImg.height + gapWidth + random2 > baseHeight)
			random2 = 0;
	}
	image(bgImg, bg_x1, 0,  bgImg.width * bgScale,  bgImg.height * bgScale);
	image(bgImg, bg_x2, 0,  bgImg.width * bgScale,  bgImg.height * bgScale);
	if(GameStartFlag)
	{
		console.log(random1);
		//draw the pipes!
		image(up_pipeImg, bg_x1, 0, up_pipeImg.width, random1 + up_pipeImg.height);
		image(low_pipeImg, bg_x1, up_pipeImg.height + gapWidth + random1);
		image(up_pipeImg, bg_x2, 0, up_pipeImg.width, random2 + up_pipeImg.height);
		image(low_pipeImg, bg_x2, up_pipeImg.height + gapWidth + random2);
	}
	image(baseImg, bg_x1, baseHeight, width, baseImg.height * baseScale);
	image(baseImg, bg_x2, baseHeight, width, baseImg.height * baseScale);
	if(GameOverFlag)
		image(gameoverImg, (width - width / 1.3) / 2, 0.3 * height
		  , width / 1.3, width / 1.3 / gameoverImg.width * gameoverImg.height);
	
	if(!GameStartFlag)
	{
		image(msgImg, (width - width / 1.3) / 2, 0.1 * height
		  , width / 1.3, msgImg.height * msgScale / 1.3);
		translate(x1, y1);
		if(SecCounter % (3 * gameSpeed) < gameSpeed)
			image(bluebird_upflap_Img, 0, -triH, triW, triH);
		else if(SecCounter % (3 * gameSpeed) < 2 * gameSpeed)
			image(bluebird_midflap_Img, 0, -triH, triW, triH);
		else
			image(bluebird_downflap_Img, 0, -triH, triW, triH);
		SecCounter++;
	}
	else
	{
		//birds behavior
		vy += g;
		x1 += vx;
		y1 += vy;
		triAng += delta_triAng;
		translate(x1, y1);
		rotate(triAng);

		//gameover flag
		
		if( x1 > bg_x1 && x1 < bg_x1 + up_pipeImg.width && (y1 - triH - bluebird_midflap_Img.height / 2 < up_pipeImg.height + random1 ||  y1 - triH + bluebird_midflap_Img.height > up_pipeImg.height + random1 + gapWidth))
			GameOverFlag = true
		if( x1 > bg_x2 && x1 < bg_x2 + up_pipeImg.width && (y1 - triH - bluebird_midflap_Img.height / 2 < up_pipeImg.height + random2 ||  y1 - triH + bluebird_midflap_Img.height > up_pipeImg.height + random2 + gapWidth))
			GameOverFlag = true
		
		//image(bluebird_upflap_Img, 0, -triH, triW, triH);
		if(SecCounter % (3 * gameSpeed) < gameSpeed)
			image(bluebird_upflap_Img, 0, -triH, triW, triH);
		else if(SecCounter % (3 * gameSpeed) < 2 * gameSpeed)
			image(bluebird_midflap_Img, 0, -triH, triW, triH);
		else
			image(bluebird_downflap_Img, 0, -triH, triW, triH);
		SecCounter++;

	}
}

function keyPressed() {
	if(keyCode === 32 && !GameOverFlag)
	{
		GameStartFlag = true;
		vy = tapA;
		triAng = -PI / 4;
		SecCounter = 0;
	}
}
