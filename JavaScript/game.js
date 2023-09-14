class Game {
    constructor() {
    this.startScreen = document.getElementsByClassName("game-intro")[0];
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.gameWinScreen = document.getElementById("game-win")
    this.player = new Player (this.gameScreen, 90, 128, 550, 632)
    this.zombie1 = new Zombie1 (this.gameScreen, 96, 96, 200, 650)
    this.zombie2 = new Zombie2 (this.gameScreen, 96, 96, 180, 650)
    this.zombie3 = new Zombie3 (this.gameScreen, 96, 96, 160, 650)
    this.zombie4 = new Zombie4 (this.gameScreen, 96, 96, 140, 650)
    this.zombie5 = new Zombie5 (this.gameScreen, 96, 96, 120, 650)
    this.zombie6 = new Zombie6 (this.gameScreen, 96, 96, 100, 650)
    this.zombie7 = new Zombie7 (this.gameScreen, 96, 96, 80, 650)
    this.zombie8 = new Zombie8 (this.gameScreen, 96, 96, 60, 650)
    this.zombie9 = new Zombie9 (this.gameScreen, 96, 96, 40, 650)
    this.zombie10 = new Zombie10 (this.gameScreen, 96, 96, 20, 650)
    this.zombie11 = new Zombie11 (this.gameScreen, 96, 96, 110, 650)
    this.zombie12 = new Zombie12 (this.gameScreen, 96, 96, 90, 650)
    this.zombie13 = new Zombie13 (this.gameScreen, 96, 96, 150, 650)
    this.zombie14 = new Zombie14 (this.gameScreen, 96, 96, 130, 650)
    this.zombie15 = new Zombie15 (this.gameScreen, 96, 96, 10, 650)
    this.zombie16 = new Zombie16 (this.gameScreen, 96, 96, 50, 650)
    this.zombie17 = new Zombie17 (this.gameScreen, 96, 96, 30, 650)
    this.zombie18 = new Zombie18 (this.gameScreen, 96, 96, 130, 650)
    this.helicopter = new Helicopter (this.gameScreen, 266, 92, 5050, 650)
    this.height = "700px";
    this.width = "1200px";
    this.obstacles = [];
    this.counter = 0;
    this.gameOver = false;

    }

    start(){
        this.gameScreen.style.height = this.height;
        this.gameScreen.style.width = this.width;
        this.gameScreen.style.display = "inherit";
        this.startScreen.style.display = "none";
        this.startScreen.style.height = "0px";
        this.loop()
        
    }

    loop() {

        if (this.gameIsOver) {
            return;
        }
        this.counter++
        if (this.counter % 125 === 0) {
             this.obstacles.push(new Obstacle(this.gameScreen))
        }
        this.update();
        
        window.requestAnimationFrame(() => this.loop());
    }

    update() {
        for (let i = 0; i < this.obstacles.length; i++) {

            this.obstacles[i].move()
            
            if (this.obstacles[i].left > 1200) {
                this.obstacles[i].element.remove();
                this.obstacles.splice(i, 1)
            }

            if (this.player.collision(this.obstacles[i])){
               // this.player.top && this.player.left == this.obstacles[i].top && this.obstacles[i].left
                this.player.left -= 2 
                //this.player.x_velocity = this.obstacles[i].directionX
                //this.player.left = this.obstacles[i].left
            } 
            if (this.player.collision(this.obstacles[i])== false){
                this.player.left -= 0
            }

            if (this.player.collision2(this.zombie5)){
                this.endGame()
            }
            if (this.player.collision3(this.helicopter)){
                this.winGame()
            }
            
            if(this.zombie5.collision4(this.obstacles[i])){
                this.obstacles[i].element.remove();
                this.obstacles.splice(i, 1)
            }
        }
        this.player.move()
        this.helicopter.move()
    }
    endGame() {
        // this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove())
        // this.zombie1.element.remove();
        // this.zombie2.element.remove();
        // this.zombie3.element.remove();

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";

        this.gameEndScreen.style.display = "block";
    }
    winGame(){
        // this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove())
        // this.zombie1.element.remove();
        // this.zombie2.element.remove();
        // this.zombie3.element.remove();

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";
        this.gameWinScreen.style.display = "block";

}
}
