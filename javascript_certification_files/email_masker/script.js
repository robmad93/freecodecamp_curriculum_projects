let email = "johndoe@example.com";
function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const username = email.slice(0, atIndex);
  const firstChar = username[0];
  const lastChar = username[username.length -1];
  const maskMiddle = "*".repeat(username.length - 2);
  return firstChar + maskMiddle + lastChar + email.slice(atIndex);
  }

  console.log(maskEmail(email));