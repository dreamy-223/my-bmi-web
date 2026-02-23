let inputA = document.getElementById('inputA');
let inputB = document.getElementById('inputB');
let button = document.getElementById('button');
let outputStatus = document.getElementById('outputStatus');
let output = document.getElementById('bmi');
let bmioutput = document.getElementById('bmioutput');

function print() {
    let bmibox = document.querySelector('.bmibox');
    let status = document.querySelector('.sts');
    let abc = document.querySelector('.abc');
    let number1 = Number(inputA.value);
    let number2 = Number(inputB.value);
    let outputHTML = '';

    if (inputA.value.trim() === '' || inputB.value.trim() === '') {
        status.style.display = 'block';
        outputStatus.innerHTML = "กรุณาใส่ข้อมูลของคุณ";
        abc.style.display = 'none';
        return;
    }
   
    if (isNaN(number1) || isNaN(number2)) {
        status.style.display = 'block';
        outputStatus.innerHTML = "กรุณาใส่ข้อมูลของคุณ";
        abc.style.display = 'none';
        return;
    }

    let bmi = number1 / 100;
    bmi = number2 / (bmi ** 2);
    bmi = bmi.toFixed(2);

    if (bmi <= 18.5) {
        bmioutput.style.background = "linear-gradient(135deg, #00c6ff, #0072ff)";
        bmioutput.innerHTML = 'น้ำหนักต่ำกว่าเกณฑ์';
    }
    else if (bmi > 18.5 && bmi <= 22.9) {
        bmioutput.style.background = "linear-gradient(135deg, #00ff87, #00c9a7)";
        bmioutput.innerHTML = 'น้ำหนักสมส่วน';
    }
    else if (bmi > 22.9 && bmi <= 24.9) {
        bmioutput.style.background = "linear-gradient(135deg, #f7971e, #ffd200)";
        bmioutput.innerHTML = 'น้ำหนักเกินมาตรฐาน';
    }
    else if (bmi > 24.9 && bmi <= 29.9) {
        bmioutput.style.background = "linear-gradient(135deg, #ff512f, #ff9966)";
        bmioutput.innerHTML = 'น้ำหนักอยู่ในเกณฑ์อ้วน';
    }
    else {
        bmioutput.style.background = "linear-gradient(135deg, #ff0844, #ff003c)";
        bmioutput.innerHTML = 'น้ำหนักอยู่ในเกณฑ์อ้วนมาก';
    }

    abc.style.display = "block";

    outputHTML += '<p>';
    outputHTML += "ค่า BMI ของคุณคือ " + bmi +" BMI";
    outputHTML += '</p>';

    output.innerHTML = outputHTML;
    status.style.display = 'none';
}

button.addEventListener('click', print);
