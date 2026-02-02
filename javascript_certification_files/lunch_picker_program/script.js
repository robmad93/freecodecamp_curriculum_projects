const lunches = [];
function addLunchToEnd(array, string) {
  array.push(string);
  console.log(`${string} added to the end of the lunch menu.` );
  return array;
}

function addLunchToStart(array, string) {
  array.unshift(string);
  console.log(`${string} added to the start of the lunch menu.`);
  return array;
}

function removeLastLunch(array) {
  const lastItem = array.pop();
  if (array.length === 0) {
    console.log("No lunches to remove.")
  }
  else {
    console.log(`${lastItem} removed from the end of the lunch menu.`);
  }
  return array;
}

function removeFirstLunch(array) {
  const firstItem = array.shift();
  if (array.length === 0) {
    console.log("No lunches to remove.")
  } else {
  console.log(`${firstItem} removed from the start of the lunch menu.`)
  }
  return array;
}

function getRandomLunch(array) {
  if (array.length === 0) {
    console.log("No lunches available.")
  } else {
    let randomNumber = Math.floor(Math.random() * array.length);
    console.log(`Randomly selected lunch: ${array[randomNumber]}`);
  }
}

function showLunchMenu(array) {
  return (array.length === 0) ? console.log("The menu is empty.") : console.log(`Menu items: ${array.join(", ")}`);
}