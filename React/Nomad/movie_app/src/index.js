import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function run(){
  alert("Hello")
  ReactDOM.render(<App />, document.getElementById("Potato"));
  
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  run();
} else {
  window.addEventListener('DOMContentLoaded', run, false);
}