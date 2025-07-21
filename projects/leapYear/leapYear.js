function isLeapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

function checkLeapYear() {
    let yearInput = document.getElementById("yearInput").value;
    if (yearInput.trim() === '') {
        document.getElementById("result").textContent = "Please enter a year first!";
        return;
    }

    let year = parseInt(yearInput);
    if (isNaN(year)) {
        document.getElementById("result").textContent = "Invalid year. Please enter a valid year;";
        return;
    }

    let result = isLeapYear(year);
    let message = year + (result ? " is a leap year." : " is not a leap year.");
    document.getElementById("result").textContent = message;
}
