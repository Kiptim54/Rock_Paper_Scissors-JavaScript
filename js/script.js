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
        document.querySelector('form').style.display="none";
        document.querySelector(".game").style.display="block";
        var scores=document.querySelector("#teams");
        scores.innerHTML=`<h4>${name}:${playerScore} Computer:${computerScore}</h4>`;
        
    

    //computer randomn selection
    computerOptions=["rock", "paper", "scissors"];
    function computerPlay(){
        let choices=["rock", "paper", "scissors"]
        let answer=choices[Math.floor(Math.random()*3)]
        console.log("computer:"+answer);
        return answer
       
    }
    /*returns  player options*/
    function update_score(){
        var scores=document.querySelector("#teams");
        scores.innerHTML=`<h4>${name}:${playerScore} Computer:${computerScore}</h4>`;
    }
  
    function stateChoices(){
        document.querySelector(".answers").innerHTML=`<h4>Computer=${computer} | ${name}=$</h4>`;
    }
    function rock(){
        var computer=computerPlay();
        document.querySelector(".computeranswers").innerHTML=`<h4>Computer=${computer} </h4>`;
        if (computer=="rock"){
        alert("it's a tie");
        }else if(computer=="paper"){
            computerScore+=1
            update_score();
        } else if(computer=="scissors"){
            playerScore+=1
            update_score();
        }else{alert("error");}
    }
    function paper(){
        let computer=computerPlay();
        document.querySelector(".computeranswers").innerHTML=`<h4>Computer=${computer} </h4>`;
        if (computer=="paper"){
        alert("it's a tie");
        }else if(computer=="rock"){
            playerScore+=1
            update_score();
        } else if(computer=="scissors"){
            computerScore+=1
            update_score();
        }else{alert("error");}
    }
    function scissors(){
        let computer=computerPlay();
        document.querySelector(".computeranswers").innerHTML=`<h4>Computer=${computer} </h4>`;
        if (computer=="scissors"){
        alert("it's a tie");
        }else if(computer=="paper"){
            playerScore+=1
            update_score();
        } else if(computer=="rock"){
            computerScore+=1
            update_score();
        }else{alert("error");}
    }
    /*compares the two players*/
    function comparision(){
        let computer=computerPlay();
        console.log(computer);
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
        choice=document.querySelector('#rock').value;
        console.log("player:"+choice);
        rock();
        document.querySelector(".answers").innerHTML=`${name}=${choice}</h4>`;
    };

    document.querySelector("#paper").onclick=function(){
        paperchoice=document.querySelector('#paper').value;
        console.log("player:"+paperchoice);
        paper();
        document.querySelector(".answers").innerHTML=`${name}=${paperchoice}</h4>`;
    };

    document.querySelector("#scissors").onclick=function(){
        scissorschoice=document.querySelector('#scissors').value;
        console.log("player:"+scissorschoice);
        scissors();
        document.querySelector(".answers").innerHTML=`${name}=${scissorschoice}</h4>`;
    };

};
});