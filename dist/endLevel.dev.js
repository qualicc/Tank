"use strict";

function endLevel() {
  clearInterval(updateInterval); //wywołąnie ekranu końcowego

  var person = prompt('Your score is ' + score + '!!! ' + 'Enter your name:');

  if (person !== null) {
    //sendScore(game,person,score);
    console.log("wyślij", person);
  }

  sendScore(gameName, person, score);
}