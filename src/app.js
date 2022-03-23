/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let who = ["My cat", "Someone passing by", "My girlfriend", "A zombie"];
let action = ["peed on", "lost", "burnt", "fucked up"];
let what = ["my house", "my homework", "my medication", "all my clothes"];
let when = [
  "this Morning.",
  "at midnight.",
  "while I was sleeping.",
  "as soon as I looked away."
];
function excuseGen() {
  var one = who[Math.floor((Math.random() * 10) / 4)];
  var two = action[Math.floor((Math.random() * 10) / 4)];
  var three = what[Math.floor((Math.random() * 10) / 4)];
  var four = when[Math.floor((Math.random() * 10) / 4)];

  document.getElementById("excuse").innerHTML =
    one + " " + two + " " + three + " " + four;
}
window.onload = excuseGen();
