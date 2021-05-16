class Form{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("play");
        this.greeting=createElement("h3");
        this.title=createElement("h2");




    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();   
    }
    display(){
        this.title.html("car racing game");
        this.title.position(width/2-50,height/10-10);

       this.input.position(width/3-50,height/3-10);
       this.button.position(width/2-50,height/3+50);
       this.button.mousePressed(()=>{
           this.input.hide();
           this.button.hide();

           player.name=this.input.value();
           playerCount++;
           player.index=playerCount;
            player.updateCount(playerCount);
            player.update();
            this.greeting.html("hello"+ player.name);
            this.greeting.position(width/3-50,height/3-10);

       })





    }
}