const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var bg, bgImage;
var startButton, startButtonImage;
var rules;
var box, boxImage;
var number;
var font;
var isNumberVisible = true;
var gameState = "rules";

function preload() {
    bgImage = loadImage("bgImage.jpg");
    startButtonImage = loadImage("startButton.png");
    boxImage = loadImage("box.png");
    font = loadFont("CrashNumberingSerif.ttf");
    Visibility = 0;
}

function setup() {
    createCanvas(1536, 764);

    engine = Engine.create();
    world = engine.world;

    bg = createSprite(768, 381);
    bg.addImage("bgImage", bgImage);
    bg.scale = 0.4;

    rules = new Rules(750, 480, 1000, 1000);

    startButton = createSprite(1430, 700);
    startButton.addImage("startButton", startButtonImage);
    startButton.scale = 0.2;
    startButton.setCollider("rectangle", 0, 0, 850, 400);

    number = getRandomInteger(0, 10);

    Engine.run(engine);
}

function draw() {
    background("white");
    frameRate(120);

    if (gameState === "rules") {
        if (mousePressedOver(startButton)) {
            gameState = "playLevel1";
        }
        drawSprites();
    }

    if (gameState === "playLevel1") {
        startButton.visible = false;
        rules.Visibility = -255;
        box = createSprite(768, 100);
        box.addImage("box", boxImage);
        box.scale = 0.12;
        drawSprites();
        if (isNumberVisible === true) {
            textFont(font);
            fill("black");
            textAlign(CENTER, CENTER);
            textSize(90);
            text(number, 768, 100);
            setTimeout(() => {
                isNumberVisible = false;
            }, 10000);
        } else {
            box.visible = false;
            console.log("else part");
        }
    }

    Engine.update(engine);
    rules.display();
}

function getRandomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function numberFadeOut() {
    tint(255, 255, 255, this.Visibility);
}