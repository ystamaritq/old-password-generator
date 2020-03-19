
// get the password input lenght function:
function getPassLenght() {
  var pass_length = prompt("How many caracters do you like to have in the new password? Enter a valid number between 8 and 128");
  if (pass_length < 8 || pass_length > 128) {
    confirm("Error, enter a valid number (your password need at least 8 caracters)");
  } else {
    return pass_length;
  }
}

//function get the character types to include in the password:
function getCharactersTypes() {

  //creating the character types
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numeric = "0123456789";
  var specialcharacter = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //empty array
  var charSets = [];

  //prompt user window asking the user which type of character they want
  var useLowercase = prompt("What type of character do you want: lowercase?");
  if (useLowercase) {
    charSets.push(lowercase);
  }
  var useUppercase = prompt("What type of character do you want: uppercase?");
  if (useUppercase) {
    charSets.push(uppercase)
  }
  var useNumeric = prompt("What type of character do you want: user_numeric?");
  if (useNumeric) {
    charSets.push(numeric);
  }
  var useSpecialcharacter = prompt("What type of character do you want: user_specialcharacter?");
  if (useSpecialcharacter) {
    charSets.push(specialcharacter);
  }



  var countUserInputTotal = 0;
  countUserInputTotal = user_lowercasecount + user_uppercasecount + user_numericcount + user_specialcharactercount;

  //var countUserInputTotal
  if (countUserInputTotal < 1) {
    confirm("Error you have to select at least one type of character");
  } else {


  }



}







//function generate password
function generatePassword() {
  return getPassLenght();
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
