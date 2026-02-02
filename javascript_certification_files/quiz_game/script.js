const questions = [
  {
    category: "Geography",
    question: "What is the capital of Ireland?",
    choices: ["Dublin", "Cork", "Belfast"],
    answer: "Dublin",
  },
  {
    category: "History",
    question: "When did D-Day occur?",
    choices: ["July 6th, 1944", "June 6th, 1944", "June 9th, 1944"],
    answer: "June 6th, 1944",
  },
  {
    category: "Computer Science",
    question: "What language is named after a famous British comedy show?",
    choices: ["Java", "Rust", "Python"],
    answer: "Python",
  },
  {
    category: "Art",
    question: "Who painted Guernica, the famous painting depicting the Spanish Civil War?",
    choices: ["Salvador Dalí", "Pablo Picasso", "Vincent Van Gogh"],
    answer: "Pablo Picasso",
  },
  {
    category: "Biology",
    question: "Which of the following organelles does NOT have its own DNA?",
    choices: ["Chloroplast", "Mitochondria", "Lysosome"],
    answer: "Lysosome",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  return question.answer === computerChoice ? "The computer's choice is correct!" : `The computer's choice is wrong. The correct answer is: ${question.answer}`;
}
