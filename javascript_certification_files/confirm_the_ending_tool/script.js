// This is a solution that doesn't use .endsWith()

function confirmEnding(string1, string2) {
  let n = string2.length;
  return string1.slice(-n) === string2; // IMPORTANT: A negative number for slice means start counting from the end of the string. So if string2 is "ish" (n = 3), then .slice(-1) = "h", .slice(-2) = "sh", and .slice(-3) = "ish".
}