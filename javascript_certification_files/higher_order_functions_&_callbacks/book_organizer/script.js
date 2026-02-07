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

function sortByYear(arr) {
  arr[releaseYear].sort(function(a, b){return a - b}) 
}