const div = document.querySelector('div');

let divX = 150;
let divY = 50;
div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let drawActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) =>{
    div.style.backgroundColor = 'gray';
    drawActive = !drawActive;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
})

div.addEventListener('mousemove', (e) =>{
    if(drawActive){
        divX = e.clientX;
        divY = e.clientY;

        div.style.left = `${divX - insertDivX}px`;
        div.style.top = `${divY - insertDivY}px`;
    }
})

div.addEventListener('mouseup', () =>{
    div.style.backgroundColor = 'black';
    drawActive = !drawActive;
})