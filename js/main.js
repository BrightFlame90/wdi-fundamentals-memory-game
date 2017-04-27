var cards = [
{
	rank: "Queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "Queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "King",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "King",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}
	else {
		alert("Sorry, try again");
	}
};

var flipCard = function (){
 	var cardId = this.getAttribute('data-id');
	console.log ("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);

};

var createBoard = function (){
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

  }
};

createBoard();

function shuffle (cards) {
  var i = 0
    , j = 0
    , temp = null

  for (i = cards.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1))
    temp = cards[i]
    cards[i] = array[j]
    array[j] = temp
  }
}


