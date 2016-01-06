// ==UserScript==
// @name         ouo.io skip
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://ouo.io/*
// @grant        none
// ==/UserScript==*/

(function() {
    btn = document.getElementsByClassName("btn");
    if (btn.length > 0) setTimeout( function() { btn[0].click() }, Math.round(500*Math.random() + 250));
})();