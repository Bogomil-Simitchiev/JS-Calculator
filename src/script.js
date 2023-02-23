const buttonElements = document.querySelectorAll('#buttonsField button');
let validOperatorsAndNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.', '(', ')'];
let outputElement = document.querySelector('.outputField');
outputElement.textContent = '';

buttonElements.forEach(btnElement => {
    btnElement.addEventListener('click', (e) => {

        if (validOperatorsAndNumbers.includes(e.currentTarget.value)) {
            if (outputElement.textContent.length > 0 && ((outputElement.textContent[outputElement.textContent.length - 1] == '-') && (e.currentTarget.value == '-'))) {
                alert('Cannot have `-` two times!');
            }
            else if (outputElement.textContent.length > 0 && ((outputElement.textContent[outputElement.textContent.length - 1] == '+') && (e.currentTarget.value == '+'))) {
                alert('Cannot have `+` two times!');
            }
            else if (outputElement.textContent.length > 0 && ((outputElement.textContent[outputElement.textContent.length - 1] == '*') && (e.currentTarget.value == '*'))) {
                alert('Cannot have `*` two times!');
            }
            else if (outputElement.textContent.length > 0 && ((outputElement.textContent[outputElement.textContent.length - 1] == '/') && (e.currentTarget.value == '/'))) {
                alert('Cannot have `/` two times!');
            }
            else {
                let text = e.currentTarget.value;
                outputElement.textContent += text;
            }
        }
        if (e.currentTarget.value == '=') {
            if (outputElement.textContent[0] == '.') {
                alert('Error! Please check your input field!');
                outputElement.textContent = '';
                return;
            }
            try {
                let result = eval(outputElement.textContent);
                outputElement.textContent = result;
            } catch (error) {
                alert('Error! Please check your input field!');
                outputElement.textContent = '';
            }

        }
        if (e.currentTarget.value == 'all-clear') {
            outputElement.textContent = '';
        }
        if (outputElement.textContent.length == 24) {
            alert('Too big operation or number, please enter smaller one!');
            outputElement.textContent = '';
        }
        if (e.currentTarget.value == 'back') {
            if (outputElement.textContent.length > 0) {
                let result = outputElement.textContent.substring(0, outputElement.textContent.length - 1);
                outputElement.textContent = result;

            } else {
                alert('Input field is empty!');
            }
        }

    })
})