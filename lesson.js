
var x = document.getElementById('nav').classList;


function read(n){
document.images["render"].src = n+'.png';
x.toggle('show');
 document.getElementById("course").innerHTML = document.images["render"].src
console.log(document.images["render"].src)
}