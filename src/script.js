import "./style.css";
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'

const box = document.querySelectorAll(".box");

const gameboard = document.querySelector(".gameboard");
const img1 = document.querySelector(".img1");

let itemsArray = [];

const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

const textO = "O";
const textX = "X";
// let currentPlayer = textX;
let counter = 0;

box.forEach((b) => b.addEventListener("click", createItem));
function createItem(e) {
  counter++;
  if (counter % 2 === 0) {
    e.target.innerHTML = textX;
    player1.classList.add("current-activePlayer");
    player2.classList.remove("current-activePlayer");
  } else {
    e.target.innerHTML = textO;
    player1.classList.remove("current-activePlayer");
    player2.classList.add("current-activePlayer");
  }
  localStorage.setItem("items", JSON.stringify(itemsArray));
  itemsArray.push(e.target.textContent);

  // location.reload();
  // console.log(itemsArray);
}
