// Enhanced result display with animations
const resultElement = document.querySelector(".result");
const player1Input = document.querySelector("#player1Name");
const player2Input = document.querySelector("#player2Name");
const player1Display = document.querySelector("#player1Display");
const player2Display = document.querySelector("#player2Display");

// Set initial state - no winner shown
resultElement.innerHTML = "🎲 Enter names and click 'Roll Dice' to Start!";
resultElement.style.color = "#4ECDC4";

// Set initial dice images to a neutral state
document.querySelector(".img1").setAttribute("src", "images/dice6.png");
document.querySelector(".img2").setAttribute("src", "images/dice6.png");

// Function to get player names or use defaults
function getPlayerNames() {
    const player1Name = player1Input.value.trim() || "Player 1";
    const player2Name = player2Input.value.trim() || "Player 2";
    return { player1Name, player2Name };
}

// Function to update player name displays
function updatePlayerDisplays() {
    const { player1Name, player2Name } = getPlayerNames();
    player1Display.textContent = player1Name;
    player2Display.textContent = player2Name;
}

// Function to roll dice and determine winner
function rollDice() {
    // Update player displays first
    updatePlayerDisplays();
    
    // Get current player names
    const { player1Name, player2Name } = getPlayerNames();
    
    // Generate new random numbers
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    // Update dice images
    document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    
    // Remove previous winner class
    resultElement.classList.remove("winner");
    
    // Update result with custom names
    if (randomNumber1 > randomNumber2) {
        resultElement.innerHTML = `🚩 ${player1Name} Wins!`;
        resultElement.style.color = "#ff6b6b";
        resultElement.classList.add("winner");
    } else if (randomNumber2 > randomNumber1) {
        resultElement.innerHTML = `🚩 ${player2Name} Wins!`;
        resultElement.style.color = "#6bcf7f";
        resultElement.classList.add("winner");
    } else {
        resultElement.innerHTML = `🤝 It's a Draw between ${player1Name} and ${player2Name}!`;
        resultElement.style.color = "#ffd93d";
    }
}

// Update player displays when users type
player1Input.addEventListener("input", updatePlayerDisplays);
player2Input.addEventListener("input", updatePlayerDisplays);

// Add Enter key functionality to inputs
player1Input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".btn").click();
    }
});

player2Input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        document.querySelector(".btn").click();
    }
});

// Add button functionality for rolling dice
document.querySelector(".btn").addEventListener("click", function() {
    // Add loading animation
    this.innerHTML = "Rolling...";
    this.style.opacity = "0.7";
    
    setTimeout(() => {
        rollDice();
        
        // Reset button
        this.innerHTML = "Roll Dice";
        this.style.opacity = "1";
    }, 800);
});