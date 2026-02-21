function translatePigLatin(str) {
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }
  const firstVowelIndex = str.search(/[aeiou]/i)
  if (firstVowelIndex === -1) {
    return str + "ay";
  }
  return str.slice(firstVowelIndex) + str.slice(0, firstVowelIndex) + "ay";
}