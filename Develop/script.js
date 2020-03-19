
//function generate password
function generatePassword() {
  var pass_length = prompt("How many caracters do you like to have in the new password? Enter a valid number between 8 and 128");
  if (pass_length < 8) {
    confirm("Error, enter a valid number");
  }
}


// var caracters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
// var newpass = '';

// var times = caracters.length;
// if ((typeof pass_length === 'integer') && pass_length > 0) {
//   for (var i = 1; i <= pass_length; i++) {
//     newpass += caracters.charAt((Math.floor(Math.random)) * times);
//   }
// }
// return newpass;


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
