// Global scope

// Generate Password button
const generateBtn = document.querySelector("#generate");

// Declare criteria strings
const lowercase = "abcdefghijklmnopqrstuvwxyz";

const lowercaseArray = lowercase.split("");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const uppercaseArray = uppercase.split("");

const number = "0123456789";

const numberArray = number.split("");

const special = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

const specialArray = special.split("");

// Array to hold selected criteria
const criteriaArray = [];

// Array to hold createPassword output
const resultArray = [];

const getPasswordLength = () => {
  // Prompt user for password length of 8-128 characters and store in variable of userLength
  const userLength = prompt(
    "How many characters would you like your password to have? Please enter a number of minimum 8 and maximum 128."
  );

  const userLengthInt = parseInt(userLength);

  // Validate input as number 8-128
  if (userLengthInt >= 8 && userLengthInt <= 128) {
    // If valid, confirm criteria
    // Convert userLength to integer and store as getPasswordLength
    return userLengthInt;
  } else {
    // If invalid, alert user
    alert(
      "Invalid input. Please use numeric digits to enter a number of minimum 8 and maximum 128."
    );
    getPasswordLength();
  }
};

// Get criteria for password and push to array
const getPasswordCriteria = () => {
  // Ask user to confirm criteria
  const lowercaseRequired = confirm(
    "Would you like to include lowercase letters?"
  );
  if (lowercaseRequired == true) {
    criteriaArray.push.apply(criteriaArray, lowercaseArray);
    console.log(criteriaArray);
  }

  const uppercaseRequired = confirm(
    "Would you like to include uppercase letters?"
  );
  if (uppercaseRequired == true) {
    criteriaArray.push.apply(criteriaArray, uppercaseArray);
    console.log(criteriaArray);
  }

  const numberRequired = confirm("Would you like to include numbers?");
  if (numberRequired == true) {
    criteriaArray.push.apply(criteriaArray, numberArray);
    console.log(criteriaArray);
  }

  const specialRequired = confirm(
    "Would you like to include special characters?"
  );
  if (specialRequired == true) {
    criteriaArray.push.apply(criteriaArray, specialArray);
    console.log(criteriaArray);
  }

  if (criteriaArray.length > 0) {
    // create password
    console.log(criteriaArray.length);
    return criteriaArray;
  } else {
    alert(
      "Please select at least one criteria to include in your password generation."
    );
    getPasswordCriteria();
  }
};

// ISSUE WITHIN THIS BLOCK>>>
const createPassword = (passwordLength, passwordCriteria) => {
  // get criteria
  console.log(passwordLength);
  // loop over criteria array
  for (let i = 0; i < passwordLength; i += 1) {
    const randomCharacter =
      passwordCriteria[Math.floor(Math.random() * passwordCriteria.length)];

    // // push to result array
    resultArray.push(randomCharacter);
  }

  // convert result array to string
  console.log(resultArray);
  return resultArray.join("");
};

// ---Starter code---do not change---

// main function to generate the random password
const generatePassword = () => {
  // get password length
  const passwordLength = getPasswordLength();
  console.log(passwordLength);
  // get password criteria
  const passwordCriteria = getPasswordCriteria();
  console.log(passwordCriteria);
  // create password
  const password = createPassword(passwordLength, passwordCriteria);
  console.log(password);

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
