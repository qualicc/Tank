document.addEventListener("keydown",onKeyDown,);
function onKeyDown(event){
    //console.log(event.code);
    switch(event.code){

        case "KeyA":
            let moveCheckA = colisionTanks(cords[0],cords[1],4); 
            //console.log(moveCheckA);
            if(colisionTanks(cords[0],cords[1],4)=== false){
                //console.log("ruszam sie");
                cords[0] -= ruch;
                cords[2] = 4;  
            }

            cords[2] = 4;
            //console.log (cords[2]);
        break;

        case "KeyD":
            let moveCheckD = colisionTanks(cords[0],cords[1],2); 
            //console.log(moveCheckD);
            if(colisionTanks(cords[0],cords[1],2)=== false){
                //console.log("ruszam sie");
                cords[0] += ruch;
                cords[2] = 2;  
            }

            cords[2] = 2;
            //console.log (cords[2]);
           
        break;

        case "KeyW":
            let moveCheckW = colisionTanks(cords[0],cords[1],3); 
            //console.log(moveCheckW);
            if(colisionTanks(cords[0],cords[1],3)=== false){
                //console.log("ruszam sie");
                cords[1] -= ruch;
                cords[2] = 3;  
            }else{
                console.log("nie ruszam sie")
            }
          
            cords[2] = 3;
            //console.log (cords[2]);
        break;

        case "KeyS":
            let moveCheck = colisionTanks(cords[0],cords[1],1); 
            //console.log(moveCheck);
            if(colisionTanks(cords[0],cords[1],1)=== false){
                //console.log("ruszam sie");
                cords[1] += ruch;
                cords[2] = 1;  
            }
        

             cords[2] = 1;
            //console.log (cords[2]);
        break;

        case "Space":
           // console.log('shoot ');
            if(rateShoot > 100){
                let shiftX,shiftY = 0;
                shoots.push({x:cords[0]+13,y:cords[1],dir:cords[2]});
                rateShoot = 0;
            }                    
        break;
        case "KeyF":
            endLevel()
    }
}