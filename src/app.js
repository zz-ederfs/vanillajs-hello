/* eslint-disable */
import "./style.css";
import "./assets/img/4geeks.ico";

var who = ["The dog", "My grandma", "His turtle", "My bird"];
var action = ["ate", "peed", "crushed", "broke"];
var what = ["my homework", "the keys", "the car"];
var when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

var randomNumber = 0;
var randomWho = "";
var randomAction = "";
var randomWhat = "";
var randomWhen = "";

window.onload = function() {
  //write your code here

  let newExcuse = buildExcuse();

  document.getElementById("excuse").innerHTML = newExcuse;
  document.getElementById("excuse").style.visibility = "visible";

  //console.log("Hello Rigo from the console!");
};

function buildExcuse() {
  randomNumber = Math.floor(Math.random() * 4);
  randomWho = who[randomNumber];
  randomNumber = Math.floor(Math.random() * 4);
  randomAction = action[randomNumber];
  randomNumber = Math.floor(Math.random() * 3);
  randomWhat = what[randomNumber];
  randomNumber = Math.floor(Math.random() * 5);
  randomWhen = when[randomNumber];

  return randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;
}
