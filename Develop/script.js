
var length = prompt("How many caracters do you like to have in the new password? Enter a valid number");

//function generate password
function generatePassword() {
  var caracters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  if (typeof length === 'integer' && length > 0) {
    for (var i = 0; i <= length; i++) {

    }
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
