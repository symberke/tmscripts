// ==UserScript==
// @name         skip intermediates
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://netdna-storage.com/steps/*
// @match        http://*.netdna-storage.com/step/*
// @grant        none
// @downloadurl  https://raw.githubusercontent.com/symberke/tmscripts/master/skipintermediates.js
// ==/UserScript==

button = document.getElementsByClassName("download-button");

if (button.length > 0) {
    url = button[0].href;
    matches = url.match(/=(.*)/)
    
    if (matches)
        document.location = matches[1];
    else button[0].click();
}


button = document.getElementsByClassName("btn");


if (button.length > 0) {
    url = button[0].href;
    matches = url.match(/=(.*)/)
    
    if (matches)
        document.location = matches[1];
    else button[0].click();
}
