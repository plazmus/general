// ==UserScript==
// @name        Quizlet - hide answers
// @author      Marcin Wyrembak
// @description Hide/show answers buttons
// @include     http*://quizlet.com/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

function ButtonClickShow () {
    $(".SetPageTerm-largeSide").show();
}
function ButtonClickHide () {
    $(".SetPageTerm-largeSide").hide();
}

addGlobalStyle('#buttonContainer {position:fixed; bottom:5px; left:50%; line-height:0; background:#ff4848 ;margin:5px; z-index:1100; padding:4px 10px;} #showAnswer,#hideAnswer {cursor: pointer;}');

var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="showAnswer" type="button">' + 'show answers</button><button id="hideAnswer" type="button">' + 'hide answers</button>';
zNode.setAttribute ('id', 'buttonContainer');
document.body.appendChild (zNode);

//--- Activate buttons
document.getElementById ("showAnswer").addEventListener (
    "click", ButtonClickShow, false
);
document.getElementById ("hideAnswer").addEventListener (
    "click", ButtonClickHide, false
);
