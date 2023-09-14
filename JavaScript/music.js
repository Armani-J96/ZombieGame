class Music {
    constructor(gameScreen,src){
        this.gameScreen = gameScreen
       this.music = document.createElement("audio")
       this.src = src
       this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
        this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
}

    }
