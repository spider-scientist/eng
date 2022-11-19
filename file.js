
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
 setInterval(()=>{
    if(window.location.href != "https://spider-scientist.github.io/eng")
    document.body.innerHTML = ""
},100);
