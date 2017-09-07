//ambil value dari firstNumber
var firstNumber = document.getElementById('firstNumber')
var secondNumber = document.getElementById('secondNumber')

function add(){
  var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt + secondNumberInt;

  //passing value to dom
  document.getElementById("result").innerHTML = result;
}
function min(){
  var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt - secondNumberInt;

  //passing value to dom
  document.getElementById("result").innerHTML = result;
}
function multiply(){
  var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt * secondNumberInt;

  //passing value to dom
  document.getElementById("result").innerHTML = result;
}
function divide(){
  var firstNumberInt = Number(firstNumber.value);
  var secondNumberInt = Number(secondNumber.value);
  var result = firstNumberInt / secondNumberInt;

  console.log(firstNumberInt / secondNumberInt)

  //passing value to dom
  document.getElementById("result").innerHTML = result;
}