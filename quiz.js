//main variables 
var ul = document.getElementById('ul');
var btn = document.getElementById('button');
var quizBox = document.getElementById('questionBox');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');

//questions 
var app = {
  questions: [

    {
      title: "How long did it take to write the very first song from the musical?",
      choices: ["One week", "One month", "One year", "One day"],
      answer: 2
    },

    {
      title: "The musical originally debuted on Broadway ____.",
      choices: ["the early 1990's", "in 2020 after Disney+", "Summer of 2015", "in 2005"],
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
    console.log("check function", element); 

    var id = element.id
    console.log("checking id", id);

    console.log("comparing", this.questions[this.index].answer);
    if (id -1 === this.questions[this.index].answer) {
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
//end of the app curly bracket

window.onload = app.load();

function button(element) {
  console.log(element);
  app.check(element);
}

function next() {
  app.next();
  app.clickAble();
} 
