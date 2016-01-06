// ==UserScript==
// @name         shortest 
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        sh.st/*
// @grant        none
// @downloadurl  https://raw.githubusercontent.com/symberke/tmscripts/master/shortest.js
// ==/UserScript==

function try_redirect() {
    // check if the button is visible
    btn = document.getElementsByClassName("skip-btn")[0]
    name = btn.className
    
    if (name.indexOf("show") > 0)
        app.skipClickNotify.redirectToTargetUrl()
}

setInterval(try_redirect, 1000);

//oldSetInterval = setInterval;

//setInterval = function(a,b) { oldSetInterval(a,b/1e3) };

// app = {};

app.window.isVisible = function() { return true; }

/*
app.countdown.init2 = app.init;
app.countdown.init = function (a, b, c) { app.init2(a,b,c) };

app.countdown.start2 = app.countdown.start;
app.countdown.start = function () { app.countdown.start2() };
*/

app.countdown.start()
