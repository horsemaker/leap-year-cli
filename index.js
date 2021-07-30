var readlineSync = require("readline-sync")

var year = parseInt(readlineSync.question("Enter a year: "))

function checkLeapYear () {
  if (year <= 0) {
    console.log("Enter a valid year!")
    return
  } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a leap year! :)") 
  } else {
    console.log(year, "is not a leap year! :(")
  }
}

checkLeapYear()