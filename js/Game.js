class Game {
    constructor() {
      this.resetTitle=createElement("h2")
      this.resetButton=createButton("")
      this.leaderboardTitle=createElement("h2")
      this.leader1=createElement("h2")
      this.leader2=createElement("h2")
      this.playerMoving= false
      this.leftKeyActive= false
      this.blast= false
    }
    start() {
      player = new Player();

      form=new Form()
      form.display()
    }

    getState(){
     database.ref("gameState").on("value",function(data){
         gameState= data.val()
         
     })
    }

    updateState(state){
        database.ref("/").update({
            gameState:state
        })
    }
}