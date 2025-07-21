document.addEventListener('DOMContentLoaded', function() {
    const positiveResponses = [
        "yes", "of course", "absolutely", "sure", "yeah", "yea", "yep", "yup", 
        "definitely", "in love with you", "love you", "like you", "i do"
    ];

    const positiveRegex = new RegExp(positiveResponses.join("|"), "i");

    const dynamicContent = document.getElementById('dynamicContent');
    const userInput = document.getElementById('userInput');
    const submitButton = document.getElementById('submitButton');
    const feedback = document.getElementById('feedback');

    submitButton.addEventListener('click', function() {
        const answer = userInput.value.trim().toLowerCase();

        if (positiveRegex.test(answer)) {
            feedback.innerHTML = `
                <h1>I'm pretty awesome!</h1>
                <img src="iLikeYou2.gif" alt="Best Friends Image" class="big-image">
            `;
        } else if (answer) {
            feedback.innerHTML = `
                <h1>That's too bad.</h1>
                <img src="fuckYou2.gif" alt="Angry Image" class="big-image">
            `;
        } else {
            feedback.innerHTML = `
                <h1>I'm not sure what to say.</h1>
                <p>Your response was neutral. Try again?</p>
            `;
        }
    });
});
