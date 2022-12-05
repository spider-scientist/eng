
 
 var dics = new Array();
 
 dics[0] = "due to tana nufin saboda wani abu, misali due to the current situation i can not go to school."
 dics[1] = "prefix wani kari ne ake yiwa kalma a farkon ta, hakan yana sanja maanarta a wasu lokutan. Misali like da dislike."
 dics[2] = "suffix wani kari ne ake yiwa kalma a karshenta. Misali like da dislike."
 dics[3] = "void mai rashin kome a ciki misali there is a void that i need to be filled up."
 dics[4] = "talkative me surutu. Dede yake da logorrhea"
 dics[5] = "logorrhea (logoriya) me surutu sosai."
 dics[6] = "excessive wanda ya wuce kima. misali excessive talkativeness.";
 for(xx of dics)
 {
 console.log(xx)
 }
 function dic(){
     var slv = document.getElementById('inputd').value;
     var slv = slv.toLowerCase();
     for(i=0;i<dics.length;i++){
        if(dics[i].includes(slv))
     {
         document.getElementById("answer").innerHTML = dics[i]
     }
     }
     
 }