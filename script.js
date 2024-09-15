const display = document.getElementById("input");
const btn = document.querySelectorAll(".btn");
const hitung = document.getElementById("output=");
const clear = document.getElementById('outputC')
let operator = "";
let operand1 = "";
let operand2 = "";
let hasil = "";

btn.forEach(btn => {
  btn.addEventListener("click", function () {
    let inputanUser = btn.textContent;

    if (inputanUser === "=") {
      if (operator && operand1) {
        operand2 = display.value;
        hasil = hitungan(parseFloat(operand1), parseFloat(operand2), operator);
        display.value = hasil
        operator = ''
        operand1 = hasil
      }
    }else if(['+', '-', '*', '/'].includes(inputanUser)){
      operator = inputanUser
      operand1 = display.value
      display.value = ''
    }else {
      display.value += inputanUser
    }
  });
});

clear.addEventListener('click', function(){
  display.value = ''
  operand1 = '';
  operand2 = '';
  operator = '';
})

function hitungan(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
}
const kalkulator = document.getElementById('kalkulator')
const warning = document.getElementById('warning')
const close = document.getElementById('close')

window.addEventListener('DOMContentLoaded', function(e){
  e.preventDefault()
  kalkulator.style.opacity = '0.2'
})

close.addEventListener('click', function(){
  kalkulator.style.opacity = '1'
  warning.style.display = 'none'
})
