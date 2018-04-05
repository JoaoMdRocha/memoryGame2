const ul = document.querySelector('ul');
let clickCount = 0;
let compare;
let compare2;
let cardTop ;
let cardsFlipped= [] ;
let length;
let arrayCompare = [];
let addToArrayClass;
let test;
let redCards = [];
let redCardsLength;
let correctGuesses = 0;
const button = document.getElementById('play');
let successDiv;
let t0;
let t1;
var c = 0;
var t;
var timer_is_on = 0;
let removeStar1;
let removeStar2;


//SHUFFLES CARDS
shuffle();

//adds event listener to all cards

var listItems = document.getElementById("board").getElementsByTagName('li');

for (var i=0; i<listItems.length; i++) {
    listItems[i].addEventListener('click', flipCard, false);
}

function flipCard() {
//Keeps tracks of number of clicks
   clickCount= clickCount +1;
//Starts Timer
    startCount();


//ADDS "flippedCard" class to cards that have been flipped
cardTop= this.firstElementChild;
//Removes black cover on card - flips it
cardTop.classList.remove("blackbck");
this.classList.add("flippedCard");
//Creates array with the class that states the animal name for each of the flipped cards
addToArrayClass=  this.firstElementChild.classList.item(1);
arrayCompare.push(addToArrayClass);
addToArrayCard=  this.firstElementChild;
cardsFlipped.push(addToArrayCard);
length= arrayCompare.length;


  if(clickCount ===1){

    t0 = performance.now();

  }

//on every second click :
  if(clickCount %2 === 0){

//updates the number of attempts
    document.getElementById('attempts').innerHTML = "Attempts: " + (clickCount/2);

//REMOVE Star if
      if(clickCount>20){

          removeStar1 = document.getElementById('star1')
          removeStar1.style.display="none";

      }

      if(clickCount>30){
        removeStar2 = document.getElementById('star2')
        removeStar2.style.display="none";

      }

//compares the last two elements of the array - the classes of the last two cards that have been flipped
      if(arrayCompare[length-2] == arrayCompare[length-1]){
      correctGuesses +=1;

//gives cards a green colour if they are the same
        for (i=1;i<= 2; i++){

          cardsFlipped[length-i].parentElement.classList.toggle("greenbck");
        }

//gives cards a red colour if they are not the same
      }else{


         for (i=1;i<= 2; i++){

           test= cardsFlipped[length-i].parentElement;
           test.classList.add("redbck");
           redCards.push(test);
           redCardsLength = redCards.length;
          }



//flips the cards back to black and removes the previous red colour ad flippedCard classes so these can be added again
//if the cards are flipped again
        setTimeout(function() {
          for (i=1;i<= 2; i++){

           redCards[redCardsLength-i].classList.toggle("redbck");
           redCards[redCardsLength-i].classList.toggle("flippedCard");

           redCards[redCardsLength-i].firstElementChild.classList.add("blackbck");
         }
       }, 1000);

       }

  //If player wins the game, get the pop up congratulating

      if(correctGuesses==8){
        document.getElementById('output').innerHTML = "You finished in " + c + " seconds,"  +(clickCount/2) + " attempts";
        const successDiv = document.querySelector(".success");

        successDiv.style.display="block";

      }
    }
  }


//removes Success message Overlay when Play Again button is clicked
button.addEventListener('click', function(){


  const successDiv = document.querySelector(".success");
  resetBoard()
  successDiv.style.display="none";
  stopCount();


});

//shuffles cards
function shuffle(){
  for (var i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[Math.random() * i | 0]);
  }
}

//Timer function

function startCount() {
  if (!timer_is_on) {
  timer_is_on = 1;
  timedCount();
  }
}
function timedCount() {
  document.getElementById("time").innerHTML= "time: " + c + " s";
  c = c + 1;
  t = setTimeout(function(){ timedCount() }, 1000)
};

function stopCount() {
  clearTimeout(t);
  timer_is_on = 0;
  c=0;
  document.getElementById("time").innerHTML= "time: 0 s";


}

function resetBoard(){


  const cards = document.getElementsByClassName("card");
  console.log(cards[1]);
  for (i=0; i<= (cards.length-1); i++){

      cards[i].classList.remove("flippedCard");
      cards[i].classList.remove("greenbck");
      cards[i].firstElementChild.classList.add("blackbck");
  }
  document.getElementById('attempts').innerHTML = "Attempts: ";
  if (clickCount>20){
  removeStar1.style.display="block";
  }
  if (clickCount>30){
  removeStar2.style.display="block";
  }


  clickCount = 0;
  correctGuesses = 0;




}
