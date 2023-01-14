const navBar = document.querySelector('.nav-bar');
const menuButton = document.querySelector('.burger-wrapper');
const navWrapper =  document.querySelector('.nav-wrapper');
const wrapper = document.querySelector('.wrapper');
const ulList = document.querySelectorAll('.nav-ul li');
const miniSliderSection2 = document.querySelectorAll('.mini-slider-container');

let ulListSpan;
let spanArrowArray = [];

function init(){
    addArrow();
    ulListSpan = [...document.querySelectorAll('.nav-ul .liHasChild span.arrow')];
    document.querySelectorAll('.nav-ul .liHasChild span.arrow, .nav-ul .liHasChild span.arrow2').forEach(element => {
        element.addEventListener('click', function () {
            element.parentElement.classList.toggle('active');
        })
    })
}

function lookAtNav(){
    
}

function addActiveToNav(){
    const heightScroll = window.scrollY;

    if(heightScroll > 100){
        navBar.classList.add('active');
    }else navBar.classList.remove('active');

    lookAtNav(heightScroll);

}
window.addEventListener('scroll', addActiveToNav);


function addActive(){
    menuButton.classList.toggle('active');
    navWrapper.classList.toggle('active');
    wrapper.classList.toggle('active');
}
menuButton.addEventListener('click', addActive);


function addArrow(){
    for(let x=0; x<ulList.length; x++){
        if(ulList[x].hasAttribute('data-innerUl')){
            const spanArrow = document.createElement(`span`);
            const spanArrow2 = document.createElement(`span`);
            spanArrow.classList.add('arrow');
            spanArrow2.classList.add('arrow2');
            ulList[x].appendChild(spanArrow);
            ulList[x].appendChild(spanArrow2)
            spanArrowArray.push(spanArrow);
            spanArrowArray.push(spanArrow2);
        }
    }
}

miniSliderSection2.forEach(element => {
    element.addEventListener('mouseenter', function(e) {
        element.children.item(0).classList.add('active');
    })
})

miniSliderSection2.forEach(element => {
    element.addEventListener('mouseleave', function(e) {
        element.children.item(0).classList.remove('active');
    })
})