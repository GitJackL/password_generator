// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
// possibleCharacters refer to the choices made by the user via the getPasswordOptions function
let possibleCharacters = [];
let length;


// Function to prompt user for password options
// getPasswordOptions coverts the choices made by the user from a string to a number and stores them as a variable
function getPasswordOptions() {
 length = prompt("How many charcters would you like your password to be?(Between 10 and 64)");
  length = parseInt(length);
  if (length < 10 || length > 64) {
    alert("Password must be between 10 and 64 charcters long")
    getPasswordOptions();
  }

  var lowerCase = confirm("Would you like your password to contain lowercase?");
  var upperCase = confirm("Uppercase in your password?")
  var numbers = confirm("What about numbers? You like numbers?");
  var specialishCharacters = confirm("And finlly, what about those special charcters being apart of your password?")
  // a loop is created for if the user replies false to all the confirm functions in the getPasswordOptions function which 
  // brings them back to the beginning with a message to make the user aware

  if(lowerCase === false &&
     upperCase === false &&
     numbers === false &&
     specialishCharacters === false){
      alert("At least one type of charcters must be chosen")
      
      // once all qualifiers have been met, the users selections are ready to for our next function
      getPasswordOptions();
     }
     if (lowerCase) {
      possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
     }
     if (upperCase) {
      possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
     }
     if (numbers) {
      possibleCharacters = possibleCharacters.concat(numericCharacters);
     }
     if (specialishCharacters) {
      possibleCharacters = possibleCharacters.concat(specialCharacters);
     }
  alert("Your password is being prepared");
}

// Function for getting a random element from an array
// getRandom is the function that will create our password
function getRandom(arr) {
let randomCharacter = arr [Math.floor(Math.random()* arr.length)];
console.log("randomCher = ", randomCharacter);
return randomCharacter;
}

// Function to generate password with user input
// generatePasssword function takes the data created via getPasswordOptions and runs the getRandom function
// on those values to create and return the new password to the user
function generatePassword() {
  getPasswordOptions()
  let randomPassword = "";
  for(let i=0; i<length; i++){
  randomPassword += getRandom(possibleCharacters);
  }
 
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


