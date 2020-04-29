//KirkeJS

//Variables
var Kirke_Links;
var Kirke_Objects;

//Ready Function
document.addEventListener('DOMContentLoaded', function readyFunction() {
    getKirkeClickEvents();
    getKirkeScrollEvents();
    KirkeAnimateScroll();
    document.addEventListener("scroll", KirkeAnimateScroll);
});

function KirkeAnimateClickAnimate(target, rem, add){
    target.classList.remove(rem);
    if (add !== undefined){
        setTimeout(
            target.classList.add(add)
            , 100);
    }
}

function KirkeAnimateClick(ID){
    Kirke_Element = document.getElementById(Kirke_Links[ID].dataset.target);
    if(Kirke_Links[ID].dataset.MultiAnim == "true"){
        KirkeAnimateClickAnimate(Kirke_Element, Kirke_Links[ID].dataset.AnimIn, Kirke_Links[ID].dataset.AnimIn);
    } else{
        if (Kirke_Links[ID].dataset.InOut = "In"){
            KirkeAnimateClickAnimate(Kirke_Element, Kirke_Links[ID].dataset.AnimIn, Kirke_Links[ID].dataset.AnimOut);
            Kirke_Links[ID].dataset.InOut = "Out"
        } else{
            KirkeAnimateClickAnimate(Kirke_Element, Kirke_Links[ID].dataset.AnimOut, Kirke_Links[ID].dataset.AnimIn);
            Kirke_Links[ID].dataset.InOut = "In"
        }
    }
}

function getKirkeClickEvents(){
    Kirke_Links = document.getElementsByClassName("Kirke_Link");
    for (var i = 0; i < Kirke_Links.length; i++) {
        Kirke_Links[i].addEventListener('click', event => {
            KirkeAnimateClick(i);
        }, false);
    }
}

function getKirkeScrollEvents(){
    Kirke_Objects = document.getElementsByClassName("Kirke_Object");
}

function isKirkeObjectInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function KirkeAnimateScroll() {
    for (var i = 0; i < Kirke_Objects.length; i++) {
        if (isKirkeObjectInViewport(Kirke_Objects[i])) {
            if(Kirke_Objects[i].dataset.InOut == "out") {
                Kirke_Objects[i].classList.add(Kirke_Objects[i].dataset.AnimIn);
            }        
        } else {
            if (Kirke_Objects[i].dataset.InOut == "in") {
                Kirke_Objects[i].classList.remove(Kirke_Objects[i].dataset.AnimIn);
            } 
        }
    }
}