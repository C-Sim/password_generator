// Global scope

const lowercase = "abcdefghijklmnopqrstuvwxyz";

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const number = "0123456789";

const special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

// Assignment Code
const generateBtn = document.querySelector("#generate");

// Prompt user for password length of 8-128 characters
const userLength = prompt(
  "How many characters would you like your password to have? Please enter a number of minimum 8 and maximum 128."
);

const getPasswordLength = () => {
  return 10;
};

const getPasswordCriteria = () => {
  return [lowercase, uppercase, number, special];
};

const createPassword = () => {
  return "Cherelle8!";
};

// - lowercase "abcdefghijklmnopqrstuvwxyz"
// - uppercase "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// - numeric "0123456789"
// - special characters " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// main function to generate the random password
const generatePassword = () => {
  // get password length
  const passwordLength = getPasswordLength();

  // get password criteria
  const passwordCriteria = getPasswordCriteria();

  // create password
  const password = createPassword(passwordLength, passwordCriteria);

  return password;
};

// Write password to the #password input
const writePassword = () => {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
