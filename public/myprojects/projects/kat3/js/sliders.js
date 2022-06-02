let allTeamSlider = [...document.querySelectorAll('[data-team]')];
const rightArrow = document.querySelector('.aboutus .right-arrow');
const leftArrow = document.querySelector('.aboutus .left-arrow');

let isGood;
let isMinThree;

init();

window.addEventListener('resize', init);

function init(){
    isMinThree = checkArray();

    if(isMinThree){
        rightArrow.style.display = 'flex';
        leftArrow.style.display = 'flex';
    }else{
        rightArrow.style.display = 'none';
        leftArrow.style.display = 'none';
    }

    if(this.window.innerWidth >= 1200)isGood = true;
    else isGood = false;
}

rightArrow.addEventListener('click', function(){

    let actual = document.querySelector(`[data-team="2"]`);
    let previous = document.querySelector(`[data-team="1"]`);
    let next = document.querySelector(`[data-team="3"]`);

    

    // let array = [];
    // allTeamSlider.forEach((element, index) => {
    //     let x=0;
    //     if(index+1 === allTeamSlider.length){
    //         x = 0;
    //     }else{
    //         x = index + 1;
    //     }
    //     const object = [element, x];
    //     array.push(object);
    // })

    
    // array.sort();
    // let objects = [];
    // for(let z=0; z<array.length; z++){
    //     objects.push(array[z][0]);
    // }

    // objects.map((element, index) => {
    //     element.dataset.team = index + 1;
    // });

    // document.querySelectorAll('[data-team]').forEach(element => {
    //     element.remove();
    // })

    // allTeamSlider = objects;

    // for(let z=0; z<objects.length; z++){
    //     document.querySelector('.aboutus-team-cards').appendChild(objects[z]);
    // }

})

leftArrow.addEventListener('click', function(){
    let array = [];

    for(let z=allTeamSlider.length-1; z>=0; z--){
        let x=allTeamSlider.length-1;
        if(z-1 === -1){
            x = allTeamSlider.length-1;
        }else{
            x = z - 1;
        }
    }
    allTeamSlider.forEach((element, index) => {
        let x=0;
        if(index+1 === allTeamSlider.length){
            x = 0;
        }else{
            x = index + 1;
        }
        const object = [element, x];
        array.push(object);
    })

    
    array.sort();
    let objects = [];
    for(let z=0; z<array.length; z++){
        objects.push(array[z][0]);
    }

    objects.map((element, index) => {
        element.dataset.team = index + 1;
    });

    document.querySelectorAll('[data-team]').forEach(element => {
        element.remove();
    })

    allTeamSlider = objects;

    for(let z=0; z<objects.length; z++){
        document.querySelector('.aboutus-team-cards').appendChild(objects[z]);
    }
})

function teamSlider(){
    
}

function checkArray(){
    if(allTeamSlider.length >= 3)return true;
    return false;
}
