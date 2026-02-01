const fortune1 = "Your cat will look very cuddly today.";
const fortune2 = "The weather will be nice tomorrow.";
const fortune3 = "Be cautious of your new neighbors."
const fortune4 = "You will find a new hobby soon.";
const fortune5 = "It would be wise to avoid the color red today.";

/*Code for getting a random number between 1 and 5. Another 
method would be to use Math.ceil(Math.random() * (5 - 1) + 1) since we want to include 5 */
let randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
let selectedFortune;

if (randomNumber === 1) {
  selectedFortune = fortune1;
}
else if (randomNumber === 2) {
  selectedFortune = fortune2;
}
else if (randomNumber === 3) {
  selectedFortune = fortune3;
}
else if (randomNumber === 4) {
  selectedFortune = fortune4;
}
else {
  selectedFortune = fortune5;
}

console.log(selectedFortune);
