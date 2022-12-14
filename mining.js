
 

 // data mining
 var bal = document.querySelector(".bal");
 var rew = document.querySelector(".rew");
 bal.innerHTML = (localStorage.x0 == undefined) ? "0.000000" : localStorage.x0
let giveaway = {
    name:"Mai Anguwa",
    reward(){
        return 0.001666666666666
    },
    start(){
        if(new Date().getMinutes() < 60 && !localStorage.x0){
            localStorage.setItem("x0","0.000000")
            this.mining();
        }
        else if(localStorage.x0 && new Date().getMinutes() < 60){
            this.mining();
        }
        else if(new Date().getMinutes() >= 60){
            console.log("mining stop, Your balance is : "+localStorage.x0 )
            bal.innerHTML = localStorage.x0
            rew.innerHTML = 0.0000000
        }
    },
    mining(){
        //+localStorage.x0++;
        let bln = +localStorage.x0 + this.reward()
        localStorage.setItem("x0",bln)
        bal.innerHTML = localStorage.x0 +" mbps"
    }
}
setInterval(function (){
giveaway.start();
let ar = (document.images['render'].src == 'undefined.png') ? true : false
if(ar){
    document.images['render'].src = "no.png"
   }  
},1000);