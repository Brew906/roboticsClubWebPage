function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "audio");
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

 function playStation() {
    mySound = new sound("Sled-Zeppelin-Clip.mp3");
    mySound.play();
}
function playStationOff() {
  mySound.stop();
}