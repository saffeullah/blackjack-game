// Define player object with name and chips properties
let player = {
    name: "Per",
    chips: 200
}

// Initialize variables for cards, sum, and game status
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Get DOM elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

// Display player's name and chips
playerEl.textContent = player.name + ": $" + player.chips

// Function to get a random card value (1-10)
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

// Function to start the game
function startGame() {
    // Set game status to alive
    isAlive = true
    
    // Get two random cards
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    
    // Initialize cards array and sum
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    // Render the game
    renderGame()
}

// Function to render the game state
function renderGame() {
    // Clear cards element
    cardsEl.textContent = "Cards: "
    
    // Display each card value in the cards element
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    // Display the current sum
    sumEl.textContent = "Sum: " + sum
    
    // Set the message based on the sum value
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    
    // Display the message
    messageEl.textContent = message
}

// Function to draw a new card
function newCard() {
    // Check if the game is still alive and not already has a Blackjack
    if (isAlive === true && hasBlackJack === false) {
        // Get a new random card
        let card = getRandomCard()
        
        // Add the card value to the sum and cards array
        sum += card
        cards.push(card)
        
        // Render the updated game state
        renderGame()
    }
}
