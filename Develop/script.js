// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
var pwEl = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  password = "";
  pwEl.value = password;
  generatePassword();
  pwEl.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var numChar = prompt("How many characters (between 8-128) do you want your password to be?");
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
  lowerCase();
  upperCase();
  numberGen();
  specialChar();

}

function lowerCase() {
  var lwcse = "abcdefghijklmnopqrstuvwxyz";
  var lwCaseQ = confirm("Do you want to include lowercase characters?");
  if (lwCaseQ == true) {
    for (var x = 0; x < 2; x++) {
      var i = Math.floor(Math.random() * lwcse.length);
      password += lwcse.charAt(i);
    }
  }
}


function upperCase() {
  var upcse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var upCaseQ = confirm("Do you want to include uppercase characters?");
  if (upCaseQ == true) {
    for (var x = 0; x < 2; x++) {
      var i = Math.floor(Math.random() * upcse.length);
      password += upcse.charAt(i);
    }
  }
}

function numberGen() {
  var nums = "0123456789";
  var numQ = confirm("Do you want to include numbers?");
  if (numQ == true) {
    for (var x = 0; x < 2; x++) {
      var i = Math.floor(Math.random() * nums.length);
      password += nums.charAt(i);
    }
  }
}

function specialChar() {
  var spcChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var spcCharQ = confirm("Do you want to include special characters?");
  if (spcCharQ == true) {
    for (var x = 0; x < 2; x++) {
      var i = Math.floor(Math.random() * spcChar.length);
      password += spcChar.charAt(i);
    }
  }
}