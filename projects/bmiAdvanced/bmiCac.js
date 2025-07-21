document.getElementById("bmiButton").addEventListener("click", function() {
    var weight = parseFloat(document.getElementById("weight").value);
    var heightCm = parseFloat(document.getElementById("height").value);
    var heightM = heightCm / 100;
    var age = parseFloat(document.getElementById("age").value);
    var result = bmiCalculator(weight, heightM, age);
    
    var message = "";
    if (result < 18.5) {
        message = "Eat Something, nigga damn!";
    } else if (result >= 18.5 && result < 25) {
        message = "Normal is good this time.";
    } else if (result >= 25 && result < 30) {
        message = "Chill with the snacks.";
    } else {
        message = "Fatass, gym, gym, gym.";
    }
    
    document.getElementById("result").innerText = "Result: " + result + " BMI - " + message;
});

function bmiCalculator(weight, height, age) {
    var bmi = weight / Math.pow(height, 2);
    return bmi.toFixed(2); // Return BMI value with 2 decimal places
}
