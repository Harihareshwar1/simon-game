let gamepattern = []
let buttonColors = ["red","blue","green","yellow"]
let userPattern = []

function playSound(name){
    let sound = new Audio(name+".mp3")
    sound.play();
}
let started = false
let level = 0;
function nextSequence() {
userPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamepattern.push(randomChosenColour);
  
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level "+level);
  }
  



function animatePress(color){
    $("#"+color).addClass("pressed");
    setTimeout(() => {
        $("#"+color).removeClass("pressed");
    }, 100);
}



$(".btn").click(function(event){
    let userChosenButton = $(this).attr("id");
    animatePress(userChosenButton);
    playSound(userChosenButton);
    userPattern.push(userChosenButton);
  
    console.log(userPattern);
    console.log(gamepattern);
    console.log(checkAnswer(userPattern.length));
    
})

function checkAnswer(index){

       var ans =  gamepattern[index-1] == userPattern[index-1];
    console.log(ans);
    
       if(ans == true ){
        if(userPattern.length === gamepattern.length){
        setTimeout(() => {
           nextSequence();
        }, 1000);}
       }
       else{
        playSound("wrong");
        startover();
        $("body").addClass("game-over");
        setTimeout(() => {
            $("body").removeClass("game-over");
        }, 100);
       }

}
$(document).keypress(function(){
  
   if(!started){
    started= true;
    $("h1").text("level 0");
   }
  nextSequence();
    
})



function startover(){
    level = 0;
    started = false;
    gamepattern = [];
    $("h1").text("Game over, press any button to restart");
}
