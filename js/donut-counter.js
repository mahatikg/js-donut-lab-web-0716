//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.

//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.

  var guests;
  var donuts;

  var donuts_count = prompt("Please insert the number of Donuts")
  var guests_count = prompt("Please insert the number of Guests")

  var guests = parseInt(guests_count)
  var donuts = parseInt(Donuts_count)

  if (guests < donuts) {
    alert("There are enough donuts for each guest")
  }
  else {
    return "There are not enough donuts for each guest to have one"
  }
