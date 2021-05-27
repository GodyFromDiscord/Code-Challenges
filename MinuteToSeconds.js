/* We will be creating a function where the user enters an integer in minutes that is converted to seconds */

function conversion(minutes){
  if(isNaN(minutes)) throw new SyntaxError("You must provide a real number")

  /* Error checking to check if the number is an actual number */
  
  const result = minutes * 60

  return console.log(`${minutes} minutes is the equivalent of ${result} seconds`)
}

conversion(100)