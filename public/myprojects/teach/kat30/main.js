const addButton = document.querySelector('.add');
const cleanButton = document.querySelector('.clean');

const showAdvice = document.querySelector('.showAdvice');
const showOptions = document.querySelector('.showOptions');

const input = document.querySelector('input');
const h1 = document.querySelector('h1');

let advices = [];

addButton.addEventListener('click', (e) => {
    let isReply = false; 
    e.preventDefault();
    if(input.value === ''){
        alert("Musisz coś wpisać!");
    }
    advices.forEach((advice, index) => {
        if(advice === input.value){
            alert("Nie możesz dodać tego samego elementu!");
            isReply = true;
        }
    })
    if(!isReply){
        if(input.value !== ''){
            advices.push(input.value);
        }
    }
    input.value = '';
})

cleanButton.addEventListener('click', (e) => {
    e.preventDefault();
    advices.length = 0;
    h1.textContent = '';
})

showAdvice.addEventListener('click', (e) => {
    
    if(advices.length === 0){
        alert("Brak rad!");
        return;
    }
    const randomNumber = Math.floor(Math.random()*advices.length);
    h1.textContent = advices[randomNumber];
})

showOptions.addEventListener('click', (e) => {
    e.preventDefault();
    let text = '';

    if(advices.length === 0){
        alert("Brak rad!");
        return;
    }else{
        advices.forEach((advice, index) => {
            text += advice + ', ';
        })
        h1.textContent = text;    
    }  
    
})