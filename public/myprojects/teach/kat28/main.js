/* Gotowy projekt - sprzawdz działanie strzałek i zrób podobnie. http://websamuraj.pl/examples/js/projekt4-zad2/ */

let red = 100;
let green = 100;
let blue = 100;
let alpha = 100;

document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha/100})`;

const changeColor = (e) => {
  console.log(e.keyCode, e.which);

  let option = e.keyCode;

  switch(option){
    case 38:{
      if(alpha>0){
        console.log('wykonano!');
        alpha-=2;
        document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha/100})`;
      }
    }
    break;
    case 40:{
      if(alpha<100){
        console.log('wykonano!');
        alpha+=2;
        document.body.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha/100})`;
      }
    }
    break;
  }
}

window.addEventListener('keydown', changeColor)