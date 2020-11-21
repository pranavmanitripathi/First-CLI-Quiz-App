var chalk=require('chalk');
var readlinesync=require('readline-sync');
var username=readlinesync.question(chalk.bold.green("what is your name? \n"));
console.log("welcome " +chalk.bold.yellow(username)+" to the quiz of pranav\n");
var score=0;


var questionone = {
  question: "Who is my favorite cricketer? \n",
  answer: "Sachin"
}

var questiontwo = {
  question: "Which is my favorite Marvel character?\n",
  answer: "Captain America"
}
var questionthree = {
    question: "Which is my favorite DC character?\n",
   answer: "Batman"
}

function quiz(question,answer){
  var useranswer=readlinesync.question(question);
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.bold.green("correct"));
    score+=1;

  }
  else{
    console.log(chalk.bold.red("Incorrect"));
    console.log(chalk.bold.cyan("Correct answer is : " + answer));
    score-=1;
  }

console.log(chalk.bold.yellow("current score: ")+ chalk.bold.blue(score));
console.log("--------------")
}

var questions=[questionone,questiontwo,questionthree];
for(var i=0;i<questions.length;i++){
   var currentquestion=questions[i];
   quiz(currentquestion.question,currentquestion.answer);
}

var highScores = [
  {
    name: "Pranav",
    score: 3,
  },
]

console.log(chalk.bold.yellow("You scored: ")+chalk.bold.blue(score));

console.log(chalk.bold.yellow("\nCurrent Scoreboard"));
for(var i=0;i<highScores.length;i++){
  console.log("Name: "+chalk.bold.green(highScores[i].name)+","+" Score: "+chalk.bold.green(highScores[i].score+"."));
}
console.log(chalk.bold.cyan("\nIf your score is greater than highscore then send      screenshot to me.\n"));


