function moveBots(x,y,k,iteracja){
    //TODO 
    
    var nextMove = randomNumber(nextMove)

    try{
        switch(nextMove){
           
            case 1:
                if(colisionTanks(x,y,1) === false){
                y += ruch;
                k = 1;
                }else{
                    moveBots(x,y,k,iteracja)    
                }
                //console.log(x,y,k,iteracja)
            break;
            case 2:
                if(colisionTanks(x,y,2) === false){
                x += ruch;
                k = 2;
                }else{
                    moveBots(x,y,k,iteracja)    
                }
                //console.log(x,y,k)
            break;
            case 3:
                if(colisionTanks(x,y,3) === false){
                y -= ruch;
                k = 3;
                }else{
                    moveBots(x,y,k,iteracja)    
                }
                //console.log(x,y,k)
            break;
            case 4:
                if(colisionTanks(x,y,4) === false){
                y -= ruch;
                k = 4;
                }else{
                    moveBots(x,y,k,iteracja)    
                }
                //console.log(x,y,k)
            break;
        }
    return [x,y,k,iteracja]
    }
    catch(err){
        console.log("error")
    }
    // console.log("ruszam")
    // console.log(x,y,k)
}
