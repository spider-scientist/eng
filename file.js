 window.onload = () =>
 {
   if(localStorage.lastlesson)
   document.images["render"].src = localStorage.lastlesson;
 }
  window.addEventListener('beforeunload',() => {
   var last = document.images["render"].src;
   localStorage.setItem("lastlesson",last);
 });
 function nav(){
    var x = document.getElementById('nav').classList;
    var y = document.getElementById('ml').classList;
     x.toggle('show');
     y.toggle('rot')
 }
 function info(){
    var x = document.getElementById('info').classList;
    var y = document.getElementById('mu').classList;
     x.toggle('show');
     y.toggle('rot')
 }
 function dnt(){document.images["render"].src = 'about.png';
 nav();
}
/*  setInterval(() =>{
    if(window.location.href != "https://spider-scientist.github.io/eng")
    document.body.innerHTML = "" 
    if(document.images["render"].src == "#.png")
    {
     console.log("yes");
     document.images["render"].src == "no.png";
     } 
},1000); */