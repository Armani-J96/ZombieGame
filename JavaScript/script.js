window.onload = function () {
    let startBtn = document.getElementById("start-button");
    let restartButton = document.getElementById("restart-button");
    let winRestartButton = document.getElementById("win-restart-button");

   
    startBtn.addEventListener("click", function () {
        
    startGame()
    });

    restartButton.addEventListener("click", function () {

        let gameEndScreen = document.getElementById('game-end')
        let gameWinScreen = document.getElementById('game-win')
        
        gameEndScreen.style.display = "none";
        gameWinScreen.style.display = "none";
        startGame()    
    });

    winRestartButton.addEventListener("click", function() {

        let gameEndScreen = document.getElementById('game-end')
        let gameWinScreen = document.getElementById('game-win')
        
        gameEndScreen.style.display = "none";
        gameWinScreen.style.display = "none";
        startGame()
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