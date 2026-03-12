let num1=document.getElementById("num1");
let num2=document.getElementById("num2");

let result=document.getElementById("result");


let buttons=document.querySelectorAll("button");
buttons.forEach(btn => {
    btn.onclick=function(){
        let a=Number(num1.value);
        let b=Number(num2.value);

        if(btn.id==="toplama"){
            result.value=a+b;
        }
        if(btn.id==="cixma"){
            result.value=a-b;
        }
        if(btn.id==="vurma"){
            result.value=a*b;
        }
        if(btn.id==="bolme"){
            result.value=a/b;
        }
    }
    
});