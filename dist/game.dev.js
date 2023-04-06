"use strict";

function game(what) {
  if (what.id === "test") {
    gameMode = lvl1;
    start();
  } else if (what.id === "normal") {
    gameMode = test;
    start();
  }
}