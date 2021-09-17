// Importing libraries
var readLineSync = require('readline-sync');
var chalk=require('chalk');

//Global variable to hold final score
var score = 0;

//Introduction
function welcome()
{
  var userName=readLineSync.question(chalk.yellow("What is your name? "));
  console.log(chalk.green("Welcome "+userName+" to DO YOU KNOW NIKHIL !!! "));
  console.log('\n');
}


//Question list
var questionList = [
  {
    question: "Where do I live? ",
    options: ['Raipur', 'Bhilai', 'Korba'],
    answer: "Raipur"
  },
  {
    question: "Where do I work? ",
    options: ['Google', 'Amazon', 'FactSet'],
    answer: "FactSet"
  },
  {
    question: "What would be my age? ",
    options: ['25', '23', '30'],
    answer: "23"
  },
  {
    question: "Who is my super hero? ",
    options: ['Batman', 'Spiderman', 'Superman'],
    answer: "Spiderman"
  },
  {
    question: "My favourite movie would be: ",
    options: ['Krish', 'Race', '3 idiots'],
    answer: "3 idiots"
  },
]

//High scores list
var highScores = [
  {
    name: "Rancho",
    score: 10
  },
  {
    name: "Farhan",
    score: 9
  },
  {
    name: "Raju",
    score: 8
  },
]

// Quiz function
function quiz(question, options, answer) 
{
  console.log(chalk.yellow(question));

  var index = readLineSync.keyInSelect(options, 'Select your answer by pressing a key from ', { cancel: 'Skip this question' });
  console.log('\n');


  if (options[index] === answer) 
  {
    score = score + 1;
    console.log(chalk.green("Right answer !!"));
  }


  else if (index === -1) 
  {
    console.log(chalk.blue("Question Skipped !!"));
  }



  else 
  {
    score = score - 1;
    console.log(chalk.red("Wrong answer !!"));
  }


  console.log("Current score " + score);
  console.log("---------------------");
  console.log('\n');
}

// playQuiz function
function playQuiz()
{
  for (var i = 0; i < questionList.length; i = i + 1) 
  {
    quiz(questionList[i].question, questionList[i].options, questionList[i].answer);
  } 
}

function getScore()
{
  console.log(chalk.blue("Your final score is " + score));
  console.log(chalk.blue("High scores are: "));
  for (var i = 0; i < highScores.length; i++) 
  {
    console.log(highScores[i]);
  }
}

// calling functions
welcome();
playQuiz();
getScore();

console.log('\n');
console.log(chalk.red("If you beat the high score share your screenshot and I'll update it "));