

function calc(){
    let x;
    let y;
    x = Number(document.getElementById("number1").value);  
    y = Number(document.getElementById("number2").value);  
     let z = document.getElementById("Operator").value;  
     let output=0;

 if(z=="*"){
         output = x * y;
    }else if(z=="/"){
         output = x / y;
    }else if(z=="+"){
         output = x + y;
    }else if(z=="-"){
        output = x - y;
    }else if(z=="%"){
        output = x % y;
    }
    console.log(output);
    alert(output);
}

   

