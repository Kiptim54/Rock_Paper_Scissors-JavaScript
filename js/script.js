document.addEventListener('DOMContentLoaded', function(){
    console.log("working");
    let playerScore=0;
    let computerScore=0;

    document.querySelector(".game").style.display="none";
    document.querySelector('form').onsubmit=function(event){
        event.preventDefault();
        var name=document.querySelector('input').value;
        alert(name);
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
        return answer
    }
    /*returns  player options*/
    function update_score(){
        var scores=document.querySelector("#teams");
        scores.innerHTML=`<h4>${name}:${playerScore} Computer:${computerScore}</h4>`;
    }
    function playerSelection(){
        player=prompt("please choose one?");
        return player.toLowerCase()
    }
    function rock(){
        let computer=computerPlay();
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
        rock();
    };

    document.querySelector("#paper").onclick=function(){
        paper();
    };

    document.querySelector("#scissors").onclick=function(){
        scissors();
    };

};
});