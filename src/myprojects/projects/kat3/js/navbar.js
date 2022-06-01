const navbar = document.querySelector('.navbar');
const allSection = [...document.querySelectorAll('.header-home, main section')];
const allLi = [...document.querySelectorAll('.nav-ul li')];
const header = document.querySelector('.header-home');
const burger = document.querySelector('.burger-circle');

const allDatasetHref = [...document.querySelectorAll('[data-href]')];
let sizeSection = [];
let isMobile;
let animationIsActive = false;

window.addEventListener('resize', init);
window.addEventListener('scroll', init);

init();

function init(){
    checkMobile();
    checkSection();
    checkLi();
}

function addActiveToNavbar(){
    if(!isMobile){
        if(this.window.scrollY >= 100){
            navbar.classList.add('active');
        }else{
            navbar.classList.remove('active');
        }
    }
}

function checkSection(){
    sizeSection = [];
    allSection.forEach(element => {
        sizeSection.push(element.offsetTop);
    })
}

function checkLi(){
    let y=0;
    for (let x=0; x<sizeSection.length; x++) {
        if(window.scrollY >= sizeSection[x]){
            y++;
        }
    }

    allLi.forEach((element, index) => {
        if(index === y-1){
            element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    })

    addActiveToNavbar();
}

function checkMobile(){
    if (window.innerWidth > 1024)isMobile = false;
    else isMobile = true;

    if(isMobile){
        burger.style.display = 'block';
        burger.classList.remove('active');
        navbar.classList.remove('burger');
    }else{
        burger.style.display = 'none';
        navbar.classList.remove('burger');
    }
}

//burger active
burger.addEventListener('click', function(){
    navbar.classList.remove('active');
    navbar.classList.toggle('burger');
    burger.classList.toggle('active');
})

//animation scroll

allDatasetHref.forEach(element => {
    element.addEventListener('click', function(){
        if(isMobile){
            navbar.classList.toggle('burger');
            burger.classList.toggle('active');
        }

        const text = element.dataset.href;
        let valueY;
        let z = 0;
        allSection.forEach((element, index) => {
        if(text === element.id){
            z = index;
        }
        })
        valueY = sizeSection[z];

        let actualValueY = window.scrollY;
        if(actualValueY === valueY)return null;

        if(animationIsActive){
            return console.log("Animacja trwa!");
        }

        animationIsActive = true;

        let frequency = 10;
        let time = 2000; //2 sec
        let howTurns = time/frequency;
        let part;
        let x = 0;
        let speed = 12;


        actualValueY > valueY ? part = actualValueY - valueY : part = valueY - actualValueY;
        part /= time;
        part *= frequency; 

        const timeout = setInterval(function(){
            if(actualValueY > valueY){
                if(x <= howTurns / 4){
                    actualValueY = actualValueY - (speed*part);
                    x += speed;
                }else if (x > howTurns / 4 && x <= howTurns / 2){
                    actualValueY = actualValueY - ((speed/4)*part);
                    x += speed/4;
                }else if (x > howTurns / 2 && x <= howTurns - ( howTurns / 4)){
                    actualValueY = actualValueY - ((speed/6)*part);
                    x += speed/6;
                }else{
                    actualValueY -= part;
                    x++;
                }
            }else{
                if(x <= howTurns / 8){
                    actualValueY = actualValueY + (speed*part);
                    x += speed;
                }else if (x > howTurns / 8 && x <= howTurns / 2){
                    actualValueY = actualValueY + ((speed/4)*part);
                    x += speed/4;
                }else if (x > howTurns / 2 && x <= howTurns - ( howTurns / 4)){
                    actualValueY = actualValueY + ((speed/6)*part);
                    x += speed/6;
                }else{
                    actualValueY += part;
                    x++;
                }
            }
            scrollTo(0, actualValueY);
            if(x >= howTurns){
                actualValueY = valueY;
                scrollTo(0, actualValueY);
                animationIsActive = false;
                clearInterval(timeout);
            }
        }, frequency)
        
    })
})