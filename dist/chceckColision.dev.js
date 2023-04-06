"use strict";

function checkColision(shoot) {
  if (shoot.y > canvas.height || shoot.y < 0 || shoot.x < 0 || shoot.x > canvas.width) {
    return true;
  } //console.log("kolizja z ścianą")


  for (var i = 0; i < bricks.length; i++) {
    if (shoot.x >= bricks[i][0] - 3 && shoot.x < bricks[i][0] + skok && shoot.y >= bricks[i][1] - 15 && shoot.y < bricks[i][1] + skok) {
      //console.log(shoot.x,shoot.y,bricks[i],score);
      bricks.splice(i, 1);
      score++;
      scoreElement.textContent = score; //displayArray.innerHTML = '<pre>' + bricks + "</pre>";

      if (bricks.length === 0) {
        console.log('LEVEL FINISHED');
      }

      return true;
    } //console.log("sprawdzam z botami")    


    for (var _i = 0; _i < bots.length; _i++) {
      //console.log(bots[i])
      if (shoot.x >= bots[_i][0] - 3 && shoot.x < bots[_i][0] + skok && shoot.y >= bots[_i][1] - 15 && shoot.y < bots[_i][1] + skok) {
        //console.log(shoot.x,shoot.y,bricks[i],score);
        score += 100;
        bots.splice(_i, 1);
        scoreElement.textContent = score; //displayArray.innerHTML = '<pre>' + bricks + "</pre>";

        if (bots.length === 0) {
          console.log('LEVEL FINISHED');
          endLevel();
        }

        console.log("bot trafiony");
      } // else{
      //     //console.log("nie ma bota")
      //     }

    } //console.log("koniec")            

  } //console.log("koniec")

}