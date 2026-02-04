let contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (let contact of contacts) {
    if (contact.firstName === name) {
      if (contact.hasOwnProperty(prop)) {
        return contact[prop]; // Remember: When the property name comes from a variable, dot notation will NOT work. Only bracket notation will work.
      } 
      return "No such property"; // Remember: return exits the function, so if the name and prop exist, the function would have exited. Hence, no need for the "else" keyword.
    } 
  } 
  return "No such contact"; // Only after the for loop should this line run i.e., once it has checked every contact.
}