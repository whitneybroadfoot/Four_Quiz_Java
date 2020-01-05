//main variables live at top of js
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var scoreCard = document.getElementById('scoreCard');
var quizBox = document.getElementById('questionBox');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');

//questions for grabbing and looping
var app = {
  questions: [

    {
      title: "Commonly used data types DO NOT include",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: 2
    },

    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: 2
    },

    {
      title: "What year was Javascript initially created?",
      choices: ["2000", "1825", "1995", "1992"],
      answer: 3
    },

    {
      title: "Which symbol is used to create single line comments in Javascript?",
      choices: ["//", "question marks", "parentheses", "$$"],
      answer: 0
    },

    {
      title: "What text do you need to start building a for-loop?",
      choices: ["begin", "for", "start text", "none, just use square brackets"],
      answer: 1
    }

  ],

//options for choosing
  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizBox.innerHTML = this.index + 1 + ". " + this.questions[this.index].title;
      one.innerHTML = this.questions[this.index].choices[0];
      two.innerHTML = this.questions[this.index].choices[1];
      three.innerHTML = this.questions[this.index].choices[2];
      four.innerHTML = this.questions[this.index].choices[3];
      this.scoreCard();
    }
    else {

      quizBox.innerHTML = "Quiz Completed"
      one.style.display = "none";
      two.style.display = "none";
      three.style.display = "none";
      four.style.display = "none";
      five.style.display = "none";

    }
  },
  next: function () {
    this.index++;
    this.load();
  },
  check: function (ele) {

    var id = ele.id.split('');

    if (id[id.length - 1] == this.questions[this.index].answer) {
      this.score++;
      ele.className = "correct";
      ele.innerHTML = "Correct";
      this.scoreCard();
    }
    else {
      ele.className = "wrong";
      ele.innerHTML = "Wrong";
    }
  },
