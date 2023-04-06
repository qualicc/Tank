function colisionTanks(x,y,k){
    let checker = false
    switch(k){
        case 1:

            if(y<dlugoscY- skok){
                    for(var i = 0;i < bricks.length;i++){
                        if(bricks[i][1] === y + skok){
                            if(bricks[i][0] === x || bricks[i][0] === x - ruch || bricks[i][0] === x + ruch ){
                                checker = true;
                            }
                        }
                    }
                    
                }else{
                    checker = true;
                }

                for(var i = 0;i < water.length;i++){
                        if(water[i][1] === y + skok){
                            if(water[i][0] === x || water[i][0] === x - ruch || water[i][0] === x + ruch ){
                                checker1 = true;
                            }
                        }
                    }

                if(checker === false){
                    y = y + ruch;

                }
        
        break;

        case 2:
            
            if(x<dlugoscX - skok){
                for(var i = 0;i < bricks.length;i++){
                    if(bricks[i][0] === x + skok){
                        if(bricks[i][1] === y || bricks[i][1] === y - ruch || bricks[i][1] === y + ruch ){
                            checker = true;
                        }
                    }
                }
                
            }else{
                checker = true;
            }

            for(var i = 0;i < water.length;i++){
                if(water[i][0] === x + skok){
                    if(water[i][1] === y || water[i][1] === y - ruch || water[i][1] === y + ruch ){
                        checker = true;
                    }
                }
            }

            if(checker === false){
                x = x + ruch;
            }

        break;

        case 3:
            
            if(y> 0){
                 
                for(var i = 0;i < bricks.length;i++){
                    //console.log("pentla") 
                    if(bricks[i][1] === y - skok){
                        if(bricks[i][0] === x || bricks[i][0] === x - ruch || bricks[i][0] === x + ruch ){
                            checker = true;
                        }
                    }
                } 
            }else{
                checker = true;
            }

            for(var i = 0;i < water.length;i++){
                    if(water[i][1] === y - skok){
                        if(water[i][0] === x || water[i][0] === x - ruch || water[i][0] === x + ruch ){
                            checker = true;
                        }
                    }
                }


            if(checker === false){
                y = y - ruch;
            }   
        
        break;

        case 4:

            //let checkerA = false;
            if(x> 0){
                for(var i = 0;i < bricks.length;i++){
                    if(bricks[i][0] === x - skok){
                        if(bricks[i][1] === y || bricks[i][1] === y - ruch || bricks[i][1] === y + ruch ){
                            checker = true;
                        }
                    }
                }
            }else{
                checker = true;
            }
            for(var i = 0;i < water.length;i++){
                    if(water[i][0] === x - skok){
                        if(water[i][1] === y || water[i][1] === y - ruch || water[i][1] === y + ruch ){
                            checker = true;
                        }
                }
                
            }

            if(checker === false){
                x = x - ruch;
            }

        break;
        //TODO zrobić reszte
    }
    //console.log(checker)
    return checker;
}
