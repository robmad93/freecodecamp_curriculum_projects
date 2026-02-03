function mutation(array) {
  const firstWord = array[0].toLowerCase();
  const secondWord = array[1].toLowerCase();
  for (const letter of secondWord) {
    if (!firstWord.includes(letter)) {
      return false;
    }
  }
  return true;
}