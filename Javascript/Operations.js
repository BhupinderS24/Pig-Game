var i=1;
var score0=0;
var score1=0;
var tempscore0=0;
var tempscore1=0;
var diceNum;

document.addEventListener("DOMContentLoaded",()=>{startGame();})
function startGame(){
    document.getElementById("diceImage").style.visibility='hidden';
    if(i==1){
        document.getElementsByClassName("player0")[0].style.backgroundColor="#D3D3D3";
    }
    else{
        document.getElementsByClassName("player1")[0].style.backgroundColor="#D3D3D3";
    }
}
function player(name,score){
    this.name=name;
    this.score=score;
}

function newGame(){
    i=1;
    score0=0;
    score1=0;
    tempscore0=0;
    tempscore1=0;
    diceNum;
    var currentTempScore=document.getElementById("playerscore0");
    var currentTempScore2=document.getElementById("playerscore1");
    currentTempScore.innerHTML="";
    currentTempScore2.innerHTML="";
    document.getElementsByClassName("player1")[0].style.backgroundColor="white";
    document.getElementsByClassName("player0")[0].style.backgroundColor="#D3D3D3";
    var scor=document.getElementById("score0");
    var scor2=document.getElementById("score1");
    scor.innerHTML="";
    scor2.innerHTML="";
    document.getElementsByClassName("customBRoll")[0].disabled=false;
    document.getElementsByClassName("customBHold")[0].disabled=false;
    var PlayerName=document.getElementById("name0");
    var PlayerName2=document.getElementById("name1");
    PlayerName.innerHTML="PLAYER 1";
    PlayerName2.innerHTML="PLAYER 2";
}

var player1=new player("Player1",score0);
var player2=new player("Player2",score1);

function Roll(){
        var diceNum=RollDice();
        console.log("DICENUM"+diceNum);
        var currentTempScore=document.getElementById("playerscore0");
        var currentTempScore2=document.getElementById("playerscore1");

        if(diceNum!=1){
        if(i==1){
            tempscore0+=diceNum;
            currentTempScore.innerHTML=tempscore0;
            console.log("CURRENTTTT0000"+tempscore0);
          //  scor.innerHTML=tempscore0;
        }

        if(i==2){
            tempscore1+=diceNum;
            currentTempScore2.innerHTML=tempscore1;
            console.log("CURRENTTTT111"+tempscore1);
        }
        } 
        else{
            if(i==1){
                document.getElementsByClassName("player1")[0].style.backgroundColor="#D3D3D3";
                document.getElementsByClassName("player0")[0].style.backgroundColor="white";
                currentTempScore.innerHTML=0;
                i=2;
                tempscore0=0;
            }
            else if(i==2){
                document.getElementsByClassName("player1")[0].style.backgroundColor="white";
                document.getElementsByClassName("player0")[0].style.backgroundColor="#D3D3D3";
                currentTempScore2.innerHTML=0;
                i=1;
                tempscore1=0;
            }
        }
}
function RollDice(){
    let num=Math.floor(Math.random() * 6)+1;
    ShowDice(num);
    return num;
}
function toss(){

}
function hold(){
 

    document.getElementById("diceImage").style.visibility='hidden';
    if((tempscore0!=0)||(tempscore1!=0)){
    var scor=document.getElementById("score0");
    var scor2=document.getElementById("score1");
    var currentTempScore=document.getElementById("playerscore0");
    var currentTempScore2=document.getElementById("playerscore1");
    var PlayerName=document.getElementById("name0");
    var PlayerName2=document.getElementById("name1");
    if(i==1){

         //change active Player

         document.getElementsByClassName("player1")[0].style.backgroundColor="#D3D3D3";
         document.getElementsByClassName("player0")[0].style.backgroundColor="white";

       // document.getElementsByClassName("player1").classList.add('active');
        score0+=tempscore0;
        if(score0>=100){
        PlayerName.innerHTML="WINNER!!!";
        document.getElementsByClassName("customBRoll")[0].disabled=true;
        document.getElementsByClassName("customBHold")[0].disabled=true;
        }
       console.log("Final Score0"+score0);
       tempscore0=0;
       i=2;
       scor.innerHTML=score0;
       currentTempScore.innerHTML=0;
    }
    else if(i==2){
        document.getElementsByClassName("player0")[0].style.backgroundColor="#D3D3D3";
        document.getElementsByClassName("player1")[0].style.backgroundColor="white";

        score1+=tempscore1;
        if(score1>=100){
            PlayerName2.innerHTML="WINNER!!!"
            document.getElementsByClassName("customBRoll")[0].disabled=true;
            document.getElementsByClassName("customBHold")[0].disabled=true;
        }
        console.log("FInal Score1"+score0);
        tempscore1=0;
        i=1;
        scor2.innerHTML=score1;
        currentTempScore2.innerHTML=0;
    }
}
}

function ShowDice(diceNumber){
    document.getElementById("diceImage").style.visibility='visible';
    console.log("DICEENUMBERRRRRR"+diceNumber);
   var diceImage=document.getElementById("diceImage");
switch(diceNumber){
    case 1:document.getElementById("diceImage").style.visibility='hidden';
    break;
    case 2:diceImage.setAttribute("src","../Images/dice-2.png");
    break;
    case 3:diceImage.setAttribute("src","../Images/dice-3.png");
    break;
    case 4:diceImage.setAttribute("src","../Images/dice-4.png");
    break;
    case 5:diceImage.setAttribute("src","../Images/dice-5.png");
    break;
    case 6:diceImage.setAttribute("src","../Images/dice-6.png");
    break;

}

}
// function DManupulation(){
//     var play=document.getElementById("name0");
//     var scor=document.getElementById("score0");
//     var play2=document.getElementById("name1");
//     var scor2=document.getElementById("score1");
//     var currentTempScore=document.getElementById("playerscore0");
//     var currentTempScore2=document.getElementById("playerscore1");
// }
// function DManupulation(){
// var play=document.getElementById("name0");
// console.log(play);
// var tnode=document.createTextNode(player1.name);
// play.appendChild(tnode);

// var scor=document.getElementById("score0");
// var tnod=document.createTextNode(player1.score);
// scor.appendChild(tnod);

// var play2=document.getElementById("name1");
// var tnode2=document.createTextNode(player2.name);
// play2.appendChild(tnode2);

// var scor2=document.getElementById("score0");
// var tnod2=document.createTextNode(player2.score);
// scor2.appendChild(tnod2);

// var rolD=document.getElementById("RollDice");
// var rolTextNode= document.createTextNode(diceNum);
// rolD.appendChild(rolTextNode);




//}