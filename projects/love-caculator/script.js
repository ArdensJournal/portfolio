// Wait for the page to load, then add event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Listen for form submission (when Calculate Love button is clicked)
    document.getElementById('loveCalculatorForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Stop the page from refreshing
        
        // Get the names from input fields
        var name1 = document.getElementById('name1').value;
        var name2 = document.getElementById('name2').value;
        
        // Check if both names are entered
        if (name1.trim() === '' || name2.trim() === '') {
            alert('Please enter both names!');
            return; // Stop here if names are missing
        }
        
        // Generate random love score between 1 and 100
        var n = Math.random();
        var loveScore = Math.floor(n * 100) + 1;
        
        // Show the result section
        var resultSection = document.getElementById('result');
        resultSection.classList.remove('hidden');
        
        // Update the percentage display
        document.getElementById('percentage').textContent = loveScore + '%';
        
        // Create custom messages based on the love score
        var title, message;
        if (loveScore >= 80) {
            title = 'Perfect Match!';
            message = `${name1} and ${name2}, you love each other like Kanye loves Kanye! 💕`;
        } else if (loveScore >= 60) {
            title = 'Great Compatibility!';
            message = `${name1} and ${name2}, your chemistry is stronger than coffee on a Monday morning! ☕💖`;
        } else if (loveScore >= 40) {
            title = 'Not Great!';
            message = `${name1} and ${name2}, you go together like WiFi and a wrong password! 📶💗`;
        } else if (loveScore >= 20) {
            title = 'Needs Work!';
            message = `${name1} and ${name2}, you’re like pineapple on pizza—some people love it, some people don’t! 🍍🍕💔`;
        } else {
            title = 'Not Compatible';
            message = `${name1} and ${name2}, you’re like socks and sandals—maybe better apart! 🧦👡💙`;
        }
        
        // Display the custom title and message
        document.getElementById('resultTitle').textContent = title;
        document.getElementById('resultMessage').textContent = message;
    });
    
    // Listen for "Try Again" button clicks
    document.getElementById('tryAgainBtn').addEventListener('click', function() {
        // Hide the result section
        document.getElementById('result').classList.add('hidden');
        
        // Clear the input fields
        document.getElementById('name1').value = '';
        document.getElementById('name2').value = '';
        
        // Put focus back on first input field
        document.getElementById('name1').focus();
    });
    
});
