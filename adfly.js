// ==UserScript==
// @name         adfly skip
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://adf.ly/*
// @grant        none
// ==/UserScript==

var check_button = (function() {
    
    clicked = 0;
    
    return function() {

        button = document.getElementById("skip_button")

        if (!clicked && button && button.href) {
            document.location = button.href;
            clicked = 1;
        }
        
        cont_link = document.getElementById("continue");
        
        if (!clicked && cont_link) {
            document.location.href = cont_link.children[0].children[0].href;
        }
    }
})();

setInterval(check_button, 500);
