// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var pwEl = document.querySelector("#password");
var lwCaseQ = false;
var upCaseQ = false;
var numQ = false;
var spcCharQ = false;
var trueCount = 0;
var numChar = 0;
var userString = "";

// Write password to the #password input
function writePassword() {
  resetQuestions();
  password = "";
  pwEl.value = password;
  generatePassword();
  // pwEl.value = password;
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
  else {
    alert("Your password must be between 8 and 128 characters only.");
    generatePassword();
  }
}

function startQuestions() {
  lwCaseQ = confirm("Do you want to include lowercase characters?");
  if (lwCaseQ == true) {
    lowerCase();
    trueCount += 2;
  }
  upCaseQ = confirm("Do you want to include uppercase characters?");
  if (upCaseQ == true) {
    upperCase();
    trueCount += 2;
  }
  numQ = confirm("Do you want to include numbers?");
  if (numQ == true) {
    numberGen();
    trueCount += 2;
  }
  var spcCharQ = confirm("Do you want to include special characters?");
  if (spcCharQ == true) {
    specialChar();
    trueCount += 2;
  }
}

function lowerCase() {
  var lwcse = "abcdefghijklmnopqrstuvwxyz";
  userString += lwcse;
  for (var x = 0; x < 2; x++) {
    var i = Math.floor(Math.random() * lwcse.length);
    password += lwcse.charAt(i);
  }
}


function upperCase() {
  var upcse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  userString += upcse;
  for (var x = 0; x < 2; x++) {
    var i = Math.floor(Math.random() * upcse.length);
    password += upcse.charAt(i);
  }
}

function numberGen() {
  var nums = "0123456789";
  userString += nums;
  for (var x = 0; x < 2; x++) {
    var i = Math.floor(Math.random() * nums.length);
    password += nums.charAt(i);
  }
}

function specialChar() {
  var spcChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  userString += spcChar;
  for (var x = 0; x < 2; x++) {
    var i = Math.floor(Math.random() * spcChar.length);
    password += spcChar.charAt(i);
  }
}

function resetQuestions() {
  lwCaseQ = false;
  upCaseQ = false;
  numQ = false;
  spcCharQ = false;
}

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
  pwEl.value = password;
}