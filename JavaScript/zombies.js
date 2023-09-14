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

    class Zombie4 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie3");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie5 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie4");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
        collision4(obstacle1) {

            const zombieChar = this.element.getBoundingClientRect();
            const obstacle1Boundry = obstacle1.element.getBoundingClientRect();
        
        if (
          zombieChar.left < obstacle1Boundry.right &&
          zombieChar.right > obstacle1Boundry.left &&
          zombieChar.top < obstacle1Boundry.bottom &&
          zombieChar.bottom > obstacle1Boundry.top
        ) {
            
          return true;
        } else {
          return false;
        }
        }
    }

    class Zombie6 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie5");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie7 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie6");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie8 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie7");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie9 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie8");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie10 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie9");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie11 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie10");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie12 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie11");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie13 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie12");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie14 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie13");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie15 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie14");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie16 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie15");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie17 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie16");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }

    class Zombie18 {
        constructor (gameScreen, width, height, left, top,) {
        this.gameScreen = gameScreen;
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.getElementById("zombie17");
        /*this.element.src = imgSrc;*/
        this.element.style.zIndex = 100
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
        }
    }