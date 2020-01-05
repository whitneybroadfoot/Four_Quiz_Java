//main variables 
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
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
    }

  ],

  //options for choosing
  index: 0,
  load: function () {
    if (this.index <= this.questions.length - 1) {
      quizBox.innerHTML = this.index + 1 + "." + this.questions[this.index].title;
      one.innerHTML = this.questions[this.index].choices[0];
      two.innerHTML = this.questions[this.index].choices[1];
      three.innerHTML = this.questions[this.index].choices[2];
      four.innerHTML = this.questions[this.index].choices[3];
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
  check: function (element) {

    var id = element.id.split('');

    if (id[id.length - 1] == this.questions[this.index].answer) {
      element.className = "correct";
      element.innerHTML = "Correct";
    }
    else {
      element.className = "wrong";
      element.innerHTML = "Wrong";
    }
  },

  clickAble: function () {
    for (let i = 0; i < ul.children.length; i++) {
      ul.children[i].style.pointerEvents = "auto";
      ul.children[i].className = ""

    }
  },
  

}

window.onload = app.load();

function button(element) {
  app.check(element);
}

function next() {
  app.next();
  app.clickAble();
} 
