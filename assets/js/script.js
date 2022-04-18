// Global scope

// Declare criteria strings and split into array
const lowercase = "abcdefghijklmnopqrstuvwxyz";

const lowercaseArray = lowercase.split("abcdefghijklmnopqrstuvwxyz");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const uppercaseArray = uppercase.split("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

const number = "0123456789";

const numberArray = number.split("0123456789");

const special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const specialArray = special.split(" !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~");

// Generate Password button
const generateBtn = document.querySelector("#generate");

const getPasswordLength = () => {
  // Prompt user for password length of 8-128 characters and store in variable of userLength
  const userLength = prompt(
    "How many characters would you like your password to have? Please enter a number of minimum 8 and maximum 128."
  );
  // Validate input as number 8-128
  // If valid, confirm criteria
  if (userLength >= 8 && userLength <= 128) {
    // Convert userLength to integer and store as getPasswordLength
    return parseInt(userLength);
  } else {
    // If invalid, alert user
    alert(
      "Invalid input. Please use numeric digits to enter a number of minimum 8 and maximum 128."
    );
  }
};

// Get criteria for password and push to array
const getPasswordCriteria = () => {
  // Ask user to confirm criteria
  const lowercaseRequired = confirm(
    "Would you like to include lowercase letters?"
  );

  const uppercaseRequired = confirm(
    "Would you like to include uppercase letters?"
  );

  const numberRequired = confirm("Would you like to include numbers?");

  const specialRequired = confirm(
    "Would you like to include special characters?"
  );
};

// const getPasswordCriteria = (lowercase, uppercase, number, special) => {
//   return [lowercaseArray, uppercase, number, special];
// };

const createPassword = () => {
  // if (lowercaseRequired == true) {
  //   getPasswordCriteria.push(lowercaseArray);
  // }
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
