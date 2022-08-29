var canvas;
var player1, player1_img;


function preload(){
player1_img = loadImage("./assets/Player1running.png");
}

function setup(){
    canvas = createCanvas(500, 700)
    player1 = createSprite(200,600);
    player1.addImage("player1", player1_img);
    player1.scale = 0.45;
}

function draw(){
    background("black")
    console.log(player1.positionX)
    if(keyIsDown(UP_ARROW)){
        player1.x = player1.x - 10
    }
    playerControls()
    drawSprites()
}

function playerControls(){
    //console.log("hello")
    

}