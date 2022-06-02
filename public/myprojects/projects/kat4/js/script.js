const rate1 = document.querySelectorAll('.rate1');
const rate2 = document.querySelectorAll('.rate2');
const rate3 = document.querySelectorAll('.rate3');
const rate4 = document.querySelectorAll('.rate4');

const rateArea1 = document.querySelector('.stars[data-key="1"]');
const rateArea2 = document.querySelector('.stars[data-key="2"]');
const rateArea3 = document.querySelector('.stars[data-key="3"]');
const rateArea4 = document.querySelector('.stars[data-key="4"]');

let starRating = [0, 0, 0, 0];


let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;

rateArea1.addEventListener('mouseleave', function () {
    if (!click1) {
        for (let x = 0; x < rate1.length; x++) {
            rate1[x].classList.remove('active');
        }
    }
})

rate1.forEach((element, index) => {

    element.addEventListener('mouseenter', function () {
        if (!click1) {
            let x = 0;
            while (x < rate1.length) {
                if (x <= index) rate1[x].classList.add('active');
                else rate1[x].classList.remove('active');
                x++;
            }
        }
    })

    element.addEventListener('click', function () {
        click1 = true;
        let x = 0;
        while (x < rate1.length) {
            if (x <= index) rate1[x].classList.add('active');
            else rate1[x].classList.remove('active');
            x++;
        }
        starRating[0] = index + 1;
    })
})

rateArea2.addEventListener('mouseleave', function () {
    if (!click2) {
        for (let x = 0; x < rate2.length; x++) {
            rate2[x].classList.remove('active');
        }
    }
})

rate2.forEach((element, index) => {

    element.addEventListener('mouseenter', function () {
        if (!click2) {
            let x = 0;
            while (x < rate2.length) {
                if (x <= index) rate2[x].classList.add('active');
                else rate2[x].classList.remove('active');
                x++;
            }
        }
    })

    element.addEventListener('click', function () {
        click2 = true;
        let x = 0;
        while (x < rate2.length) {
            if (x <= index) rate2[x].classList.add('active');
            else rate2[x].classList.remove('active');
            x++;
        }
        starRating[1] = index + 1;
    })
})

rateArea3.addEventListener('mouseleave', function () {
    if (!click3) {
        for (let x = 0; x < rate3.length; x++) {
            rate3[x].classList.remove('active');
        }
    }
})

rate3.forEach((element, index) => {

    element.addEventListener('mouseenter', function () {
        if (!click3) {
            let x = 0;
            while (x < rate3.length) {
                if (x <= index) rate3[x].classList.add('active');
                else rate3[x].classList.remove('active');
                x++;
            }
        }
    })

    element.addEventListener('click', function () {
        click3 = true;
        let x = 0;
        while (x < rate3.length) {
            if (x <= index) rate3[x].classList.add('active');
            else rate3[x].classList.remove('active');
            x++;
        }
        starRating[2] = index + 1;
    })
})

rateArea4.addEventListener('mouseleave', function () {
    if (!click4) {
        for (let x = 0; x < rate4.length; x++) {
            rate4[x].classList.remove('active');
        }
    }
})

rate4.forEach((element, index) => {

    element.addEventListener('mouseenter', function () {
        if (!click4) {
            let x = 0;
            while (x < rate4.length) {
                if (x <= index) rate4[x].classList.add('active');
                else rate4[x].classList.remove('active');
                x++;
            }
        }
    })

    element.addEventListener('click', function () {
        click4 = true;
        let x = 0;
        while (x < rate4.length) {
            if (x <= index) rate4[x].classList.add('active');
            else rate4[x].classList.remove('active');
            x++;
        }
        starRating[3] = index + 1;
    })
})
