class Game {
    constructor() {
    this.startScreen = document.getElementsByClassName("game-intro")[0];
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");
    this.player = new Player (this.gameScreen, 90, 128, 550, 632,)
    this.zombie1 = new Zombie1 (this.gameScreen, 96, 96, 200, 650)
    this.zombie2 = new Zombie2 (this.gameScreen, 96, 96, 180, 650)
    this.zombie3 = new Zombie3 (this.gameScreen, 96, 96, 160, 650)
    this.height = "700px";
    this.width = "1200px";
    this.obstacles = [];
    this.counter = 0;
    this.time = 0;
    this.lives = 3;
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
        if (this.counter % 200 === 0) {
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
                this.player.directionX = 0
            }

            if (this.player.collision(this.zombie1)){
                this.endGame()
            }
        }
        this.player.move()
        
    }
    endGame() {
        this.player.element.remove();
        this.obstacles.forEach(obstacle => obstacle.element.remove())
        this.zombie1.element.remove();
        this.zombie2.element.remove();
        this.zombie3.element.remove();

        this.gameIsOver = true;

        this.gameScreen.style.display = "none";

        this.gameEndScreen.style.display = "block";
    }
}
