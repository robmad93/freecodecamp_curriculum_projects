/*
User Stories:

You should create a variable named currentDate and assign it the current date and time using the Date object.
You should create a variable named currentDateFormat and assign it the string Current Date and Time: [current date]. Replace [current date] with the result of the currentDate variable.
You should log the value of currentDateFormat to the console.
You should create a function named formatDateMMDDYYYY that takes the date object as a parameter. You can name this parameter whatever you like.
Your formatDateMMDDYYYY function should convert the current date to month/day/year format and return the string Formatted Date (MM/DD/YYYY): [month]/[day]/[year].
You should create a function named formatDateLong that takes the date object as a parameter.
Your formatDateLong function should convert the current date to Month Day, Year format and return the string Formatted Date (Month Day, Year): [formatted date].
*/

const currentDate = new Date();
const currentDateFormat = `Current Date and Time: ${currentDate}`;
console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString()}`
}

function formatDateLong(date) {
  const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};
  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`
}