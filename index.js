
let player = {
    name: "John",
    chips: 145

}

let cards = [];
let sum;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame () {
    isAlive = true
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    renderGame();
}

function renderGame () {

    let message = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        message += cards[i] + " ";
    }

    cardsEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
    
    } else if (sum === 21) {
        message = "You've got Blackjack! 🥳";
        hasBlackJack = true;
    
    } else {
        message = "You're out of the game! 😭"
        isAlive = false;
    }
    
    messageEl.textContent = message;

}

function newCard () {

    if (isAlive && !hasBlackJack) {
        
        let thirdCard = getRandomCard();

        sum += thirdCard;
        cards.push(thirdCard);
    
        renderGame();
    }

}

function getRandomCard () {
    let rand = Math.floor(Math.random() * 13) + 1;
    if (rand === 1) {
        return 11;
    } else if (rand > 10) {
        return 10
    } else {
        return rand;
    }
}
