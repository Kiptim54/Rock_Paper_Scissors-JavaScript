document.addEventListener('DOMContentLoaded', function(){
    console.log("working");
    let playerScore=0;
    let computerScore=0;

    document.querySelector(".game").style.display="none";
    document.querySelector('form').onsubmit=function(event){
        event.preventDefault();
        var name=document.querySelector('input').value;
        document.querySelector('input').value="";
        //hide form and display game
        document.querySelector('.setup').style.display="none";
        document.querySelector(".game").style.display="block";
        document.querySelector("body").style.background="lightblue";
        var scores=document.querySelector("#teams");
        scores.innerHTML=`<h1>${name}:${playerScore} Computer:${computerScore}</h1>`;
        
    

    //computer randomn selection
    computerOptions=["rock", "paper", "scissors"];
    function computerPlay(){
        let choices=["rock", "paper", "scissors"]
        let answer=choices[Math.floor(Math.random()*3)]
        return answer
       
    }
    /*returns  player options*/
    function update_score(){
        var scores=document.querySelector("#teams");
        scores.innerHTML=`<h1>${name}:${playerScore} Computer:${computerScore}</h1>`;
    }
  
    function stateChoices(){
        document.querySelector(".answers").innerHTML=`<h1>Computer=${computer} | ${name}=$</h1>`;
    }
    function rock(){
        var computer=computerPlay();
        document.querySelector(".computeranswers").innerHTML=`<h1>Computer=${computer} </h1>`;
        if (computer=="rock"){
            document.getElementById("commentary").innerHTML=`<h1>it's a tie</h1>`;
        }else if(computer=="paper"){
            document.getElementById("commentary").innerHTMl=`paper beats rock`;
            computerScore+=1;
            update_score();
            
        } else if(computer=="scissors"){
            playerScore+=1;
            update_score();
            document.getElementById("commentary").innerHTMl=`scissors beats rock`;
        }else{alert("error");}
    }
    function paper(){
        let computer=computerPlay();
        document.querySelector(".computeranswers").innerHTML=`<h1>Computer=${computer} </h1>`;
        if (computer=="paper"){
            document.getElementById("commentary").innerHTML=`<h1>it's a tie</h1>`;
        }else if(computer=="rock"){
            playerScore+=1
            update_score();
            document.querySelector("#commentary").innerHTMl=`paper beats rock`;
        } else if(computer=="scissors"){
            computerScore+=1
            update_score();
            document.querySelector("#commentary").innerHTMl=`scissors beats rock`;
        }else{alert("error");}
    }
    function scissors(){
        let computer=computerPlay();
        document.querySelector(".computeranswers").innerHTML=`<h1>Computer=${computer} </h1>`;
        if (computer=="scissors"){
            document.getElementById("commentary").innerHTML=`<h1>it's a tie</h1>`;
            }else if(computer=="paper"){
            playerScore+=1
            update_score();
            document.querySelector("#commentary").innerHTMl=`scissors beats paper`;
            } else if(computer=="rock"){
            computerScore+=1
            update_score();
            document.querySelector("#commentary").innerHTMl=`rock beats scissors`;
        }else{alert("error");}
    }
    /*compares the two players*/
    function comparision(){
        let computer=computerPlay();
        let player= playerSelection();
        if (player=="rock"){
        rock();
        }else if(player=="paper"){
        paper();
        }else if(player=="scissors"){
        scissors();    
        }else{
        alert("error try again");    
    }
    }

    
    


    document.querySelector('#rock').onclick=function(){
        choice=document.querySelector('#rock').dataset.value;
        console.log("player:"+choice);
        rock();
        document.querySelector(".answers").innerHTML=`<h1>${name}=${choice}</h1>`;
    };

    document.querySelector("#paper").onclick=function(){
        paperchoice=document.querySelector('#paper').dataset.value;
        console.log("player:"+paperchoice);
        paper();
        document.querySelector(".answers").innerHTML=`<h1>${name}=${paperchoice}</h1>`;
    };

    document.querySelector("#scissors").onclick=function(){
        scissorschoice=document.querySelector('#scissors').dataset.value;
        console.log("player:"+scissorschoice);
        scissors();
        document.querySelector(".answers").innerHTML=`<h1>${name}=${scissorschoice}</h1>`;
    };

};
});