document.addEventListener('DOMContentLoaded', function() {
    var fizzBuzzButton = document.getElementById('fizzBuzzButton');
    var newGameButton = document.getElementById('newGameButton');
    var output = [];
    var count = 1;
    var gameStats = { fizz: 0, buzz: 0, fizzbuzz: 0, numbers: 0 };

    fizzBuzzButton.addEventListener('click', function() {
        fizzBuzz();
    });

    newGameButton.addEventListener('click', function() {
        newGame();
    });

    function fizzBuzz() {
        var container = document.getElementById('fizzBuzzContainer');
        var item = document.createElement('div');
        var text;
        var resultClass;

        if (count % 3 === 0 && count % 5 === 0) {
            text = "FizzBuzz";
            resultClass = 'fizzbuzz';
            gameStats.fizzbuzz++;
        } else if (count % 3 === 0) {
            text = "Fizz";
            resultClass = 'fizz';
            gameStats.fizz++;
        } else if (count % 5 === 0) {
            text = "Buzz";
            resultClass = 'buzz';
            gameStats.buzz++;
        } else {
            text = count;
            resultClass = 'number';
            gameStats.numbers++;
        }

        // Create individual item for current result
        item.className = `fizzbuzz-item ${resultClass}`;
        item.textContent = `${count}: ${text}`;
        
        // Add special effects for FizzBuzz
        if (resultClass === 'fizzbuzz') {
            item.title = "🎉 Special FizzBuzz!";
            setTimeout(() => {
                item.style.animation = 'specialPulse 1s ease-in-out';
            }, 100);
        }

        output.push({number: count, text: text, class: resultClass});
        
        // Append new item to container
        container.appendChild(item);
        
        // Auto-scroll to bottom
        container.scrollTop = container.scrollHeight;
        
        count++;
        
        // Update button text with current number
        fizzBuzzButton.textContent = `Generate Number ${count}`;
        
        // Show stats every 10 numbers
        if (count % 10 === 1 && count > 1) {
            showStats();
        }
    }

    function showStats() {
        const total = gameStats.fizz + gameStats.buzz + gameStats.fizzbuzz + gameStats.numbers;
        const statsItem = document.createElement('div');
        statsItem.className = 'stats-item';
        statsItem.innerHTML = `
            <strong>📊 Stats after ${total} numbers:</strong><br>
            Numbers: ${gameStats.numbers} | Fizz: ${gameStats.fizz} | 
            Buzz: ${gameStats.buzz} | FizzBuzz: ${gameStats.fizzbuzz}
        `;
        
        const container = document.getElementById('fizzBuzzContainer');
        container.appendChild(statsItem);
        container.scrollTop = container.scrollHeight;
    }

    function newGame() {
        output = [];
        count = 1;
        gameStats = { fizz: 0, buzz: 0, fizzbuzz: 0, numbers: 0 };
        
        var container = document.getElementById('fizzBuzzContainer');
        container.innerHTML = '<div class="welcome-message">🎮 New game started! Click "Generate Number 1" to begin.</div>';
        
        fizzBuzzButton.textContent = 'Generate Number 1';
        
        // Add a little celebration
        fizzBuzzButton.style.animation = 'pulse 0.5s ease-in-out';
        setTimeout(() => {
            fizzBuzzButton.style.animation = '';
        }, 500);
    }

    // Initialize the game
    newGame();
});

// Add additional CSS for stats and welcome message
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .stats-item {
        background: linear-gradient(45deg, #f0f8ff, #e6f3ff);
        color: #2c5282;
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 1rem;
        border: 2px dashed #3182ce;
        font-size: 0.9rem;
        text-align: center;
        animation: fadeInScale 0.5s ease-out;
    }
    
    .welcome-message {
        background: linear-gradient(45deg, #f0fff4, #e6fffa);
        color: #2f855a;
        padding: 1.5rem;
        border-radius: 1rem;
        border: 2px solid #48bb78;
        text-align: center;
        font-size: 1.1rem;
        animation: fadeInScale 0.5s ease-out;
    }
`;
document.head.appendChild(additionalStyles);
