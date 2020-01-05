var score = 0;

var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "What year was Javascript initially created?",
    choices: ["2000", "1825", "1995", "1992"],
    answer: "1992"
  },
  {
    title: "Which symbol is used to create single line comments in Javascript?",
    choices: ["//", "question marks", "parentheses", "$$"],
    answer: "//"
  },
  {
    title: "What text do you need to start building a for-loop?",
    choices: ["begin", "for", "start text", "none, just use square brackets"],
    answer: "for"
  },

];


function quizFunction() {
  var doc = document.getElementById("myQuestions");
  //for
  doc.innerHTML = questions[0].title;
  for (var i = 0; i < 4; i++) {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = questions[0].choices[i];
    doc.appendChild(document.createElement("br"));
    doc.appendChild(btn);
  }

}


