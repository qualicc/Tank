function shootsBots(xBot,yBot,xPlayer,yPlayer,k){
    //TODO
    //JEŚLI GRACZ JEST W TYM SAMYM X LUB Y BOT STRZELA
    if (xBot === xPlayer){
        if(yBot < yPlayer){
            shoots.push({x:xBot,y:yBot,dir:1});
            k = 1;
        }else{
            shoots.push({x:xBot,y:yBot,dir:3});
            k = 3;
        }
    }else if(yBot === yPlayer){
        if(xBot < xPlayer){
            shoots.push({x:xBot,y:yBot,dir:2});
            k = 2;
        }else{
            shoots.push({x:xBot,y:yBot,dir:4});
            k = 4;
        }
    }
}
