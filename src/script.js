import "./style.css";
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'

const box = document.querySelectorAll(".box");
const gameResult = document.querySelector(".game-result");

// const gameboard = document.querySelector(".gameboard");
// const img1 = document.querySelector(".img1");
const restartBtn = document.querySelector(".restart");
const players = document.querySelector(".players");

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

// const textO = "O";
// const textX = "X";
let counter = 0;
let playing = true;

box.forEach((b, e) => b.addEventListener("click", createItem));
function createItem(e) {
  if (e.target.innerHTML) {
    return;
  }
  if (playing) {
    counter++;
    if (counter % 2 === 0) {
      e.target.innerHTML = "<span  class='textX'>X</span>";
      player1.classList.add("activePlayer");
      player2.classList.remove("activePlayer");
    } else {
      e.target.innerHTML = "<span class='textO' >O</span>";
      player1.classList.remove("activePlayer");
      player2.classList.add("activePlayer");
    }

    winner(e);
  }
}
let b1, b2, b3, b4, b5, b6, b7, b8, b9;
b1 = document.getElementById("b0");
b2 = document.getElementById("b1");
b3 = document.getElementById("b2");
b4 = document.getElementById("b3");
b5 = document.getElementById("b4");
b6 = document.getElementById("b5");
b7 = document.getElementById("b6");
b8 = document.getElementById("b7");
b9 = document.getElementById("b8");

let winPos = [
  [b1, b2, b3],
  [b4, b5, b6],
  [b7, b8, b9],
  [b1, b4, b7],
  [b2, b5, b8],
  [b3, b6, b9],
  [b1, b5, b9],
  [b3, b5, b7],
];

function winner(e) {
  for (let i = 0; i < winPos.length; i++) {
    if (
      b1.textContent !== "" &&
      b2.textContent !== "" &&
      b3.textContent !== "" &&
      b4.textContent !== "" &&
      b5.textContent !== "" &&
      b6.textContent !== "" &&
      b7.textContent !== "" &&
      b8.textContent !== "" &&
      b9.textContent !== ""
    ) {
      players.classList.add("hidden");
      gameResult.classList.remove("hidden");
      gameResult.innerHTML = "Draw..!";
      break;
    }
    let option = winPos[i];
    let [a, b, c] = option;

    if (a.textContent == "" || b.texbtContent == "" || c.textContent == "") {
      continue;
    }

    if (a.textContent == b.textContent && b.textContent == c.textContent) {
      playing = false;
      players.classList.add("hidden");
      gameResult.classList.remove("hidden");
      gameResult.innerHTML = `${a.textContent} - Win The Game !`;
      a.style.backgroundColor = "#ace7ef";
      b.style.backgroundColor = "#ace7ef";
      c.style.backgroundColor = "#ace7ef";

      break;
    }
  }
}

restartBtn.addEventListener("click", restartHandler);
function restartHandler() {
  location.reload();
}
