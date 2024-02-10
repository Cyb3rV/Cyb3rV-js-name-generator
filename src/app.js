/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const pronoun = ["the", "our"];
const adj = ["great", "big"];
const noun = ["jogger", "racoon"];
let domains = [];

window.onload = function() {
  //write your code here
  for (let i of pronoun)
    for (let j of adj)
      for (let k of noun) {
        domains.push(i + j + k + ".com");
      }

  document.querySelector("div").innerHTML = domains.join("<br/>");
};
