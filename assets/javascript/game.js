$(document).ready(function (){
    

//Fade-in Function
    // WORKING on an issue that causes the winLoss container to sporadically move to the left upon the win/loss condition
$(function() {
    $('mainContainer').hide().fadeIn(500);
    $('h1').hide().fadeIn(1000);
    $(".instructionsContainer" ).hide().fadeIn(2000);
    $("#scoreContainer" ).hide().fadeIn(3000);
    $("#randomNumber" ).hide().fadeIn(3500);
    $("#winLossContainer" ).hide().fadeIn(4000);
    $(".crystalsContainer" ).hide().fadeIn(4500);
});

//Random Computer Choices (from 19-120)
var computerChoice = Math.floor(Math.random() * 102+19);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
    
// Win/Loss variables
var wins = 0;
var losses = 0;

//Random Crystal Choices (from 1-12)
var crystal1 = Math.ceil(Math.random() * 12);
    console.log("Red Crystal = " + crystal1); 
 
var crystal2 = Math.ceil(Math.random() * 12);
    console.log("Blue Crystal = " + crystal2);

var crystal3 = Math.ceil(Math.random() * 12);
    console.log("Yellow Crystal = " + crystal3);
    
var crystal4 = Math.ceil(Math.random() * 12);
    console.log("Green Crystal = " + crystal4); 
    
function crystalRandom() {
var crystal1 = Math.ceil(Math.random() * 12);
    console.log("Red Crystal = " + crystal1); 
 
var crystal2 = Math.ceil(Math.random() * 12);
    console.log("Blue Crystal = " + crystal2);

var crystal3 = Math.ceil(Math.random() * 12);
    console.log("Yellow Crystal = " + crystal3);
    
var crystal4 = Math.ceil(Math.random() * 12);
    console.log("Green Crystal = " + crystal4);
}

var currentScore = 0;
$("#current").text(currentScore);
console.log(currentScore);


    
  $("#redCrystal").on("click", function () {
    currentScore += crystal1;
        $("#current").text(currentScore);
            console.log(currentScore)
      
    if (currentScore === computerChoice) {
        wins++; 
        $("#wins").text("Wins: " + wins);
        
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
    
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
    } 
      
    else if (currentScore > computerChoice) {
        losses++;
        $("#losses").text("Losses: " + losses);
        
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
        
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
    }
  })
    
    
    
 $("#blueCrystal").on("click", function () {
    currentScore += crystal2;
    $("#current").text(currentScore);
      console.log(currentScore)
     
     if (currentScore === computerChoice) {
        wins++;
        $("#wins").text("Wins: " + wins);
       
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
         
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
    } 
     
    else if (currentScore > computerChoice) {
        losses++;
        $("#losses").text("Losses: " + losses);
        
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
            
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
  }
 })
    
    
    
 $("#yellowCrystal").on("click", function () {
    currentScore += crystal3;
    $("#current").text(currentScore);
      console.log(currentScore)
     if (currentScore === computerChoice) {
        wins++;
        $("#wins").text("Wins: " + wins);
   
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
         
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
    } 
     
    else if (currentScore > computerChoice) {
        losses++;
        $("#losses").text("Losses: " + losses);
    
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
        
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);  
  }   
 })

 $("#greenCrystal").on("click", function () {
    currentScore += crystal4;
    $("#current").text(currentScore);
      console.log(currentScore)
     if (currentScore === computerChoice) {
        wins++;
        $("#wins").text("Wins: " + wins);
        
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
         
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
    }
     
     else if (currentScore > computerChoice) {
        losses++;
        $("#losses").text("Losses: " + losses);
        
            crystalRandom();
            totalScore = 0;
            currentScore = 0;
            $("#current").text(currentScore);
    
    computerChoice = Math.floor(Math.random() * 102+19);
    $("#randomNumber" ).hide().fadeIn(2000);
    $('#randomNumber').text(computerChoice);
    console.log("Computer chose " + computerChoice);
  }
 }) 
    
});