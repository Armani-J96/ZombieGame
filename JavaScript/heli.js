class Helicopter {
    constructor (gameScreen, width, height, left, top,) {
    this.gameScreen = gameScreen;
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.getElementById("heli");
    /*this.element.src = imgSrc;*/
    this.element.style.zIndex = 100
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.appendChild(this.element);
    }
    move() {
        this.left -= 2
        this.updatePosition()
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }
}