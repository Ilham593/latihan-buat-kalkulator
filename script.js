const display = document.getElementById('input');
const btns = document.querySelectorAll('.btn');
const btnDot = document.getElementById('output.');
const btnTambah = document.getElementById('output+');
const btnSamaDengan = document.getElementById('output=');
const btnClear = document.getElementById('outputC');

let operator = '';
let operand1 = '';
let operand2 = '';
let result = '';

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    let inputUser = btn.textContent;
    
    if (inputUser === '=') {
      if (operator && operand1) {
        operand2 = display.value;
        result = hitung(parseFloat(operand1), parseFloat(operand2), operator);
        display.value = result;
        operator = '';
        operand1 = result;
      }
    } else if (['+', '-', '*', '/'].includes(inputUser)) {
      operator = inputUser;
      operand1 = display.value;
      display.value = '';
    } else {
      display.value += inputUser;
    }
  });
});

btnDot.addEventListener('click', function() {
  if (!display.value.includes('.')) {
    display.value += '.';
  }
});

btnClear.addEventListener('click', function() {
  display.value = '';
  operand1 = '';
  operand2 = '';
  operator = '';
});

function hitung(a, b, op) {
  switch (op) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
    default:
      return 0;
  }
}
