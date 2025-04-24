const prompt = require('prompt-sync')(); // Imports the module prompt-sync so we can receive user input
// Main function
function calculator() {

  function onEval(x, operator, y) {
    return eval(`${x} ${operator} ${y}`); // Evaluates the expression
  }
  // Grabs the previous entry in the array if it exists and concatenates it with the current number
  // e.g. User entry: 41 + 53 - Current number: 1 - Array: ["4"] - Pop's the 4 from the array and concatenates it with the 1 - result: 41
  // e.g. Same entry - Current number: 5 - Array: ["41", "+"] - In case the last entry in the array is an operator it won't pop it 
  function concatNumber(num, array) {
    if (array[1] !== undefined && array[1] !== null && array.length >= 3) {
      finalNum = array.pop() + num;
      array.push(finalNum);
    } else if (array.length === 2) {
      return num;
    } else if (array.length > 0 && array.length < 2) {
      finalNum = array.pop() + num;
      return finalNum;
    } else {
      return num;
    }
  }
  // Evaluates the entry checking if it's a number or operator.
  // If it's an operator pushes it to the array
  // If it's a number evaluates if it's the first number or the second so it can push it into the array
  function entryEvaluations(character, calcArray, operator) {
    if (character === '+' || character === '-' || character === '*' || character === '/') {
      operator = character;
      calcArray.push(operator)
    } else if (calcArray.length <= 1) {
      let num1 = character;
      let finalNum = concatNumber(num1, calcArray)
      calcArray.push(finalNum)
    } else {
      let num2 = character;
      let finalNum = concatNumber(num2, calcArray)
      calcArray.push(finalNum)
    }
    return calcArray
  }

  let string = "10+15" // Print's the instructions to the user
  // "State variables" | "useState"
  let counter = 0; // Counter for the loop
  let step = 1; // Increment for the counter
  let calcArray = []; // Array to store the numbers and operators
  let operator = ''; // Variable to store the operator
  // Iterates over the entry and evaluates
  for (let i = 0; i < string.length; i++) {
    counter += step // Counter for debugging
    let character = string[i]; // Single character of the string to be evaluated
    resultArray = entryEvaluations(character, calcArray, operator) // Evaluates the character and returns the array
    // Temporary solution to remove the last element of the array in case it's bigger than 3
    if (resultArray.length > 3) {
      resultArray.pop();
    }
  }
  let result = onEval(resultArray[0], resultArray[1], resultArray[2]) // Calculates the result
  console.log("resultado: ", result) // Prints the result
}
calculator() // Calls the calculator function