document.getElementById("generate").addEventListener("click", function () {
  // Prompt for password length
  var passwordLength = parseInt(
    prompt("Enter the password length (between 8 and 128 characters):")
  );

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128 characters.");
    return;
  }

  // Prompt for character types
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate at least one character type is selected
  if (
    !includeLowercase &&
    !includeUppercase &&
    !includeNumeric &&
    !includeSpecial
  ) {
    alert("Please select at least one character type.");
    return;
  }

  // Generate password
  var password = generatePassword(
    passwordLength,
    includeLowercase,
    includeUppercase,
    includeNumeric,
    includeSpecial
  );

  // Display the generated password
  document.getElementById("password").value = password;
  alert("Password generated successfully!");
});

function generatePassword(
  length,
  includeLowercase,
  includeUppercase,
  includeNumeric,
  includeSpecial
) {
  var charset = "";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=<>?";

  if (includeLowercase) {
    charset += lowercaseChars;
  }

  if (includeUppercase) {
    charset += uppercaseChars;
  }

  if (includeNumeric) {
    charset += numericChars;
  }

  if (includeSpecial) {
    charset += specialChars;
  }

  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}
