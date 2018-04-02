const ul = document.querySelector('ul');
let clickCount =0;
let compareArray = [];
let cardTop ;


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
      clickCount = clickCount +1

//ADDS "flippedCard" class to cards that have been flipped
        cardTop = this.firstElementChild;
        cardTop.style.cssText="display:none";
        this.classList.toggle("flippedCard");



      if(clickCount == 2){
//Compares images on cards with "flippedCard as a class"
        const cardsFlipped = document.getElementsByClassName("flippedCard");


        for (i=0;i< cardsFlipped.length; i++){


      const checkImg = cardsFlipped[i].firstElementChild;
      compareArray[i]=checkImg.classList.item(1);


        }



        if(compareArray[0] == compareArray[1]){

          for (i=0;i< cardsFlipped.length; i++){

         cardsFlipped[i].style.backgroundColor = "green";

          }

      }else{

        for (i=0;i< cardsFlipped.length; i++){

       cardsFlipped[i].style.backgroundColor = "red";
      

        }

        }




      }
    }
