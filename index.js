
const gamePattern = [];
const buttonColors = ["red", "green", "blue","yellow"]
let level =1;
let boxId=[];
let boxClicked 
let i=0;
let randomChosenColor;
let started =false;
function nextSequence(){
    let randomNum = Math.floor(Math.random()*4);
     randomChosenColor = buttonColors[randomNum];
     boxId.push(randomChosenColor);
     addAnime(randomChosenColor)
    MakeAudio(randomChosenColor)
}

$(document).on("keydown",()=>{ 
  if(!started){
    $("h1").text("level "+ level)
    nextSequence();
    started=true;
  }
 })

$(".btn").on('click',(e)=>{
        boxClicked = e.target.id 

        if(boxId[i]===boxClicked){
                 i++
                 addAnime(boxClicked)
                MakeAudio(boxClicked)
                 if(i===boxId.length){
                    console.log("im here")
                    level++;
                    $("h1").text("level "+ level)
                    i=0;
               setTimeout(nextSequence,400)
                 }
        }else{
            i=0
            boxId=[]
            const overAudio = new Audio("./sounds/wrong.mp3")
            overAudio.play()
            $("h1").text("Game over press any key to restart")
            level= 0;
            $('body').addClass("game-over")
           setTimeout(() => {
            $('body').removeClass("game-over") 
           }, 200); 
           started =false;
        
       

        }
    })

    function MakeAudio(elemId){
        const audio = new Audio(`./sounds/${elemId}.mp3`)
        audio.play()
    }
 function addAnime(elem){
    $(`#${elem}`).addClass("pressed")
    setTimeout(()=>{
    $(`#${elem}`).removeClass("pressed")
  },100)
 }