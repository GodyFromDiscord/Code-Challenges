# We will be creating a function where the user enters an integer in minutes that is converted to seconds 

def conversion(minutes):
  if type(minutes) != int:
    print("You must provide a real number")
  else:
    result = minutes * 60
    print(f"{minutes} minutes is the equivalent of {result} seconds")

conversion(50)