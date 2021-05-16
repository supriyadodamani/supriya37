class Player{
    constructor()
{
    this.index=0;
    this.name=null;
    this.distance=0;

}

getCount(){
    var getplayerCountRef=database.ref('/playerCount');
    getplayerCountRef.on("value",function(data){
        playerCount=data.val();
    })
}
updateCount(count){
     database.ref("/").update({
         playerCount:count
     })
}
update(){
    var plrIndex="players/player"+this.index;
    database.ref(plrIndex).update({
        name:this.name,
        distance:this.distance
    })
}
static getPlayerInfo(){
    var plrInfoRef= database.ref("players");
    plrInfoRef.on("value",function(data){
        allPlayers=data.val();
    })

}
}