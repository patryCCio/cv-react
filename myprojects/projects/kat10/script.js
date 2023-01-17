let sizePS = 4;
let movesPS = 0;
let resultPS = 0;
let liczbyPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let licznyTargetPS = [];
let idNull;
let x=0;
let y=0;


function startPS(){
    document.getElementById("resultPS").innerHTML = resultPS;
    document.getElementById("movesPS").innerHTML = movesPS;
    fisherYeats();
    createFieldPS();
}

function fisherYeats(){
    let nowaTablica = liczbyPS;
    let c;
    for (let j, i=14; i>0; i--){
    j = Math.floor(Math.random()*(i+1));
    c = nowaTablica[j];
    nowaTablica[j]=nowaTablica[i];
    nowaTablica[i]=c;
    }
    liczbyPS = nowaTablica;
    liczbyPS[15] = 0;
    licznyTargetPS = liczbyPS;
   }

function createFieldPS (){
    let planszaPS = document.getElementById("fieldPS");
    planszaPS.innerHTML = "";
    let shufflePS = document.getElementById("shuffleButton");
    let newGamePS = document.getElementById("restartButton");
    let xdPS = 0;
    for (let i=0; i<sizePS; i++){
    let row = planszaPS.insertRow(i);
    for (let j=0; j<sizePS; j++){
        let cell = row.insertCell(j);
        cell.id = i + "." + j;
        if(liczbyPS[xdPS]==0){
            cell.innerHTML = "";
        }else{
            cell.innerHTML = liczbyPS[xdPS];
        }
        xdPS +=1;
    cell.onmouseenter = function(){
        paintFieldPS(i, j);
        checkTargetPS();   
        if(resultPS == 15){
            alert("Brawo! Wygrałeś!");
            location.reload();
        }
    }

    cell.onmouseleave = function(){
        document.getElementById(i+'.'+j).style.backgroundColor = "white";
    }
    cell.onclick = function(){
        swapPS(i, j, cell);
        checkTargetPS();
    }
    shufflePS.onclick = function(){
        liczbyPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        fisherYeats();
        createFieldPS();
    }
    newGamePS.onclick = function(){
        liczbyPS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        resultPS = 0;
        movesPS = 0;
	document.getElementById("resultPS").innerHTML = resultPS;
	document.getElementById("movesPS").innerHTML = movesPS;
        fisherYeats();
        createFieldPS();
    }

}
}
}

function changeFieldPS(cell, index, indexZero){
    let xdPS = 0;
    for (let i=0; i<sizePS; i++){
        for (let j=0; j<sizePS; j++){
        if(xdPS==indexZero){
            document.getElementById(i+'.'+j).innerHTML = licznyTargetPS[indexZero];
            movesPS++;
            document.getElementById("movesPS").innerHTML = movesPS;
        }   
        if(xdPS==index){
            document.getElementById(i+'.'+j).innerHTML = "";
        }
        xdPS +=1;
        }
    }
}

function checkTargetPS(i, j){
    for(let ii=0; ii<sizePS; ii++){
        for(let jj=0; jj<sizePS; jj++){
            if(document.getElementById(ii+'.'+jj).innerHTML==""){
                y = ii;
                x = jj;
            }
        }
    }
}

function checkResult(i, j){
    resultPS = 0;
    if(document.getElementById(0+'.'+0).innerHTML == 1){
        document.getElementById(0+'.'+0).style.backgroundColor = "lightyellow";
        resultPS++;
    }

    if(document.getElementById(0+'.'+1).innerHTML == 2){
        document.getElementById(0+'.'+1).style.backgroundColor = "lightyellow";
        resultPS++;
    }

    if(document.getElementById(0+'.'+2).innerHTML == 3){
        document.getElementById(0+'.'+2).style.backgroundColor = "lightyellow";
        resultPS++;
    }

    if(document.getElementById(0+'.'+3).innerHTML == 4){
        document.getElementById(0+'.'+3).style.backgroundColor = "lightyellow";
        resultPS++;
    }

    if(document.getElementById(1+'.'+0).innerHTML == 5){
        document.getElementById(1+'.'+0).style.backgroundColor = "lightyellow";
        resultPS++;
    }

    if(document.getElementById(1+'.'+1).innerHTML == 6){
        document.getElementById(1+'.'+1).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(1+'.'+2).innerHTML == 7){
        document.getElementById(1+'.'+2).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(1+'.'+3).innerHTML == 8){
        document.getElementById(1+'.'+3).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(2+'.'+0).innerHTML == 9){
        document.getElementById(2+'.'+0).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(2+'.'+1).innerHTML == 10){
        document.getElementById(2+'.'+1).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(2+'.'+2).innerHTML == 11){
        document.getElementById(2+'.'+2).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(2+'.'+3).innerHTML == 12){
        document.getElementById(2+'.'+3).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(3+'.'+0).innerHTML == 13){
        document.getElementById(3+'.'+0).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(3+'.'+1).innerHTML == 14){
        document.getElementById(3+'.'+1).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    if(document.getElementById(3+'.'+2).innerHTML == 15){
        document.getElementById(3+'.'+2).style.backgroundColor = "lightyellow";
        resultPS++;
    }
    document.getElementById("resultPS").innerHTML = resultPS;
}

function paintFieldPS(i, j){
    checkResult(i, j);
    if(document.getElementById(i+'.'+j).innerHTML != ""){
        document.getElementById(i+'.'+j).style.backgroundColor = "lightgray";
    }
}

function swapPS(i, j, cell){
    let targetPS;
    if((j==(x-1)||j==(x+1))&&(i==y)){
        targetPS = document.getElementById(i+'.'+j).innerHTML;
        checkTabPS(targetPS, cell);
    }
    if((i==(y-1)||i==(y+1))&&(j==x)){
        targetPS = document.getElementById(i+'.'+j).innerHTML;
        checkTabPS(targetPS, cell);
    }
}

function checkTabPS(targetPS, cell){
    console.log(liczbyPS);
    let index = 0;
    let indexZero = 0;
    
    while(licznyTargetPS[index]!=targetPS){
        index++;
    }
    while(licznyTargetPS[indexZero]!=0){
        indexZero++;
    }

    let helper1 = licznyTargetPS[index];
    let helper2 = licznyTargetPS[indexZero];

    licznyTargetPS[index] = helper2;
    licznyTargetPS[indexZero] = helper1;

    liczbyPS = licznyTargetPS;
    console.log(licznyTargetPS);

    changeFieldPS(cell, index, indexZero);

}




