// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var numChar = prompt("How many characters (between 8-128) do you want your password to be?");
  // If user enters number >= 8 or <= 128, then run this code
  if (numChar >= 8 && numChar <= 128) {
    var lwCase = confirm("Do you want to include lowercase characters?")
  }
  else {
    alert("Your password must be between 8 and 128 characters only.");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
