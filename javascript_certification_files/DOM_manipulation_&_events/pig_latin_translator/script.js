function translatePigLatin(str) {
  if (/^[aeiou]/i.test(str)) {
    return str + "way";
  }
  const index = str.search(/[aeiou]/i)
  if (index === -1) {
    return str + "ay";
  }
  return str.slice(index) + str.slice(0, index) + "ay";
}