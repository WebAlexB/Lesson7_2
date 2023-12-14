// Створити масив чисел, елементи якого задає користувач. Вивести суму цих чисел.
// За основу взяти задачку з урока, де користувач вводить всі елементи одним рядком.
// cancel має припиняти виконання програми, а порожній рядок не повинен сприйматися як 0

function isArrayLengthValid(lengthInput) {
    const length = +lengthInput;
    if (lengthInput === null) {
        alert('Okay good bye');
        return false;
    } else if (!lengthInput.trim() || length <= 0 || !Number.isInteger(length)) {
        alert('Invalid array length number');
        return false;
    }
    return true;
}

function calculatorNumbers() {
    const lengthInput = prompt('Enter an array length number');
    if (isArrayLengthValid(lengthInput)) {
        const length = +lengthInput;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            const userInput = prompt(`Enter ${i + 1} element for the list`);

            if (userInput === null) {
                alert('Okay good bye');
                break;
            }
            const num = +userInput;

            if (isNaN(num)) {
                alert('Invalid input. Please enter a valid number.');
                i--;
            } else {
                sum += num;
            }
        }
        return alert(`Sum: ${sum}`);
    }
}

calculatorNumbers();