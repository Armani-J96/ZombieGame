class Obstacle {
    constructor(gameScreen) {

        this.gameScreen = gameScreen;
        this.left = 1152;
        this.top = 650;
        this.width = 50;
        this.height = 60;
        this.element = document.createElement("img")
        this.element.src = "./obstacles/hiclipart.com (1).png";
        this.element.style.position = "absolute";
        this.element.style.zIndex = 5;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);

    }
    move() {
        this.left -= 4
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }
}