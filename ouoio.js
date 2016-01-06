// ==UserScript==
// @name         ouo.io skip attempt
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://ouo.io/*
// @grant        none
// @downloadurl  https://raw.githubusercontent.com/symberke/tmscripts/master/ouoio.js
// ==/UserScript==

/*
btn = document.getElementsByClassName("btn")

// random number from 250 to 750
delay = Math.round(500 * Math.random() + 250);

if (btn.length > 0) {
    setTimeout( function(){ btn[0].click() }, delay);
}

*/

(function() {
    btn = document.getElementsByClassName("btn");
    if (btn.length > 0) setTimeout( function() { btn[0].click() }, Math.round(500*Math.random() + 250));
})();