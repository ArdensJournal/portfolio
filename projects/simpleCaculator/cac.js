function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }

    document.getElementById('result').textContent = result;
}

document.getElementById('calculateBtn').addEventListener('click', calculate);

function toggleLanguage() {
    const title = document.getElementById('title');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const calculator = document.getElementById('calculator');

    if (toggleLangBtn.textContent === 'לעברית לחץ כאן') {
        title.textContent = 'מחשבון פשוט';
        num1.placeholder = 'הזן את המספר הראשון';
        num2.placeholder = 'הזן את המספר השני';
        calculateBtn.textContent = 'חשב';
        result.textContent = 'התוצאה תוצג כאן';
        toggleLangBtn.textContent = 'Switch to English';
        calculator.classList.remove('ltr');
        calculator.classList.add('rtl');
    } else {
        title.textContent = 'Simple Calculator';
        num1.placeholder = 'Enter first number';
        num2.placeholder = 'Enter second number';
        calculateBtn.textContent = 'Calculate';
        result.textContent = 'Result will be displayed here';
        toggleLangBtn.textContent = 'לעברית לחץ כאן';
        calculator.classList.remove('rtl');
        calculator.classList.add('ltr');
    }
}

document.getElementById('toggleLangBtn').addEventListener('click', toggleLanguage);
