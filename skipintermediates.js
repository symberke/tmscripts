// ==UserScript==
// @name         skip intermediates
// @namespace    http://your.homepage/
// @version      0.4
// @description  enter something useful
// @author       You
// @match        http://netdna-storage.com/steps/*
// @match        http://*.netdna-storage.com/step/*
// @match        *://netdna-storage.com/step/*
// @match        http://netdna-storage.com/f/*
// @match        http://gaybeeg.info/*
// @grant        unsafeWindow
// @require     http://code.jquery.com/jquery-2.1.4.min.js
// @downloadURL  https://raw.githubusercontent.com/symberke/tmscripts/master/skipintermediates.js
// @run-at document-start
// ==/UserScript==

var changed = 0; // script need to be edited with

window.addEventListener('beforescriptexecute', function(e) {
    
// 	if (e.target.src.search(/blockadblock\.js/) != -1) {
// 		e.preventDefault();
// 		e.stopPropagation();
// // 		append(NewScript1);
// 	}
    
    /*

    ///for inline script:
        if(e.target===document.getElementsByTagName("script")[0]){
            changed++;
            e.stopPropagation();
            e.preventDefault();
            //todo
        }
        //tips: you could also run a regex search for the e.target.innerHTML
        //if the position of the inline script is not fixed.

    ///when done, remove the listener:
	if(changed == 2) window.removeEventListener(e.type, arguments.callee, true);
    */
    
    e.stopPropagation();
    e.preventDefault();
    $(e.target).remove();
    $(".warning").hide();
    
    changed++;

}, true);


// function TryGetHref() {

//     this.stop = function() {
//         console.log("stopping");
//         clearInterval(this.interval);
//     };

//     this.check = function () {

//         if (typeof $ === 'function') {
//             $ = '';
//             /*
//             console.log('$ defined');
//             href_var = $( ".plan-footer-item" ).attr('href');

//             if ( typeof href_var !== 'undefined' ) {
//                 console.log(href_var);
//                 this.href = href_var;
//             } else if (new Date().getTime() - this.startTime < 1000) {
//                 setTimeout(this.check.apply(this), 1);
//             }
//             */
//         }
//     };

//     this.start = function() {
//         console.log("TryGetHref starting");
//         this.startTime = new Date().getTime();
//         interval = setTimeout(this.check.apply(this), 1);
//     };
// }

// tgh = new TryGetHref();
// tgh.start();

setInterval( function () {

    button1 = document.getElementsByClassName("download-button");

    console.log(button1);

    if (button1.length > 0) {
        url = button1[0].href;
        matches = url.match(/=(.*)/)

        if (matches)
            document.location = matches[1];
        else document.location.href = button1[0].href;
    }

    console.log("here");

    button2 = document.getElementsByClassName("btn");

    console.log(button2)
    console.log(button2.length);

    if (button2) {
        url = button2[0].href;
        matches = url.match(/=(.*)/)

        console.log("here2");

        if (matches)
            document.location = matches[1];
        // else button[0].click();
        else document.location.href = url;
    }

    // locked_buttons = document.getElementsByClassName("button locked");
    // if (locked_buttons.length == 1) {
    //     document.location = locked_buttons[0].getAttribute("data-href");
    // }
}, 1000);
