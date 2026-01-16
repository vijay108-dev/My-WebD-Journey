const button = document.querySelector('button');

button.addEventListener('click', ()=>{

    //Read the Data
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    if(isNaN(number1)||isNaN(number2))
        return;

    //output the value
    const result = number1 + number2;
    const re = document.getElementById('result');
    re.textContent = result;


})

//BMI Calculator
