function drawBrick(x,y){
    let colorchenger = false;
    for(let i = 0;i <= 4;i++){
        switch (colorchenger){
            case false:
                ctx.fillStyle = "red";
                ctx.fillRect(x*skok,y*skok,5,3);
            break;
            case true:
                ctx.fillStyle = "#eb3461";
                ctx.fillRect(x*skok,y*skok,10,3);

        }
    }
}