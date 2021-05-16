class Game{
    constructor()
    {

    }
    getState(){
        var gameStateRef= database.ref('/gameState');
        gameStateRef.on("value",function(data){
gameState=data.val();
        });
    }
    start()
    {
        if(gameState===0){
            form = new Form();
            player = new Player();
            player.getCount();
            form.display();
        }
        
    }
    updateState(state)
{
database.ref("/").update({
    gameState:state
})
}

play(){
    form.hide();
    textSize(20);
    text("Game Start",width/3-50,height/3-10);

    Player.getPlayerInfo();
    if(allPlayers!==undefined){
        var y=height/3+20;
        for(var plr in allPlayers){
            console.log("hello")
           
            if(plr==="player"+player.index){
                console.log("if block")
                fill("red");
            }
            else{
                fill("black")
            }
           // text(allPlayers[plr].name+":"+ allPlayers[plr].distance,300,200);
            y+=20;
           // console.log(allPlayers[plr].name+":"+ allPlayers[plr].distance)
           console.log(allPlayers);
        }
    }
    /*if(keyDown(UP_ARROW)&& player.index!==null){
        player.distance+=50;
        player.update();

    }*/
}
}