function isLeapYear(year) {
    // A year is a leap year if:
    // 1. It's divisible by 4 AND not divisible by 100, OR
    // 2. It's divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkLeapYear() {
    const yearInput = document.getElementById("yearInput");
    const resultDiv = document.getElementById("result");
    const inputValue = yearInput.value.trim();
    
    // Clear previous result classes
    resultDiv.className = 'result-display';
    
    if (inputValue === '') {
        resultDiv.textContent = "Please enter a year first! 📅";
        resultDiv.classList.add('neutral');
        yearInput.focus();
        return;
    }

    const year = parseInt(inputValue);
    
    if (isNaN(year) || year < 1) {
        resultDiv.textContent = "Invalid year. Please enter a valid year (e.g., 2024) 🚫";
        resultDiv.classList.add('neutral');
        yearInput.focus();
        return;
    }

    const isLeap = isLeapYear(year);
    
    if (isLeap) {
        resultDiv.innerHTML = `
            🎉 <strong>${year}</strong> is a leap year! 🎉<br>
            <small>It has 366 days with an extra day in February!</small>
        `;
        resultDiv.classList.add('leap-year');
        
        // Add some confetti effect
        createConfetti();
    } else {
        resultDiv.innerHTML = `
            📅 <strong>${year}</strong> is not a leap year.<br>
            <small>It has the regular 365 days.</small>
        `;
        resultDiv.classList.add('not-leap-year');
    }
    
    // Show some additional info for interesting years
    showAdditionalInfo(year, isLeap, resultDiv);
}

function showAdditionalInfo(year, isLeap, resultDiv) {
    let additionalInfo = '';
    
    if (year === new Date().getFullYear()) {
        additionalInfo = isLeap ? 
            ' This is the current year - enjoy the extra day! 🌟' : 
            ' This is the current year! 🌟';
    } else if (year === new Date().getFullYear() + 1) {
        additionalInfo = isLeap ? 
            ' Next year will have an extra day! 🔮' : 
            ' Next year will be a regular year! 🔮';
    } else if (year % 100 === 0 && year % 400 !== 0) {
        additionalInfo = ' This century year is NOT a leap year due to the special rule! 🏛️';
    } else if (year % 400 === 0) {
        additionalInfo = ' This is a special leap year (divisible by 400)! 👑';
    }
    
    if (additionalInfo) {
        resultDiv.innerHTML += `<br><em style="color: #666; font-size: 0.9em;">${additionalInfo}</em>`;
    }
}

function createConfetti() {
    const confettiEmojis = ['🎉', '🎊', '✨', '🌟', '💫', '🎈', '🎁'];
    const container = document.querySelector('.container');
    
    for (let i = 0; i < 12; i++) {
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

// Add keyboard support and auto-focus
document.addEventListener('DOMContentLoaded', function() {
    const yearInput = document.getElementById('yearInput');
    const resultDiv = document.getElementById('result');
    
    // Set initial state
    resultDiv.textContent = 'Enter a year above to check if it\'s a leap year! 🔍';
    resultDiv.classList.add('neutral');
    
    // Focus on input when page loads
    yearInput.focus();
    
    // Add Enter key support
    yearInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkLeapYear();
        }
    });
    
    // Clear result when user starts typing
    yearInput.addEventListener('input', function() {
        if (this.value.trim() === '') {
            resultDiv.textContent = 'Enter a year above to check if it\'s a leap year! 🔍';
            resultDiv.className = 'result-display neutral';
        }
    });
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
