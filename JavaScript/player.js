class Player {
constructor (gameScreen, width, height, left, top,) {
this.gameScreen = gameScreen;
this.width = width;
this.height = height;
this.left = left;
this.top = top;
this.directionX = 0;
this.directionY = 0;
this.y_velocity = 0;
this.x_velocity = 0;
this.jumping = false
this.element = document.getElementById("raider");
this.element.style.zIndex = 5;
this.element.style.position = "absolute";
this.element.style.width = `${width}px`;
this.element.style.height = `${height}px`;
this.element.style.left = `${left}px`;
this.element.style.top = `${top}px`;
this.gameScreen.appendChild(this.element);
}
 move(){
    this.left += this.directionX

    // this.top -= this.directionY
    if (this.jumping) {

        this.y_velocity += 0.3;// gravity
        this.top += this.y_velocity;
        //this.y_velocity *= 0.1;
    }

    if (this.top >= 760 - 128) {
console.log("hello", this.y_velocity)
        this.jumping = false;
        this.top = 760 - 128;
        this.y_velocity = 0;
    
      }
   
    this.updatePosition();
    
 }
 updatePosition(){
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
 }
 collision(obstacle) {

    const playerChar = this.element.getBoundingClientRect();
    const obstacleBoundry = obstacle.element.getBoundingClientRect();

if (
  playerChar.left + 50 < obstacleBoundry.right &&
  playerChar.right > obstacleBoundry.left &&
  playerChar.top < obstacleBoundry.bottom &&
  playerChar.bottom > obstacleBoundry.top
) {
    
  return true;
} else {
  return false;
}
}
collision2(zombie) {

    const playerChar = this.element.getBoundingClientRect();
    const zombieBoundry = zombie.element.getBoundingClientRect();

if (
  playerChar.left < zombieBoundry.right &&
  playerChar.right > zombieBoundry.left &&
  playerChar.top < zombieBoundry.bottom &&
  playerChar.bottom > zombieBoundry.top
) {
    
  return true;
} else {
  return false;
}
}
collision3(helicopter){

    const playerChar = this.element.getBoundingClientRect();
    const helicopterBoundry = helicopter.element.getBoundingClientRect();

    if (
      playerChar.left < helicopterBoundry.right &&
      playerChar.right > helicopterBoundry.left &&
      playerChar.top < helicopterBoundry.bottom &&
      playerChar.bottom > helicopterBoundry.top
    ) {
        
      return true;
    } else {
      return false;
  
}
}
}































/*let player, controller, loop
 Player = {
    height: 128,
    width: 128,
    jumping: true,
    x_velocity: 0,
    y_velocity: 0
}

 controller() 
    
    up : false,
    KeyListener : function(event) {
        let key_state = (event.type == "keydown")?true:false;
        
        switch(event.keyCode) {
           
            case 32: //up
                controller.up = key_state;
                break;
            
        }
    }

 }
loop() {
    if (controller.up && Player.jumping == false){
        Player.y_velocity -= 20;
        Player.jumping = true;
    }
    
    // Watched a video on implementing gravity
  Player.y_velocity += 1.5;// gravity
  Player.x += rectangle.x_velocity;
  Player.y += rectangle.y_velocity;
  Player.x_velocity *= 0.9;// friction
  Player.y_velocity *= 0.9;// friction

  if (Player.y > 632 - 128) {

    Player.jumping = false;
    Player.y = 632 - 32;
    Player.y_velocity = 0;

  }
}

window.addEventListener("keydown", controller.KeyListener)
window.addEventListener("keyup", controller.KeyListener);*/