

// Call to elements

var stage = document.getElementById("stage");
var alienAnimate = document.getElementById("alien");
var alienAnimate2 = document.getElementById("alien2");
var alienAnimate3 = document.getElementById("alien3");
var endStage = document.getElementById("endStage");
var endStage2 = document.getElementById("endStage2");
var message = document.getElementById("message");

// Call to buttons

var btnStart = document.getElementById("start");
var btnPause = document.getElementById("pause");
var btnTrick = document.getElementById("trick");
var btnEnd = document.getElementById("end");
var btnRetry = document.getElementById("retry");



 // function for the start button
 function startalien() {
    
    if (btnStart.click)
    {
      alienAnimate.classList.add("animate");
      alienAnimate.style.animationPlayState = "running";
      alienAnimate.addEventListener("animationend",safealien);
    } 
 }
 
 // function for the safe landing
 function safealien() {
  
    alienAnimate.style.display = "none";
    alienAnimate3.style.display = "block";
    alienAnimate3.classList.add("animateSafeEnd")
    alienAnimate3.style.animationPlayState = "running";
    alienAnimate3.addEventListener("animationend",alienfinalSafe);
 }
 
 // function for the pause button
 function pausealien() {
 
  if (btnPause.click)
  {
    alienAnimate.style.animationPlayState = "paused";
    alienAnimate2.style.animationPlayState = "paused";
    alienAnimate3.style.animationPlayState = "paused";
  }
  
 }
 
 // function for the trick button
 function trickalien() {
   
   if (btnTrick.click) {
      
      alienAnimate.classList.add("animateTrick");
      alienAnimate.style.animationPlayState = "running";
   }
 
 }
 
 // function for the end button
 function endalien() {
 
   if (btnEnd.click) {
      
      alienAnimate.classList.add("animateEnd");
      alienAnimate.style.animationPlayState = "running";
      alienAnimate.addEventListener("animationend",endalien2);
      
   }
 }
 
 // function for part 2 of the end button
 function endalien2() {
   
    alienAnimate.style.display = "none";
    alienAnimate2.classList.add("animateEndPart2");
    alienAnimate2.style.animationPlayState = "running";
    alienAnimate2.addEventListener("animationend", alienfinalBad);
    
 }
 
 // function for the bad end
 function alienfinalBad() {
  
  alienAnimate2.style.display = "none";
  alienAnimate3.style.display = "none";
  alienAnimate2.style.animationPlayState = "paused";
  message.innerHTML = "OH. So close!";
 }
 
 // function for the safe end
 function alienfinalSafe() {
  
  alienAnimate2.style.display = "none";
  alienAnimate3.style.display = "none";
  alienAnimate2.style.animationPlayState = "paused";
  message.innerHTML = "The Alien made it!";
 
 }
 
 // function to reload the page.
 function retryalien() {
  
  if(btnRetry.click){
    
    location.reload();
  
  }  
 }