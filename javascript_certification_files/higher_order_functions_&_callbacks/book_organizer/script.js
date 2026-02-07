/*
User Stories:

You should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

Your books array should have a minimum of three objects.

You should have a callback function named sortByYear that accepts two books as parameter for sorting the array.

The sortByYear function should return -1 if the releaseYear of the first book is smaller than that of the second book.

The sortByYear function should return 1 if the releaseYear of the first book is bigger than that of the second book.

The sortByYear function should return 0 if both releaseYear values are equal.

You should filter out books written after a certain year such as 1950 from the books array and save the filtered array in a new array named filteredBooks.

You should sort the books in the filteredBooks array according to their releaseYear in ascending order. You learned in a prior lesson that the sort() method will sort the array in place. This means the filteredBooks array will be mutated.
*/

let books = [{
  title: "Jerusalem: The Biography",
  authorName: "Simon Sebag Montefiore",
  releaseYear: 2011
},
{
  title: "The Golden Road",
  authorName: "William Dalrymple",
  releaseYear: 2024
},
{
  title: "Atomic Habits",
  authorName: "James Clear",
  releaseYear: 2018
},
{
  title: "Breath: The New Science of a Lost Art",
  authorName: "James Nestor",
  releaseYear: 2020
},
{
  title: "Can't Hurt Me: Master Your Mind and Defy the Odds",
  authorName: "David Goggins",
  releaseYear: 2018
}
]

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

let filteredBooks = books.filter(book => book.releaseYear <= 2020);

filteredBooks.sort(sortByYear);