class Zombie1 {
    constructor (gameScreen, width, height, left, top,) {
    this.gameScreen = gameScreen;
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.getElementById("zombie");
    /*this.element.src = imgSrc;*/
    this.element.style.zIndex = 100
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.gameScreen.appendChild(this.element);
    }

    move (){
    this.updatePosition()
    }

    updatePosition(){
        this.element.style.left = `${this.left}px`;
    }


    collision(player) {

        const zombieChar = this.element.getBoundingClientRect();
        const playerBoundry = player.element.getBoundingClientRect();
    
    if (
      zombieChar.left < playerBoundry.right &&
      zombieChar.right > playerBoundry.left &&
      zombieChar.top < playerBoundry.bottom &&
      zombieChar.bottom > playerBoundry.top
    ) {
        
      return true;
    } else {
      return false;
    }
    }
}


    class Zombie2 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie1");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }

        move (){
            this.updatePosition()
            }
        
            updatePosition(){
                this.element.style.left = `${this.left}px`;
            }
    }


    class Zombie3 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie2");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }

        move (){
            this.updatePosition()
            }
        
            updatePosition(){
                this.element.style.left = `${this.left}px`;
            }
    }