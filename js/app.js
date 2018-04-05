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



//SHUFFLES CARDS

for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}


//FLIPS CARD ON CLICK

    var listItems = document.getElementById("board").getElementsByTagName('li');

    for (var i=0; i<listItems.length; i++) {
        listItems[i].addEventListener('click', flipCard, false);
    }

    function flipCard() {
//Keeps tracks of number of clicks
      clickCount= clickCount +1;


//keeps track of time






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

//on every second click do:
        if(clickCount %2 === 0){

//updates the number of attempts
            document.getElementById('attempts').innerHTML = "Attempts: " + (clickCount/2);

//REMOVE Star if
            if(clickCount>20){



                const removeStar = document.getElementById('star1')
                removeStar.style.display="none";

            }

            if(clickCount>30){
              const removeStar = document.getElementById('star2')
              removeStar.style.display="none";

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

        if(correctGuesses==8){
          t1 = performance.now();
          totalTime = Math.trunc((t1-t0)/1000);
          document.getElementById('output').innerHTML = "You finished in " + totalTime + " seconds,"  +(clickCount/2) + " attempts";
          const successDiv = document.querySelector(".success");
          successDiv.style.display="block";

        }

      }



    }


//removes Success message Overlay when Play Again button is clicked
    button.addEventListener('click', function(){


      const successDiv = document.querySelector(".success");
      successDiv.style.display="none";

    });
