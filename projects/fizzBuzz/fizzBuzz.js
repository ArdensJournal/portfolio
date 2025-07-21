document.addEventListener('DOMContentLoaded', function() {
    var fizzBuzzButton = document.getElementById('fizzBuzzButton');
    var newGameButton = document.getElementById('newGameButton');
    var output = [];
    var count = 1;

    fizzBuzzButton.addEventListener('click', function() {
        fizzBuzz();
    });

    newGameButton.addEventListener('click', function() {
        newGame();
    });

    function fizzBuzz() {
        var container = document.getElementById('fizzBuzzContainer');
        var item = document.createElement('p');
        var text;

        if (count % 3 === 0 && count % 5 === 0) {
            text = "FizzBuzz";
            item.classList.add('fizzbuzz');
        } else if (count % 3 === 0) {
            text = "Fizz";
            item.classList.add('fizz');
        } else if (count % 5 === 0) {
            text = "Buzz";
            item.classList.add('buzz');
        } else {
            text = count;
        }

        output.push(text);
        item.textContent = output.join(', ');
        container.innerHTML = ''; // Clear previous content
        container.appendChild(item);
        count++;
    }

    function newGame() {
        output = [];
        count = 1;
        var container = document.getElementById('fizzBuzzContainer');
        container.innerHTML = ''; // Clear previous content
    }
});
