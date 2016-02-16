// ==UserScript==
// @name         shorte.st skip
// @namespace    http://your.homepage/
// @version      0.2
// @description  enter something useful
// @author       You
// @match        sh.st/*
// @grant        none
// @downloadurl  https://raw.githubusercontent.com/symberke/tmscripts/master/shortest.js
// ==/UserScript==

function go_to_destination(x) {
    app.advertisementRedirectBlocker.stopBlocking();
    console.log(x);
    document.location = x.destinationUrl;
}

function try_redirect() {
    
    req = reqwest({
        url: "/shortest-url/end-adsession", 
        method: "post",
        timeout: 10000, 
        type: "jsonp", 
        data: {adSessionId: app.options.adSessionNotifier.sessionId, adbd: 0}, 
        success: go_to_destination
    });
    
    console.log(req);
}

setInterval(try_redirect, 1000);

app.intermediatePage.adsBlockerDetected = false;

app.window.isVisible = function() { return true; }

app.countdown.start()
