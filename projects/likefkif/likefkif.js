document.addEventListener('DOMContentLoaded', function() {
    const positiveResponses = [
        "yes", "of course", "absolutely", "sure", "yeah", "yea", "yep", "yup", 
        "definitely", "in love with you", "love you", "like you", "i do", "totally",
        "for sure", "always", "you bet", "naturally", "obviously", "without a doubt"
    ];

    const negativeResponses = [
        "no", "nope", "never", "not really", "nah", "no way", "absolutely not",
        "hate you", "dislike you", "can't stand you", "not at all", "negative"
    ];

    const positiveRegex = new RegExp(positiveResponses.join("|"), "i");
    const negativeRegex = new RegExp(negativeResponses.join("|"), "i");

    const dynamicContent = document.getElementById('dynamicContent');
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');
    const feedback = document.getElementById('feedback');

    // Enhanced responses with more personality
    const positiveMessages = [
        "I'm pretty awesome! 😎",
        "Aww, you're sweet! 💕",
        "I knew we'd be great friends! 🎉",
        "You have excellent taste! ✨",
        "That makes me so happy! 😊"
    ];

    const negativeMessages = [
        "That's too bad. 😢",
        "Well, that's your loss! 🤷‍♂️",
        "Can't win them all! 😅",
        "Maybe we can be frenemies? 😏",
        "Your honesty is... refreshing! 😂"
    ];

    function getRandomMessage(messages) {
        return messages[Math.floor(Math.random() * messages.length)];
    }

    function handleSubmit() {
        const answer = userInput.value.trim().toLowerCase();

        if (!answer) {
            feedback.innerHTML = `
                <h1>Hmm... silent treatment? 🤐</h1>
                <p>Come on, don't be shy! Tell me how you really feel.</p>
            `;
            return;
        }

        // Clear previous results with animation
        feedback.style.opacity = '0';
        setTimeout(() => {
            if (positiveRegex.test(answer)) {
                feedback.innerHTML = `
                    <h1>${getRandomMessage(positiveMessages)}</h1>
                    <img src="iLikeYou2.gif" alt="Happy Response" class="big-image">
                `;
            } else if (negativeRegex.test(answer)) {
                feedback.innerHTML = `
                    <h1>${getRandomMessage(negativeMessages)}</h1>
                    <img src="fuckYou2.gif" alt="Disappointed Response" class="big-image">
                `;
            } else {
                feedback.innerHTML = `
                    <h1>I'm not sure what to say... 🤔</h1>
                    <p>That's quite an interesting response! Maybe be more direct next time?</p>
                    <p><em>"${answer}"</em> - I'll need to think about that one!</p>
                `;
            }
            feedback.style.opacity = '1';
        }, 200);

        // Clear input after submission
        userInput.value = '';
    }

    // Event listeners
    submitButton.addEventListener('click', handleSubmit);
    
    userInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    });

    // Focus on input when page loads
    userInput.focus();
});
