function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let startIndex = 0;
  if (alphabet.includes(str[0])) {
    startIndex = alphabet.indexOf(str[0])
  } for (let i = 0; i < str.length; ++i) {
        if (alphabet[startIndex + i] !== str[i]) {
          return alphabet[startIndex + i];
      }
  } return undefined;
}