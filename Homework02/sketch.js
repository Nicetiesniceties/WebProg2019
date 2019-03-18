let cvsWrapper = null;
let bgImg, baseImg, msgImg, bluebird_upflap_Img, gameoverImg;
let bg_x1, bg_x2, random1, random2, real_bg_x1, real_bg_x2;
let x1, y1, g = 12 / 60, tapA = -4, delta_triAng = 0.015;
let vScroll = 3, SecCounter = 0;
let GameOverFlag = false, GameStartFlag = false, hitSoundFlag = false, pipe1_flag = true, pipe2_flag = false, GLOBAL_SWITCH_BIRD_FLAG = false;
let GLOBAL_POINT_COUNTER = 0, GLOBAL_SWITCH_BIRD_INDEX = 0;
let gapWidth = 120, gameSpeed = 4, difficulty_seed = 0.6;
var numImgs = [], upflap_Imgs = [], midflap_Imgs = [], downflap_Imgs = [];
var wingSound, hitSound, dieSound, pointSound;
// assets from: https://github.com/sourabhv/FlapPyBird/tree/master/assets

function preload() {
	bgImg = loadImage("assets/sprites/background-day.png");
	bgImg_night = loadImage("assets/sprites/background-night.png");
	baseImg = loadImage("assets/sprites/base.png");
	msgImg = loadImage("assets/sprites/message.png");
	gameoverImg = loadImage("assets/sprites/gameover.png");
	up_pipeImg = loadImage("assets/sprites/pipe-green-upper.png");
	low_pipeImg = loadImage("assets/sprites/pipe-green-lower.png");
	bluebird_upflap_Img = loadImage("assets/sprites/bluebird-upflap.png");
	bluebird_midflap_Img = loadImage("assets/sprites/bluebird-midflap.png");
	bluebird_downflap_Img = loadImage("assets/sprites/bluebird-downflap.png");
	var color = ["redbird", "bluebird", "yellowbird"];
	for(var i = 0; i < 3; i++)
	{
		upflap_Imgs[i] = loadImage(`assets/sprites/${color[i]}-upflap.png`);
		midflap_Imgs[i] = loadImage(`assets/sprites/${color[i]}-midflap.png`);
		downflap_Imgs[i] = loadImage(`assets/sprites/${color[i]}-downflap.png`);
	}
	wingSound = loadSound("assets/audio/wing.wav");
	pointSound = loadSound("assets/audio/point.wav");
	dieSound = loadSound("assets/audio/die.wav");
	hitSound = loadSound("assets/audio/hit.wav");
	for(var i = 0; i < 10; i++)
		numImgs[i] = loadImage(`assets/sprites/${i}.png`);
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
	bg_x1 = 0, real_bg_x1 = 0, real_bg_x2 = width, bg_x2 = width;
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
	{
		delta_triAng = 0;
		vy = 0;
		g = 0;
		if(!hitSoundFlag)
		{
			hitSound.play();
			hitSoundFlag = true;
		}
		GameOverFlag = true;
	}
	if(GameOverFlag)
	{
		vScroll = 0;
		SecCounter = 0;
	}
	//scrolling the background
	bg_x1 -= vScroll;
	bg_x2 -= vScroll;
	real_bg_x1 -= 0.3 * vScroll;
	real_bg_x2 -= 0.3 * vScroll;
	//re-generate the background!
	if(real_bg_x1 < -width)
		real_bg_x1 = width
	if(real_bg_x2 < -width)
		real_bg_x2 = width
	if(bg_x1 <= -width)
	{
		pipe1_flag = false;
		bg_x1 = width;
		random1 = (0.5 - Math.random()) * 2 * difficulty_seed * width;
		if(up_pipeImg.height + gapWidth + random1 > baseHeight ||  up_pipeImg.height + gapWidth + random1 + low_pipeImg.height < baseHeight)
			random1 = 0;
	}
	if(bg_x2 <= -width)
	{
		pipe2_flag = false;
		bg_x2 = width;
		random2 = (0.5 - Math.random()) * 2 * difficulty_seed * width;
		if(up_pipeImg.height + gapWidth + random2 > baseHeight || up_pipeImg.height + gapWidth + random2 + low_pipeImg.height < baseHeight)
			random2 = 0;
	}
	if(GLOBAL_POINT_COUNTER % 10 < 5)
	{
		image(bgImg, real_bg_x1, 0,  width + 3,  bgImg.height * bgScale);
		image(bgImg, real_bg_x2, 0,  width + 3,  bgImg.height * bgScale);
		if(!GLOBAL_SWITCH_BIRD_FLAG)
		{
			GLOBAL_SWITCH_BIRD_INDEX = (GLOBAL_SWITCH_BIRD_INDEX  + 1) % 3;
			GLOBAL_SWITCH_BIRD_FLAG = true;
		}
	}
	else
	{
		GLOBAL_SWITCH_BIRD_FLAG = false;
		image(bgImg_night, real_bg_x1, 0,  width + 3,  bgImg.height * bgScale);
		image(bgImg_night, real_bg_x2, 0,  width + 3,  bgImg.height * bgScale);
	}
	
	//image(numImgs, 0, 0);//testing
	if(GameStartFlag)
	{
		//draw the pipes!
		image(up_pipeImg, bg_x1, 0, up_pipeImg.width, random1 + up_pipeImg.height);
		image(low_pipeImg, bg_x1, up_pipeImg.height + gapWidth + random1);
		image(up_pipeImg, bg_x2, 0, up_pipeImg.width, random2 + up_pipeImg.height);
		image(low_pipeImg, bg_x2, up_pipeImg.height + gapWidth + random2);
	}
	image(baseImg, bg_x1, baseHeight, width, baseImg.height * baseScale);
	image(baseImg, bg_x2, baseHeight, width, baseImg.height * baseScale);
	if(!GameStartFlag)
	{
		image(msgImg, (width - width / 1.3) / 2, 0.125 * height
		  , width / 1.3, msgImg.height * msgScale / 1.3);
		translate(x1, y1);
		if(SecCounter % (3 * gameSpeed) < gameSpeed)
			image(upflap_Imgs[GLOBAL_SWITCH_BIRD_INDEX], 0, -triH, triW, triH);
		else if(SecCounter % (3 * gameSpeed) < 2 * gameSpeed)
			image(midflap_Imgs[GLOBAL_SWITCH_BIRD_INDEX], 0, -triH, triW, triH);
		else
			image(downflap_Imgs[GLOBAL_SWITCH_BIRD_INDEX], 0, -triH, triW, triH);
		SecCounter++;
	}
	else
	{
		//add points
		if(bg_x1 < width / 2 && !pipe1_flag)
		{
			pipe1_flag = true;
			GLOBAL_POINT_COUNTER += 1;
			pointSound.play();
		}
		if(bg_x2 < width / 2 && !pipe2_flag)
		{
			pipe2_flag = true;
			GLOBAL_POINT_COUNTER += 1;
			pointSound.play();
		}
		parse_score(GLOBAL_POINT_COUNTER);
		//birds behavior
		vy += g;
		x1 += vx;
		y1 += vy;
		triAng += delta_triAng;
		translate(x1, y1);
		rotate(triAng);

		//gameover flag
		
		if( x1 > bg_x1 && x1 < bg_x1 + up_pipeImg.width && (y1 - triH - bluebird_midflap_Img.height / 2 < up_pipeImg.height + random1 ||  y1 - triH + bluebird_midflap_Img.height > up_pipeImg.height + random1 + gapWidth))
		{
			if(!hitSoundFlag)
			{
				hitSound.play();
				hitSoundFlag = true;
			}
			GameOverFlag = true
		}
		if( x1 > bg_x2 && x1 < bg_x2 + up_pipeImg.width && (y1 - triH - bluebird_midflap_Img.height / 2 < up_pipeImg.height + random2 ||  y1 - triH + bluebird_midflap_Img.height > up_pipeImg.height + random2 + gapWidth))
		{
			if(!hitSoundFlag)
			{
				hitSound.play();
				hitSoundFlag = true;
			}
			GameOverFlag = true
		}

		//image(bluebird_upflap_Img, 0, -triH, triW, triH);
		if(SecCounter % (3 * gameSpeed) < gameSpeed)
			image(upflap_Imgs[GLOBAL_SWITCH_BIRD_INDEX], 0, -triH, triW, triH);
		else if(SecCounter % (3 * gameSpeed) < 2 * gameSpeed)
			image(midflap_Imgs[GLOBAL_SWITCH_BIRD_INDEX], 0, -triH, triW, triH);
		else
			image(downflap_Imgs[GLOBAL_SWITCH_BIRD_INDEX], 0, -triH, triW, triH);
		SecCounter++;

	}
	if(GameOverFlag)
	{
		rotate(-triAng);
		translate(-x1, -y1);
		image(gameoverImg, (width - width / 1.3) / 2, 0.3 * height
		  , width / 1.3, width / 1.3 / gameoverImg.width * gameoverImg.height);
	}

}

