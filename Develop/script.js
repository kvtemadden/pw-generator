// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var pwEl = document.querySelector("#password");
var lwCaseQ = false;
var upCaseQ = false;
var numQ = false;
var spcCharQ = false;
var numChar = 0;
var userString = "";

// Write password to the #password input
function writePassword() {
  resetQuestions();
  password = "";
  pwEl.value = password;
  generatePassword();
  showPassword();
  userString = "";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  numChar = prompt("How many characters (between 8-128) do you want your password to be?");
  // If user enters number >= 8 or <= 128, then run this code
  if (numChar >= 8 && numChar <= 128) {
    startQuestions();
  }
  //otherwise, if the user picks outside of the range 8-128, display this message and start again.
  else {
    alert("Your password must be between 8 and 128 characters only.");
    generatePassword();
  }
}

// List of if statements based on the user's preferences for a password, asks if they want to include x and then includes/ignores based on their decision.
function startQuestions() {
  lwCaseQ = confirm("Do you want to include lowercase characters?");
  if (lwCaseQ == true) {
    lowerCase();
  }
  upCaseQ = confirm("Do you want to include uppercase characters?");
  if (upCaseQ == true) {
    upperCase();
  }
  numQ = confirm("Do you want to include numbers?");
  if (numQ == true) {
    numberGen();
  }
  var spcCharQ = confirm("Do you want to include special characters?");
  if (spcCharQ == true) {
    specialChar();
  }
}

//Functions which run if the user chooses they want to include lowercase, uppcase, special characters or numbers in their password. This adds those characters to the password.
function lowerCase() {
  var lwcse = "abcdefghijklmnopqrstuvwxyz";
  userString += lwcse;
}


function upperCase() {
  var upcse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  userString += upcse;
}

function numberGen() {
  var nums = "0123456789";
  userString += nums;
}

function specialChar() {
  var spcChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  userString += spcChar;
}

//Resets the user's choices so if they click the generate button it'll run again as a fresh slate
function resetQuestions() {
  lwCaseQ = false;
  upCaseQ = false;
  numQ = false;
  spcCharQ = false;
}

//This adds random characters to make the rest of the password length up.
function showPassword() {
  debugger;
  numChar = parseInt(numChar, 10);
  while (numChar !== password.length) {
    for (var x = 0; x < 1; x++) {
      var i = Math.floor(Math.random() * userString.length);
      password += userString.charAt(i);
      x += 1;
    }
  }
  //Prints the password value on the page in the main box.
  pwEl.value = password;
}

function copyPW() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("Password copied to clipboard!");
}