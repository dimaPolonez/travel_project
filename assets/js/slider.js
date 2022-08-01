const labelRight = document.querySelector(".label-right");

const labelLeft = document.querySelector(".label-left");
const labelCenter = document.querySelector(".label-center");


const Left = document.querySelector(".slider-left");
const Center = document.querySelector(".slider-center");
const Right = document.querySelector(".slider-right");
const HideL = document.querySelector(".slider-hide-l");
const HideR = document.querySelector(".slider-hide-r");

const arrLeft = document.querySelector(".arrow-left");
const arrRight = document.querySelector(".arrow-right");

const slider = document.querySelector(".slider");
const sliderWidth = slider.offsetWidth;

const MoveSlide = slider.offsetWidth / 5;

let active = 0;

function moveSlide(move) {

    if (sliderWidth === 4240) {

        if (move === 'moveCenter') {
            slider.style.right = 0 + 'px';
            slider.style.left = 0 + 'px';
            labelCenter.click();
        }

        if (move === 'moveRight') {
            slider.style.right = MoveSlide + 'px';
            slider.style.left = -MoveSlide + 'px';
            labelRight.click();
        }

        if (move === 'moveLeft') {
            slider.style.right = -MoveSlide + 'px';
            slider.style.left = MoveSlide + 'px';
            labelLeft.click();
        }

    } else if (sliderWidth === 1908) {

        if (move === 'moveCenter') {
            slider.style.right = 0 + 'px';
            slider.style.left = 0 + 'px';
            labelCenter.click();
        }

        if (move === 'moveRight') {
            slider.style.right = MoveSlide + 'px';
            slider.style.left = -MoveSlide + 'px';
            labelRight.click();
        }

        if (move === 'moveLeft') {
            slider.style.right = -MoveSlide + 'px';
            slider.style.left = MoveSlide + 'px';
            labelLeft.click();
        }

        if (move === 'moveLeftArr') {
            active--;
            labelLeft.click();
            if(active === 0){
                labelCenter.click();
            } else if (active < -1){
                labelRight.click(); 
                active = 1;
            }
        }

        if (move === 'moveRightArr') {

            active++;
            labelRight.click();
            if(active === 0){
                labelCenter.click();
            } else if (active > 1){
                labelLeft.click();
                active = -1;
            }
        }
    }


}

function moveLeft() {
    moveSlide('moveLeft');
}

function moveLeftArr() {
    moveSlide('moveLeftArr');
}

function moveRight() {
    moveSlide('moveRight');
}

function moveRightArr() {
    moveSlide('moveRightArr');
}

function moveCenter() {
    moveSlide('moveCenter');
}

labelCenter.addEventListener("click", moveCenter);
labelRight.addEventListener("click", moveRight);
labelLeft.addEventListener("click", moveLeft);

Center.addEventListener("click", moveCenter);
Left.addEventListener("click", moveLeft);
HideR.addEventListener("click", moveLeft);
Right.addEventListener("click", moveRight);
HideL.addEventListener("click", moveRight);

arrLeft.addEventListener("click", moveLeftArr);
arrRight.addEventListener("click", moveRightArr);










