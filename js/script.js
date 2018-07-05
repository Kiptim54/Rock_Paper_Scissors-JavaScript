document.addEventListener('DOMContentLoaded', function(){
    console.log("working");
    let playerScore=0;
    let computerScore=0;

    //computer randomn selection
    computerOptions=["rock", "paper", "scissors"];
    function computerPlay(){
        let choices=["rock", "paper", "scissors"]
        let answer=choices[Math.floor(Math.random()*3)]
        return answer
    }
    /*returns  player options*/

    function playerSelection(){
        player=prompt("please choose one?");
        return player.toLowerCase()
    }
    function rock(){
        let computer=computerPlay();
        if (computer=="rock"){
        alert("it's a tie");
        }else if(computer=="paper"){
        alert("computer wins paper beats rock");
        } else if(computer=="scissors"){
        alert("You win rock beats scissors");
        }else{alert("error");}
    }
    function paper(){
        let computer=computerPlay();
        if (computer=="paper"){
        alert("it's a tie");
        }else if(computer=="rock"){
        alert("You win paper beats rock");
        } else if(computer=="scissors"){
        alert("Computer wins, scissors beats paper");
        }else{alert("error");}
    }
    function scissors(){
        let computer=computerPlay();
        if (computer=="scissors"){
        alert("it's a tie");
        }else if(computer=="paper"){
        alert("You win scissors beats paper");
        } else if(computer=="rock"){
        alert("Computer win rock beats scissors");
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

    document.querySelector(".game").style.display="none";
    document.querySelector('form').onsubmit=function(event){
        event.preventDefault();
        let name=document.querySelector('input').value;
        alert(name);
        document.querySelector('input').value="";
        //hide form and display game
        document.querySelector('form').style.display="none";
        document.querySelector(".game").style.display="block";
        var scores=document.querySelector("#teams");
        scores.innerHTML=`${name}:${playerScore} Computer:${computerScore}`;
        
    };
    


    document.querySelector('#rock').onclick=function(){
        rock();
    };

    document.querySelector("#paper").onclick=function(){
        paper();
    };

    document.querySelector("#scissors").onclick=function(){
        scissors();
    };


});