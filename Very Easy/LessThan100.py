# A function is created to check if a number provided is less than 100

def lessThan100(number):
  if type(number) != int:
    print("You must provide a real number.")
  else:
    print(f"{number} is greater than 100.") if number > 100 else print(f"{number} is not greater than 100.")

lessThan100(50)