function findLongestWordLength(string) {
  let longestWord = "";
  const words = string.trim().split(" ");

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord.length;
}