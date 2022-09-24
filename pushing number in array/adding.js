let e=[];
function fun(){
let f=document.getElementById("disp");
let result=document.createElement("h2");
f.appendChild(result);
//
//
let a = document.getElementById("num").value;
let b= a.toString();
e.push(b);
result.innerHTML="["+e+"]";
console.log(e);
}

