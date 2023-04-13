const displayArray = document.querySelector("#displayArray > pre");
const canvas = document.querySelector("#canvas");
const scoreElement = document.querySelector("#score");
const ctx = canvas.getContext("2d");
document.addEventListener("keydown",onKeyDown,);


const rozmiarPola = 30;
const stepWait = 1;

class Player {
    x;
    y;  
    kierunek = 1;
    actualStep = 0;
    constructor(posx, posy){
        this.x = posx;
        this.y = posy;
    }
    setX(posx){
        this.x = posx;
    }
    setY(posy){
        this.y = posy;
    }
    getX(){
        return this.x;
    }
    getY(){
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
                ctx.fillRect(this.x+9,this.y+9,12,12);  //wieża
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
class Bullet{
    x;
    y;
    kierunek;
    hited = false;
    constructor(posx, posy, k){
        this.x = posx;
        this.y = posy;
        this.kierunek = k;
    }
    draw(){
        if(this.hited === true)
        {
            return;
        }
        ctx.fillStyle = "orange";
        switch (this.kierunek) {
            case 1:
                ctx.fillRect(this.x+rozmiarPola/2-2,this.y+rozmiarPola,3,5);//DÓŁ
                break;
            case 2:
                ctx.fillRect(this.x+rozmiarPola,this.y+rozmiarPola/2-2,5,3);//PRAWO
                break;
            case 3:
                ctx.fillRect(this.x+rozmiarPola/2-2,this.y-5,3,5);//GÓRA
                break;
            case 4:
                ctx.fillRect(this.x-5,this.y+rozmiarPola/2-2,5,3);//LEWO
                break;
        }
        this.move()
    }
    move(){
        switch (this.kierunek) {
            case 1:
                if (this.colider() === true) {
                    this.y++;
                }
                break;
            case 2:
                if (this.colider() === true) {
                    this.x++;
                }
                break;
            case 3:
                if (this.colider() === true) {
                    this.y--;
                }
                break;
            case 4:
                if (this.colider() === true) {
                    this.x--;
                }
                break;
        }
    }
    colider(){
        if (this.x > 0 && this.x < canvas.width && this.y > 0 && this.y < canvas.height) {
            return true;
        }
        this.hited = true;
        return false;
    }
}
class Structure{
    x;
    y;
    type;
    constructor(posx, posy, typex){
        this.x = posx;
        this.y = posy;
        this.type = typex;
    }
    colider;
    shotColider;
    draw(){
        switch (this.type) {
            case "cegla":
                    ctx.fillStyle = "red";
                    this.colider = true;
                    this.shotColider = true;
                    ctx.fillRect(this.x,this.y,rozmiarPola,rozmiarPola);
                break;
            case "woda":
                    ctx.fillStyle = "blue";
                    this.colider = true;
                    this.shotColider = false;
                    ctx.fillRect(this.x,this.y,rozmiarPola,rozmiarPola);
                break;
            case "trawa":
                    ctx.fillStyle = "green";
                    this.colider = false;
                    this.shotColider = false;
                    ctx.fillRect(this.x,this.y,rozmiarPola,rozmiarPola);
                break;
        }
    }
    coliding(objx, objy,kierunek){
        if (this.colider === true){
            switch (kierunek) {
                case 1:
                case 3:
                    if (objx === this.x &&
                        (objy === this.y ||
                            objy + rozmiarPola/2 === this.y ||
                            objy - rozmiarPola/2 === this.y
                                )) {
                            return true
                    }
                    break;
                case 2:
                case 4:
                    if (objy === this.y &&
                        (objx === this.x ||
                        objx + rozmiarPola/2 === this.x ||
                        objx - rozmiarPola/2 === this.x
                            )) {
                            return true
                    }
                    break;
            }
            return false;    
        }
        return false
    }
}
class Bot{
    x;
    y;
    kierunek = 1;
    died = false;
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
                ctx.fillRect(this.x+9,this.y+9,12,12);  //wieża
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
    structure = [];
    map;
    player;
    bots = [];
    bullets = [];
    constructor(lvl) {
        this.map = this.loadMap(lvl);
        this.structure = this.prepareMap();
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
    prepareMap(){
        let struct = [];
        for (let j = 0; j < this.map.length; j++) {
          for (let i = 0; i < this.map[j].length; i++) {
            switch (this.map[j][i]) {
              case 1:
                struct.push(new Structure(i * rozmiarPola, j * rozmiarPola, "cegla"));
                break;
              case 2:
                struct.push(new Structure(i * rozmiarPola, j * rozmiarPola, "woda"));
                break;
              case 3:
                struct.push(new Structure(i * rozmiarPola, j * rozmiarPola, "trawa"));
                break;
              case 4:
                this.bots.push(new Bot(i * rozmiarPola, j * rozmiarPola));
                break;
              case 5:
                this.player = new Player(i * rozmiarPola, j * rozmiarPola);
                this.player.playerDraw();
                break;
            }
          }
        }
        return struct;
    }
    clear(){
        ctx.clearRect(0, 0, canvas.width, canvas.height); // czyszczenie            
        ctx.fillStyle = "grey";
        ctx.fillRect(0,0,canvas.width,canvas.height);
    }
    draw(){
        this.structure.forEach(element => {
            element.draw()
        });
        this.bullets.forEach(element => {
            element.draw()
        })
    }
    update(){
        this.clear();
        this.draw();
        for (let i = 0; i < this.bots.length; i++) {
            this.bots[i].playerDraw();
          }
        this.player.playerDraw();
    }
    move(kierunek) {
        let checker = false;
          switch(kierunek) {
            case 1: // lewa strzałka
                this.structure.forEach(element => {
                    if(element.coliding(this.player.x - rozmiarPola, this.player.y,1) === true){
                        checker = true;
                        return;
                    }
                }) 
                if(checker === false){
                    this.player.moveLeft();
                }
                
              break;
            case 2: // górna strzałka
                this.structure.forEach(element => {
                if(element.coliding(this.player.x, this.player.y - rozmiarPola,2) === true){
                        checker = true;
                        return;
                    }
                }) 
                if(checker === false){
                    this.player.moveUp();
                }               
                
              break;
            case 3: // prawa strzałka
                this.structure.forEach(element => {
                if(element.coliding(this.player.x + rozmiarPola, this.player.y,3) === true){
                        checker = true;
                        return;
                    }
                }) 
                if(checker === false){
                    this.player.moveRight();
                }
                
              break;
            case 4: // dolna strzałka
                this.structure.forEach(element => {
                if(element.coliding(this.player.x, this.player.y + rozmiarPola,4) === true){
                        checker = true;
                        return;
                    }
                }) 
                if(checker === false){
                    this.player.moveDown();
                }

              break;
        }      
    }
    createBullet(objx = -30, objy = -30)
    {
        if (objx === -30 && objy === -30) {
            this.bullets.push(new Bullet(this.player.x,this.player.y,this.player.kierunek))
        }
        
    }
}

let one = new Game("test");
one.draw();

let updateInterval = setInterval(one.update.bind(one), 10);

function onKeyDown(event){
    switch (event.code) {
        case "KeyA":
            one.move(1);
            break;
        case "KeyW":
            one.move(2);
            break;
        case "KeyD":
            one.move(3);
            break;
        case "KeyS":
            one.move(4);
            break;   
        case"Space":
            one.createBullet();
            break
    }
} 
// 1 s
// 2 e
// 3 n
// 4 w