function keyPressed() {
	if(keyCode === 32 && !GameOverFlag)
	{
		if(!GameStartFlag)
		{
			GameStartFlag = true;
			if(bg_x1 < width / 2)
				pipe1_flag = true;
			if(bg_x2 < width / 2)
				pipe2_flag = true;
			random1 = random2 = 0;
		}
		wingSound.play();
		vy = tapA;
		triAng = -PI / 4;
		SecCounter = 0;
	}
	if(keyCode === 32 && GameOverFlag)
	{
		GameOverFlag = false, GameStartFlag = false;
			// setup code below
		//bg setup
		bgScale = width / bgImg.width;
		baseScale = width / baseImg.width;
		baseHeight = height * 0.85;
		bg_x1 = 0, real_bg_x1 = 0, real_bg_x2 = width, bg_x2 = width;
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
		vScroll = 3;

		delta_triAng = 0.015;
		g = 12 / 60;
		hitSoundFlag = false;
		GLOBAL_POINT_COUNTER = 0;
		SecCounter = 0;
	}
}

function parse_score(num)
{
	var number_buff = [];
	//console.log(num);
	while(1 <= num)
	{
		number_buff.push(num % 10)
		num  = Math.floor(num / 10);
	}
	//image(numImgs[number_buff[10]], numImgs[0].width * 2, 0);
	//image(numImgs[number_buff[9]], numImgs[0].width, 0);
	//image(numImgs[number_buff[8]], 0, 0);
	if(number_buff.length == 0)
		number_buff.push(0);
	let first_digit_width = (width - number_buff.length * numImgs[0].width) / 2;
	for(var i = number_buff.length - 1; i >= 0; i--)
		image(numImgs[number_buff[number_buff.length - 1 - i]], first_digit_width + numImgs[0].width * i, 0.2 * height);
}
