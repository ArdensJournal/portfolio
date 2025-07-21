var doYouLike = ["yes", "of course", "absolutely", "sure", "yeah", "yea", "yep", "yup", "sure", "definitely", "in love with you", "love you", "like you", "I do"];

var answer = prompt("Do you like me?");

const dynamicContent = document.getElementById('dynamicContent');

if (doYouLike.includes(answer.toLowerCase())) {
    dynamicContent.innerHTML = `
        <h1>I'm pretty awesome!</h1>
        <img src="iLikeYou2.gif" alt="Best Friends Image" class="big-image">
    `;
} else {
    dynamicContent.innerHTML = `
        <h1>That's too bad.</h1>
        <img src="fuckYou2.gif" alt="Angry Image" class="big-image">
    `;
}