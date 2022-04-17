// Global scope

const criteria = [
  {
    category: "lowercase",
    string: "abcdefghijklmnopqrstuvwxyz",
    text: "Would you like to include lowercase letters?",
  },
  {
    category: "uppercase",
    string: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    text: "Would you like to include uppercase letters?",
  },
  {
    category: "0123456789",
    string: "abcdefghijklmnopqrstuvwxyz",
    text: "Would you like to include numbers?",
  },
  {
    category: "special",
    string: " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~",
    text: "Would you like to include special characters?",
  },
];

// Prompt user for password length of 8-128 characters and store in variable of userLength
const userLength = prompt(
  "How many characters would you like your password to have? Please enter a number of minimum 8 and maximum 128."
);

// Convert userLength to integer
const userLengthInt = parseInt(userLength);

/* Validate input
If valid, store integer as getPasswordLength
If invalid, alert user
*/
if (userLengthInt >= 8 && userLengthInt <= 128) {
  const getPasswordLength = userLengthInt;
} else {
  alert(
    "Invalid input. Please use numeric digits to enter a number of minimum 8 and maximum 128."
  );
}

// Get criteria for password and push to array
const getPasswordCriteria = () => {
  return [lowercase, uppercase, number, special];
};

const createPassword = () => {
  return "Cherelle8!";
};

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
