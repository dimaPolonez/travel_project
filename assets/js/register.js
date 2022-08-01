const block = document.querySelector(".popup-block").style;

const innerHeader = document.querySelector(".popup-header");
const innerQuestion = document.querySelector(".question");

const innerSign = document.querySelector(".sign-alert-span");

const hideFb = document.querySelector(".signFb").style;
const hideGoogle = document.querySelector(".signGoogle").style;
const hideWrap = document.querySelector(".wrap-hr").style;
const hideHref = document.querySelector(".href-form-1").style;

const go = document.querySelector(".href-form-2");
const back = document.querySelector(".href-form-back");

function register() {
    block.height = 436 + 'px'; 
    innerHeader.style.top = 5 + 'px'; 
    innerHeader.innerHTML = 'Create account';
    hideFb.display = 'none';
    hideGoogle.display = 'none';
    hideWrap.display = 'none';
    hideHref.display = 'none';
    innerSign.innerHTML = 'Sign Up';
    innerQuestion.innerHTML = 'Already have an account? ';
    go.style.display='none';
    back.style.visibility = 'visible';
}

function backForm() {
    setTimeout(function(){
        location.reload();
    }, 100);
}

go.addEventListener("click", register);

back.addEventListener("click", backForm);


