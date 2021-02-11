

class Game{

    constructor(){
    
    
    
    
    
    
    
    
    
    }
    getstate(){
    var gameStateref=database.ref("gameState")
    gameStateref.on("value",function 
    (data) {
     gameState=data.val()   
    })
    }
    
    
    
    update(state){
    database.ref("/").update({
    gameState:state
    
    })
    
    }
    async start () {
    
    
    if(gameState===0){
    player=new Player()
    var playerCountref=await database.ref("playerCount").once("value")
    if(playerCountref.exists()){
    
    playerCount=playerCountref.val()
    player.getCount()
    
    
    
    }
    
    
    form=new Form()
    form.display();
    
    }
    for(var i=10;i<1000;i=i+200){
    track=createSprite(100,i,2,10)
    track=createSprite(1200,i,2,10)
}
    car1=createSprite(100,200)
   
    car2=createSprite(300,200)
 
    car3=createSprite(500,200)   
  
    car4= createSprite(700,200)

    cars=[car1,car2,car3,car4]
    }
     play(){
     form.hide()       
    textSize(30)
    text("game start",120,100)
    Player.getPlayerinfo()
    if (allplayers!==undefined){
    background("white")
      
    var displayposition=130
       var index=0
      var x=175
      var y=0
      
       for(var plr in allplayers){
        index=index+1
     
        x=x+200
        y=displayHeight-allplayers[plr].distance
        cars[index-1].x=x
        cars[index-1].y=y
        if(index===player.index){
            cars[index-1].shapeColor="red"
    camera.position.x=displayWidth/2
    camera.position.y=cars[index-1].y
      
    }
    
    }
    
    
    }
    
   
    
   
  
  
    
    if(keyIsDown(UP_ARROW) && player.index !== null){
        
        
        player.distance +=2
         player.update();
      
      
      
      }
    if(player.distance>600){
    
        gameState=2
        
        }
    drawSprites()
    }
    end(){


        console.log("game ended")
        
        
        
        
        }
    
    
    }
    
    
    