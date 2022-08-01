const bgMenu = document.querySelector(".burger-menu").style;

const bgClose = document.querySelector(".bg-menu-close");

const menuClick = document.querySelector(".bg-menu-button");

const aClose = document.querySelector(".login-popup");
const popup = document.querySelector(".login-popup-bg");
const overStyleBg = document.querySelector(".popup-overlay").style;
const blockStyleBg = document.querySelector(".popup-block").style;



function bgMenuLeft() {
    bgMenu.left = 26.5 + '%'; 
    bgMenu.transition = 1.5 + 's'; 
}

function bgMenuClose() {
    bgMenu.left = 126.5 + '%';  
    bgMenu.transition = 3 + 's'; 
}

function popupVis() {
    overStyleBg.visibility = 'visible';
    blockStyleBg.visibility = 'visible';
    blockStyleBg.top = 12 + '%';
    blockStyleBg.transition = 1 + 's'; 
}

function popupInvis() {
    blockStyleBg.top = -112 + '%';
    blockStyleBg.visibility = 'hidden';
    overStyleBg.visibility = 'hidden';
    blockStyleBg.transition = 1 + 's';
    setTimeout(function(){
        location.reload();
    }, 500);
}

menuClick.addEventListener("click", bgMenuLeft);

bgClose.addEventListener("click", bgMenuClose);

aClose.addEventListener("click", popupVis);

popup.addEventListener("click", popupVis);

document.querySelector(".popup-overlay").addEventListener("click", popupInvis);


window.addEventListener('mouseup', function(event) {
    if ((event.target != document.querySelector(".burger-menu"))) {
        bgMenuClose();
    }
 });


