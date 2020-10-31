const SOMA = 'soma';
const SUB = 'subtrai';
const DIV = 'divide';
const MULT = 'multiplica';

function calcular (tip, num1, num2) {
let total = 0;
switch(tip) {
    case SOMA:
      total = soma(num1, num2);
      break;
    case SUB:
      total = subtrai(num1, num2);
      break;
    case MULT:
      total = multiplica(num1, num2)
      ;
      break;
    case DIV:
      total = divide(num1, num2)
      ;
      break;
    default:
      return total;
    break;
  }
  return total;
}
function soma(num1, num2) {
return num1 + num2;
}

function subtrai(num1, num2) {
return num1 - num2;
}

function multiplica(num1, num2) {
return num1 * num2;
}

function divide(num1, num2) {
if (num1 === 0 || num2 === 0) {
  return ("Sem divisão por 0 Aqui, Parceito.")
}
return num1 / num2;
}

console.log(calcular(DIV,0, 2))
