//-------------------------------------------------- //
/*
scaling.js - 
Applies scaling to the canvas to dynamically adjust to screen resolutions.
*/
//---------------------------------------------------//

//cacheing setting globals for use ingame
var GLOBAL_SCALE = 1;
var GLOBAL_APPWIDTH = 1;
var GLOBAL_APPHEIGHT = 1;

function resize(eventArgs) {
    'use strict';
    var base = { width: 768, height: 1366 }; //base resolution scales
    var docelement = document.documentElement;

    var appWidth = docelement.offsetWidth;
    

    GLOBAL_APPWIDTH = appWidth;
    var appHeight = docelement.offsetHeight;
    GLOBAL_APPHEIGHT = appHeight;

    var newHeight = appHeight;
    var newWidth = appWidth;
    var scale = 1;

    var canvas = document.getElementById("game_canvas");

    if (!canvas) {
        return false;
    };


    canvas.style.height = appHeight + "px";

    scale = appHeight / base.height;
    newWidth = base.width * scale;
    canvas.style.width = newWidth + "px";

    //resizes the container object to handle dom elements
    var container = document.getElementById("container");
    container.style.height = newHeight + "px";
    container.style.width = newWidth + "px";

    container.style.posLeft = (appWidth - newWidth) / 2;//posLeft for metro/IE
    container.style.left = ((appWidth - newWidth) / 2) + 'px'; //left for non-metro
    container.style.posTop = 0; //posTop for metro/IE
    container.style.top = 0; //Top for non-metro
    GLOBAL_SCALE = scale;


};