window.onload = function () {
    const startBtn = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    startBtn.addEventListener("click", function () {
        //console.log("Button Works!")
    startGame();})
    restartButton.addEventListener("click", function () {
        //console.log("Button Works!")
    startGame();
});


    }
    
    function startGame(){
        console.log("game starting")
    let game = new Game()
    game.start()
    
    document.onkeydown = ((e) => {


    
      if (e.code === "Space"){
        console.log("spacebar")
        game.player.directionY -= 1
        if (!game.player.jumping)  {

            console.log("jumping")

            game.player.y_velocity -= 10;
            game.player.jumping = true;
        } 
        
      }
      
    })
}
;