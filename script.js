const displayArray = document.querySelector("#displayArray > pre");
const canvas = document.querySelector("#canvas");
const scoreElement = document.querySelector("#score");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown",onKeyDown,);


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
        if (this.x > 0) {
          this.x -= rozmiarPola/2;
          this.kierunek = 4;
        }
    }
    moveRight() {
        if (this.x + rozmiarPola < canvas.width) {
          this.x += rozmiarPola/2;
          this.kierunek = 2;
        }
     }
    moveUp() {
        if (this.y > 0) {
          this.y -= rozmiarPola/2;
          this.kierunek = 3;
        }
    }
    moveDown() {
        if (this.y + rozmiarPola < canvas.height) {
          this.y += rozmiarPola/2;
          this.kierunek = 1;
        }
    }
    playerDraw(){
        var color = "red";
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
                ctx.fillRect(this.x,this.y,rozmiarPola,5); //gąska1
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
class Bot{
    x;
    y;
    constructor(posx, posy){
        this.x = posx;
        this.y = posy;
    }
    moveLeft() {
        if (this.x > 0) {
          this.x -= rozmiarPola/2;
          this.kierunek = 4;
        }
    }
    moveRight() {
        if (this.x + rozmiarPola < canvas.width) {
          this.x += rozmiarPola/2;
          this.kierunek = 2;
        }
     }
    moveUp() {
        if (this.y > 0) {
          this.y -= rozmiarPola/2;
          this.kierunek = 3;
        }
    }
    moveDown() {
        if (this.y + rozmiarPola < canvas.height) {
          this.y += rozmiarPola/2;
          this.kierunek = 1;
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
                ctx.fillRect(this.x,this.y,rozmiarPola,5); //gąska1
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
    bots = [];
    constructor(lvl) {
        this.map = this.loadMap(lvl);
        // $("canvas").css("height" , this.map.length * rozmiarPola);
        // $("canvas").css("widht" , this.map[1].length * rozmiarPola);
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
                        this.bots.push(new Bot(i*rozmiarPola,j*rozmiarPola))
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
        this.player.playerDraw()
    }
    move(kierunek) {
          switch(kierunek) {
            case 1: // lewa strzałka
              console.log(this.player.x + " " + this.player.y)
              this.player.moveLeft();
              break;
            case 2: // górna strzałka
              console.log(this.player.x + " " + this.player.y)
              this.player.moveUp();
              break;
            case 3: // prawa strzałka
              console.log(this.player.x + " " + this.player.y)
              this.player.moveRight();
              break;
            case 4: // dolna strzałka
              console.log(this.player.x + " " + this.player.y)
              this.player.moveDown();
              break;
        }      
    }
}

let one = new Game("test");
one.draw();

let updateInterval = setInterval(one.update.bind(one), 10);

function onKeyDown(event){
    switch (event.code) {
        case "KeyA":
            one.move(1)
            break;
        case "KeyW":
            one.move(2)
            break;
        case "KeyD":
            one.move(3)
            break;
        case "KeyS":
            one.move(4)
            break;    
    }
} 