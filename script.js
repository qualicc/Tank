const displayArray = document.querySelector("#displayArray > pre");
const canvas = document.querySelector("#canvas");
const scoreElement = document.querySelector("#score");
const ctx = canvas.getContext("2d");


const rozmiarPola = 30;
const stepWait = 1;

class Player {
    x = 0;
    y = 0;  
    kierunek = 1;
    actualStep = 0;
    setX(posx){
        this.x = posx;
    }
    setY(posy){
        this.y = posy;
    }
    getX(){
        console.log(this.x)
        return this.x;
    }
    getY(){
        console.log(this.y)
        return this.y;
    }
    moveLeft() {
        if (this.x - rozmiarPola >= 0) {
          this.x -= rozmiarPola;
          this.kierunek = 4;
        }
    }
    moveRight() {
        if (this.x + rozmiarPola < canvas.width) {
          this.x += rozmiarPola;
          this.kierunek = 2;
        }
     }
    moveUp() {
        if (this.y - rozmiarPola >= 0) {
          this.y -= rozmiarPola;
          this.kierunek = 1;
        }
    }
    moveDown() {
        if (this.y + rozmiarPola < canvas.height) {
          this.y += rozmiarPola;
          this.kierunek = 3;
        }
    }
    playerDraw(){
        var color = "#6b6969";
        switch(this.kierunek){
            case 1:      
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x,this.y,5,rozmiarPola); //gąska1
                ctx.fillRect(this.x+25,this.y,5,rozmiarPola); //gąska2
                ctx.fillStyle = color;
                ctx.fillRect(this.x+5,this.y+3,20,22); //kadłub
                ctx.fillStyle = "#d2ced1";
                ctx.fillRect(this.x+13,this.y+15,3,15); //działo
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x+9,this.day+9,12,12);  //wieża
           break;
    
            case 2:
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x,y,rozmiarPola,5); //gąska1
                ctx.fillRect(this.x,this.y+25,rozmiarPola,5); //gąska2
                ctx.fillStyle = color;
                ctx.fillRect(this.x+3,this.y+5,22,20); //kadłub
                ctx.fillStyle = "#d2ced1";
                ctx.fillRect(this.x+15,this.y+13,15,3); //działo
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x+9,this.y+9,12,12); //wieża
            break;
    
            case 3:
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x,this.y,5,rozmiarPola); //gąska1
                ctx.fillRect(this.x+25,this.y,5,rozmiarPola); //gąska2
                ctx.fillStyle = color;
                ctx.fillRect(this.x+5,this.y+5,20,22); //kadłub
                ctx.fillStyle = "#d2ced1";
                ctx.fillRect(this.x+13,this.y,3,15); //działo
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x+9,this.y+9,12,12); //wieża
            break;
    
            case 4:
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x,this.y,rozmiarPola,5); //gąska1
                ctx.fillRect(this.x,this.y+25,rozmiarPola,5); //gąska2
                ctx.fillStyle = color;
                ctx.fillRect(this.x+5,this.y+5,22,20); //kadłub
                ctx.fillStyle = "#d2ced1";
                ctx.fillRect(this.x,this.y+13,15,3); //działo
                ctx.fillStyle = "#494646";
                ctx.fillRect(this.x+9,this.y+9,12,12); //wieża
            break;
    
        }
    }
}
class Game {
    map;
    player = new Player();
    constructor(lvl) {
        this.map = this.loadMap(lvl);
    }
    
    loadMap(lvl) {
        let map = null;
        $.ajax({
            async: false,
            url: 'lvls.json',
            dataType: 'json',
            success: function(data) {
                const level = data.find(element => element.name === lvl);
                map = level ? level.map : null;
            }
        });
        return map;
    }
    clear(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); // czyszczenie            
        ctx.fillStyle = "grey";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    draw(){
        for(var j =0;j < this.map.length; j++){
            for(var i =0;i < this.map[j].length; i++){
                switch (this.map[j][i]) {
                    case 1:
                        ctx.fillStyle = "red";
                        ctx.fillRect(i*rozmiarPola,j*rozmiarPola,rozmiarPola,rozmiarPola);
                        break;
                    case 2:
                        ctx.fillStyle = "blue";
                        ctx.fillRect(i*rozmiarPola,j*rozmiarPola,rozmiarPola,rozmiarPola);
                        break;
                    case 3:
                        ctx.fillStyle = "green";
                        ctx.fillRect(i*rozmiarPola,j*rozmiarPola,rozmiarPola,rozmiarPola);
                        break;               
                    case 4:
                        ctx.fillStyle = "grey";//boty
                        ctx.fillRect(i*rozmiarPola,j*rozmiarPola,rozmiarPola,rozmiarPola);
                        break;
                    case 0:
                        ctx.fillStyle = "grey";
                        ctx.fillRect(i*rozmiarPola,j*rozmiarPola,rozmiarPola,rozmiarPola);
                        break;
                    case 5:
                        ctx.fillStyle = "grey";
                        ctx.fillRect(i*rozmiarPola,j*rozmiarPola,rozmiarPola,rozmiarPola);
                        this.player.setX(i*rozmiarPola);
                        this.player.setY(j*rozmiarPola);
                        this.player.playerDraw();
                        this.map[j][i] = 6;
                        break;
                }
            }
        }
    }
    update(){
        this.clear()
        this.draw()
        this.move()
        this.player.playerDraw()
        
    }
    
    move() {
        if (this.player.actualStep < stepWait) {
          this.player.actualStep++;
          return;
        }
      
        const self = this; // zapisanie referencji do obiektu klasy Game w zmiennej self
      
        window.addEventListener('keyup', function(event) {
          switch(event.keyCode) {
            case 65: // lewa strzałka
              console.log(self.player.x + " " + self.player.y)
              self.player.moveLeft();
              break;
            case 87: // górna strzałka
              console.log(self.player.x + " " + self.player.y)
              self.player.moveUp();
              break;
            case 68: // prawa strzałka
              console.log(self.player.x + " " + self.player.y)
              self.player.moveRight();
              break;
            case 83: // dolna strzałka
              console.log(self.player.x + " " + self.player.y)
              self.player.moveDown();
              break;
          }
        });
      
        this.player.actualStep = 0;
      }
      

}

let one = new Game("test");
one.draw();

let updateInterval = setInterval(one.update.bind(one), 1000);
