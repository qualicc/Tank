function drawTank(x,y,k,player){
    //console.log(cords)
    
    //TODO
    //NAPRAWIĆ kolor
    var color = "red";
    //console.log(bots)
    if(player === true){
        color = "#6b6969" ;
    }
    switch(k){
        case 1:
            ctx.fillStyle = "#494646";
            ctx.fillRect(x,y,5,skok); //gąska1
            ctx.fillRect(x+25,y,5,skok); //gąska2
            ctx.fillStyle = color;
            ctx.fillRect(x+5,y+3,20,22); //kadłub
            ctx.fillStyle = "#d2ced1";
            ctx.fillRect(x+13,y+15,3,15); //działo
            ctx.fillStyle = "#494646";
            ctx.fillRect(x+9,y+9,12,12);  //wieża
       break;

        case 2:

            ctx.fillStyle = "#494646";
            ctx.fillRect(x,y,skok,5); //gąska1
            ctx.fillRect(x,y+25,skok,5); //gąska2
            ctx.fillStyle = color;
            ctx.fillRect(x+3,y+5,22,20); //kadłub
            ctx.fillStyle = "#d2ced1";
            ctx.fillRect(x+15,y+13,15,3); //działo
            ctx.fillStyle = "#494646";
            ctx.fillRect(x+9,y+9,12,12); //wieża
        break;

        case 3:

            ctx.fillStyle = "#494646";
            ctx.fillRect(x,y,5,skok); //gąska1
            ctx.fillRect(x+25,y,5,skok); //gąska2
            ctx.fillStyle = color;
            ctx.fillRect(x+5,y+5,20,22); //kadłub
            ctx.fillStyle = "#d2ced1";
            ctx.fillRect(x+13,y,3,15); //działo
            ctx.fillStyle = "#494646";
            ctx.fillRect(x+9,y+9,12,12); //wieża
        break;

        case 4:

            ctx.fillStyle = "#494646";
            ctx.fillRect(x,y,skok,5); //gąska1
            ctx.fillRect(x,y+25,skok,5); //gąska2
            ctx.fillStyle = color;
            ctx.fillRect(x+5,y+5,22,20); //kadłub
            ctx.fillStyle = "#d2ced1";
            ctx.fillRect(x,y+13,15,3); //działo
            ctx.fillStyle = "#494646";
            ctx.fillRect(x+9,y+9,12,12); //wieża
        break;

}
}
