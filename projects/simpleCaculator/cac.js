function calculate() {
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    const resultDiv = document.getElementById('result');
    const resultLabel = resultDiv.querySelector('.result-label');
    const resultValue = resultDiv.querySelector('.result-value');
    
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;
    
    // Clear previous result classes
    resultDiv.className = 'result';
    
    // Validation
    if (isNaN(num1) || isNaN(num2)) {
        resultLabel.textContent = 'Error:';
        resultValue.textContent = 'Please enter valid numbers in both fields! 🔢';
        resultDiv.classList.add('error');
        
        // Focus on the empty field
        if (isNaN(num1)) num1Input.focus();
        else if (isNaN(num2)) num2Input.focus();
        return;
    }
    
    let result;
    let operationText = '';
    
    switch (operator) {
        case '+':
            result = num1 + num2;
            operationText = `${num1} + ${num2}`;
            break;
        case '-':
            result = num1 - num2;
            operationText = `${num1} - ${num2}`;
            break;
        case '*':
            result = num1 * num2;
            operationText = `${num1} × ${num2}`;
            break;
        case '/':
            if (num2 === 0) {
                resultLabel.textContent = 'Error:';
                resultValue.textContent = 'Cannot divide by zero! ⚠️';
                resultDiv.classList.add('error');
                num2Input.focus();
                return;
            }
            result = num1 / num2;
            operationText = `${num1} ÷ ${num2}`;
            break;
        default:
            resultLabel.textContent = 'Error:';
            resultValue.textContent = 'Invalid operator selected! 🚫';
            resultDiv.classList.add('error');
            return;
    }
    
    // Format result for better display
    const formattedResult = Number.isInteger(result) ? result : result.toFixed(6).replace(/\.?0+$/, '');
    
    resultLabel.innerHTML = `${operationText} =`;
    resultValue.innerHTML = `<strong>${formattedResult}</strong> ✨`;
    resultDiv.classList.add('success');
    
    // Add history to calculations
    addToHistory(operationText, formattedResult);
    
    // Clear inputs for next calculation
    setTimeout(() => {
        num1Input.value = '';
        num2Input.value = '';
        num1Input.focus();
    }, 2000);
}

function addToHistory(operation, result) {
    // Simple history tracking (you could expand this)
    const history = JSON.parse(localStorage.getItem('calcHistory') || '[]');
    history.unshift({ operation, result, timestamp: new Date().toLocaleTimeString() });
    
    // Keep only last 10 calculations
    if (history.length > 10) history.pop();
    
    localStorage.setItem('calcHistory', JSON.stringify(history));
}

function toggleLanguage() {
    const title = document.getElementById('title');
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultDiv = document.getElementById('result');
    const resultLabel = resultDiv.querySelector('.result-label');
    const resultValue = resultDiv.querySelector('.result-value');
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const calculator = document.getElementById('calculator');
    const operatorSelect = document.getElementById('operator');
    
    const isCurrentlyHebrew = toggleLangBtn.textContent === 'Switch to English';
    
    if (!isCurrentlyHebrew) {
        // Switch to Hebrew
        title.textContent = 'מחשבון פשוט';
        num1.placeholder = 'הזן את המספר הראשון';
        num2.placeholder = 'הזן את המספר השני';
        calculateBtn.textContent = 'חשב תוצאה';
        resultLabel.textContent = 'תוצאה:';
        resultValue.textContent = 'מוכן לחישוב';
        toggleLangBtn.textContent = 'Switch to English';
        
        // Update operator options
        operatorSelect.innerHTML = `
            <option value="+">+ חיבור</option>
            <option value="-">- חיסור</option>
            <option value="*">× כפל</option>
            <option value="/">÷ חילוק</option>
        `;
        
        calculator.classList.remove('ltr');
        calculator.classList.add('rtl');
        document.body.style.direction = 'rtl';
    } else {
        // Switch to English
        title.textContent = 'Mathematical Operations';
        num1.placeholder = 'Enter first number';
        num2.placeholder = 'Enter second number';
        calculateBtn.textContent = 'Calculate Result';
        resultLabel.textContent = 'Result:';
        resultValue.textContent = 'Ready for calculation';
        toggleLangBtn.textContent = 'Switch to Hebrew';
        
        // Update operator options
        operatorSelect.innerHTML = `
            <option value="+">+ Addition</option>
            <option value="-">- Subtraction</option>
            <option value="*">× Multiplication</option>
            <option value="/">÷ Division</option>
        `;
        
        calculator.classList.remove('rtl');
        calculator.classList.add('ltr');
        document.body.style.direction = 'ltr';
    }
    
    // Clear result when switching languages
    resultDiv.className = 'result';
}

// Event listeners and initialization
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const toggleLangBtn = document.getElementById('toggleLangBtn');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const operatorSelect = document.getElementById('operator');
    
    // Add event listeners
    calculateBtn.addEventListener('click', calculate);
    toggleLangBtn.addEventListener('click', toggleLanguage);
    
    // Keyboard support
    [num1Input, num2Input].forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculate();
            }
        });
    });
    
    operatorSelect.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculate();
        }
    });
    
    // Auto-focus on first input
    num1Input.focus();
    
    // Add some keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.ctrlKey || e.metaKey) {
            switch(e.key) {
                case '=':
                case 'Enter':
                    e.preventDefault();
                    calculate();
                    break;
                case 'l':
                    e.preventDefault();
                    toggleLanguage();
                    break;
            }
        }
    });
});

// Add CSS for RTL support
const additionalStyles = document.createElement('style');
additionalStyles.textContent = `
    .rtl {
        direction: rtl;
        text-align: right;
    }
    
    .rtl .input-group {
        direction: rtl;
    }
    
    .rtl input, .rtl select {
        text-align: right;
        direction: rtl;
    }
    
    .ltr {
        direction: ltr;
        text-align: center;
    }
    
    .calc-container {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(additionalStyles);
