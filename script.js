"use strict";

const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let quizQuestionCounter = 0;
let quizScore = 0;

const quizContainer = document.getElementById("quiz");
const questionEl = document.querySelector(".question");
const optionA = document.getElementById("a_text");
const optionB = document.getElementById("b_text");
const optionC = document.getElementById("c_text");
const optionD = document.getElementById("d_text");
const allOptions = document.querySelectorAll(".answer");

const submitBtn = document.querySelector("button");

loadQuiz();

function loadQuiz() {
  const currentQuizQuestion = quizData[quizQuestionCounter];
  questionEl.innerText = currentQuizQuestion.question;
  optionA.innerText = currentQuizQuestion.a;
  optionB.innerText = currentQuizQuestion.b;
  optionC.innerText = currentQuizQuestion.c;
  optionD.innerText = currentQuizQuestion.d;
}

submitBtn.addEventListener("click", function () {
  checkAnswer();
});

function checkAnswer() {

  let answer = "none";

  allOptions.forEach(ans => {
    if (ans.checked) answer = ans.getAttribute("data-answer");
  });

  if (answer === "none") return;

  if (quizData[quizQuestionCounter].correct === answer) quizScore++;

  quizQuestionCounter++;

  if (quizQuestionCounter > quizData.length - 1) {
    quizContainer.innerHTML = `
      <h2>You scored ${quizScore}/${quizData.length} questions correctly.</h2>

      <button onClick = location.reload()>Play again.</button>
    `;
    return;
  }

  loadQuiz();
  unSelectAllOptions();
}

function unSelectAllOptions() {
  allOptions.forEach(ans => {
    ans.checked = false;
  });
}