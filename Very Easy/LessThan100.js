/* A function is created to check if a number provided is less than 100 */

function lessThan100(number){
  if(isNaN(number)) throw new SyntaxError("You must provide a real number.")
  
  return number > 100 ? console.log(`${number} is greater than 100.`) : console.log(`${number} is not greater than 100.`)
}

lessThan100(100)