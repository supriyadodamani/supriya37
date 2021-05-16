
var database;
var gameState=0;
var playerCount;
var player,form,game;
var allPlayers;
function setup(){
    createCanvas(windowWidth,windowHeight);
    database=firebase.database();

    game= new Game();
    game.getState();
    game.start();

 
}

function draw(){
    background("white");
    console.log(playerCount);

    if(playerCount===4){
        game.updateState(1);
    }
    if(gameState===1){
        game.play();
        clear();
    }
}

