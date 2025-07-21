let names = [];

function addName() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    if (name) {
        if (!names.includes(name)) {
            names.push(name);
            updateNamesList();
            nameInput.value = '';
            nameInput.focus();
        } else {
            alert('This name is already in the list!');
        }
    } else {
        alert('Please enter a valid name!');
    }
}

function updateNamesList() {
    const namesList = document.getElementById('namesList');
    namesList.innerHTML = '';
    names.forEach((name, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${name}</span>
            <button onclick="removeName(${index})">Remove</button>
        `;
        namesList.appendChild(li);
    });
    
    // Update task button state
    const taskButton = document.getElementById('taskButton');
    taskButton.disabled = names.length === 0;
}

function removeName(index) {
    names.splice(index, 1);
    updateNamesList();
    
    // Clear result if no names left
    if (names.length === 0) {
        clearResult();
    }
}

function whosDoingTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim() || 'paying';
    
    if (names.length === 0) {
        alert('Please add at least one name.');
        return;
    }
    
    // Add suspense with animation
    const resultElement = document.getElementById('result');
    const keanuGif = document.getElementById('keanuGif');
    
    // Show loading state
    resultElement.textContent = 'Choosing...';
    keanuGif.style.display = 'none';
    keanuGif.classList.remove('show');
    
    // Add random delay for suspense
    setTimeout(() => {
        const randomPersonPosition = Math.floor(Math.random() * names.length);
        const randomPerson = names[randomPersonPosition];
        const result = `🎯 ${randomPerson} is ${task}! 🎯`;
        
        resultElement.textContent = result;
        
        // Show the celebration GIF
        keanuGif.src = 'chosen1.gif'; // Using local GIF
        keanuGif.style.display = 'block';
        keanuGif.classList.add('show');
        
        // Add confetti effect (simple emoji animation)
        createConfetti();
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
}

function createConfetti() {
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎯'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.textContent = confettiEmojis[Math.floor(Math.random() * confettiEmojis.length)];
            confetti.style.position = 'absolute';
            confetti.style.fontSize = '2rem';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '0';
            confetti.style.animation = 'fall 3s linear forwards';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '1000';
            
            container.style.position = 'relative';
            container.appendChild(confetti);
            
            // Remove confetti after animation
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.parentNode.removeChild(confetti);
                }
            }, 3000);
        }, i * 100);
    }
}

function resetPage() {
    names = [];
    updateNamesList();
    clearResult();
    document.getElementById('nameInput').value = '';
    document.getElementById('taskInput').value = '';
    document.getElementById('nameInput').focus();
}

function clearResult() {
    document.getElementById('result').textContent = '';
    const keanuGif = document.getElementById('keanuGif');
    keanuGif.style.display = 'none';
    keanuGif.classList.remove('show');
}

// Add enter key support
document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const taskInput = document.getElementById('taskInput');
    
    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addName();
        }
    });
    
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            whosDoingTask();
        }
    });
    
    // Focus on name input when page loads
    nameInput.focus();
    
    // Initialize task button state
    updateNamesList();
});

// Add CSS for confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
