
document.getElementById('display').value = 0;

let x=0;
let y=0;
let op;

function fn0(){
    let previous=document.getElementById('display').value;
    document.getElementById('display').value += 0;
}
function fn2(){
    document.getElementById('display').value += 2;
}
function fn3(){
    document.getElementById('display').value += 3;
}
function fn4(){
    document.getElementById('display').value += 4;
}
function fn5(){
    document.getElementById('display').value += 5;
}
function fn6(){
    document.getElementById('display').value += 6;
}
function fn7(){
    document.getElementById('display').value += 7;
}
function fn8(){
    document.getElementById('display').value += 8;
}
function fn9(){
    document.getElementById('display').value += 9;
}
function fn1(){
    document.getElementById('display').value += 1;
}
function fnSB(){
    x = Number(document.getElementById('display').value);
    document.getElementById('display').value=0;
    op="1";
}
function fnML(){
    x = Number(document.getElementById('display').value);
    document.getElementById('display').value=0;
    op="2";
}   
function fnDV(){
    x = Number(document.getElementById('display').value);
    document.getElementById('display').value=0;
    op="3";
}  
function fnAD(){
    x = Number(document.getElementById('display').value);
    document.getElementById('display').value=0;
    op="4";
}
function fnEQ(){
    y= Number(document.getElementById('display').value);
    let result=0;
    switch (op){
        case "1":result = x - y;break;
        case "2":result = x * y;break;
        case "3":result = x / y;break;
        case "4":result = x + y;break;
    }
    document.getElementById('display').value = result;
    
}
function fnAc(){
    document.getElementById('display').value=0;
}



   

