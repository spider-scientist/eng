
 due = "due to tana nufin saboda wani abu, misali due to the current situation i can not go to school."
 prefix = "prefix wani kari ne ake yiwa kalma a farkon ta, hakan yana sanja maanarta a wasu lokutan. Misali like da dislike."
 suffi = "suffix wani kari ne ake yiwa kalma a karshenta. Misali like da dislike."
 ar = [];
 ar.push(prefix);
 ar.push(suffi);
 ar.push(due);
 

 function dic(){
     var slv = document.getElementById('inputd').value;
     var slv = slv.toLowerCase();
     for(i=0;i<ar.length;i++){
        if(ar[i].includes(slv))
     {
         document.getElementById("answer").innerHTML = ar[i]
     }
     }
     
 }
