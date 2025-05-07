const prompt = require('prompt-sync')(); // Imports the module prompt-sync so we can receive user input
// Main function
function calculator() {

  function onEval(calc) {
    let numbers = [];
    let operators = [];
    let result = "";
    const numberOrOperator = (element) => typeof element === 'number' && !isNaN(element) ? numbers.push(element) : operators.push(element); // Checks if the element is a number or operator
    calc.forEach((element) => numberOrOperator(element)); // Iterates over the array and pushes the element to the numbers or operators array
    for (let i = 0; i < calc.length; i++) {
      result += calc[i]; // Concatenates the elements of the array
    }
    return eval(`${result}`); // Evaluates the expression
  }
  // Grabs the previous entry in the array if it exists and concatenates it with the current number
  // e.g. User entry: 41 + 53 - Current number: 1 - Array: ["4"] - Pop's the 4 from the array and concatenates it with the 1 - result: 41
  // e.g. Same entry - Current number: 5 - Array: ["41", "+"] - In case the last entry in the array is an operator it won't pop it 
  function concatNumber(num, array) {
    if (num.typeof !== 'number' && isNaN(num)) {
      finalNum = array.pop() + num;
      return finalNum;
    } else {
      if (array.length === 0 || array[array.length - 1].typeof !== 'number' && isNaN(array[array.length - 1]))  {
        return num;
      } else {
        finalNum = array.pop() + num;
        return finalNum;
      }
    }
  }
  // Evaluates the entry checking if it's a number or operator.
  // If it's an operator pushes it to the array
  // If it's a number evaluates if it's the first number or the second so it can push it into the array
  function entryEvaluations(character, calcArray, operator) {
    let finalNum = undefined;
    if (character === '+' || character === '-' || character === '*' || character === '/') {
      operator = character;
      calcArray.push(operator)
    } else {
      let num2 = character;
      finalNum = Number(concatNumber(num2, calcArray))
      calcArray.push(Number(finalNum))
    }
    return calcArray
  }

  let string = String(prompt('Digite o calculo: ')) // Print's the instructions to the user
  let evenOddArr = []; // Array to store the even and odd numbers
  const even = (element) => element % 2 === 0 ? console.log(`O valor ${element} é par`) : console.log(`O valor ${element} é impar`);
  const isNumber = (element) => typeof element === 'number' && !isNaN(element) ? evenOddArr.push(element) : false; // Checks if the element is a number
  // "State variables" | "useState"
  let counter = 0; // Counter for the loop
  let step = 1; // Increment for the counter
  let calcArray = []; // Array to store the numbers and operators
  let operator = ''; // Variable to store the operator
  // Iterates over the entry and evaluates
  for (let i = 0; i < string.length; i++) {
    counter += step // Counter for debugging
    let character = string[i]; // Single character of the string to be evaluated
    if (character !== '+' && character !== '-' && character !== '*' && character !== '/' && isNaN(Number(character))){
      // Logs the error message and stops the execution
      console.log("Erro: Entrada inválida. Por favor, insira um número ou operador válido.");
      process.exit();
    }
    resultArray = entryEvaluations(character, calcArray, operator) // Evaluates the character and returns the array
    // Temporary solution to remove the last element of the array in case it's bigger than 3
    // if (resultArray.length > 3) {
    //   resultArray.pop();
    // }
  }
  calcArray.forEach((element) => isNumber(element)); // Checks if the element is a number
  let result = onEval(resultArray) // Calculates the result
  isNaN(result) ? console.log("Algo deu errado") : console.log(`Resultado: ${result}`); // Prints the result
  let userOddEven = String(prompt('Deseja saber se os números são pares ou ímpares? (y/n) ')) // Print's the instructions to the user
  if (userOddEven === 'y' || userOddEven === 'Y') {
    console.log(evenOddArr.some(even)); 
  }
}
calculator() // Calls the calculator function