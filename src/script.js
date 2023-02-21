const buttonElements = document.querySelectorAll('#buttonsField button');
let validOperatorsAndNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '.'];
let outputElement = document.querySelector('.outputField');
buttonElements.forEach(btnElement => {
    btnElement.addEventListener('click', (e) => {

        if (validOperatorsAndNumbers.includes(e.currentTarget.value)) {
            let text = e.currentTarget.value;
            console.log(text);
            outputElement.textContent += text;
        }

    })
})