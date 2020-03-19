
// get the password input lenght function:
function getPassLenght() {
  var pass_length = prompt("How many caracters would you like to have in the new password? Enter a valid number between 8 and 128");
  if (pass_length < 8 || pass_length > 128) {
    alert("Error, enter a valid number between 8 and 128");
    return -1;
  } else {
    return parseInt(pass_length);
  }
}

//function get the character types to include in the password
function getCharSets() {

  //creating the character types
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var numeric = "0123456789";
  var specialcharacter = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

  //empty array
  var charSets = [];

  //prompt user window asking the user which type of character they want
  var useLowercase = confirm("Would you like to use lowercase characters?", "Yes", "No");
  if (useLowercase) {
    charSets.push(lowercase);
  }
  var useUppercase = confirm("Would you like to use uppercase characters?");
  if (useUppercase) {
    charSets.push(uppercase)
  }
  var useNumeric = confirm("Would you like to use numeric characters?");
  if (useNumeric) {
    charSets.push(numeric);
  }
  var useSpecialcharacter = confirm("Would you like to use special characters?");
  if (useSpecialcharacter) {
    charSets.push(specialcharacter);
  }

  //validate if the user select at least one group of character
  if (charSets.length < 1) {
    alert("Error, you have to select at least one character group");
  }
  return charSets;
}


//function generate password
function generatePassword() {

  //variables
  var passLength = getPassLenght();

  if (passLength < 1)
    return "";

  var charSets = getCharSets();

  if (charSets.length < 1)
    return "";

  var newPassword = '';

  //for loop to generate the new password
  for (var i = 0; i < passLength; i++) {

    var charSetIndex = i % charSets.length;
    var charSet = charSets[charSetIndex];
    var randomIndex = Math.floor(Math.random() * charSet.length);

    newPassword += charSet.charAt(randomIndex);
  }
  return newPassword;
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
