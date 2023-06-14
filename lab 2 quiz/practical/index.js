//quiz function take array parameter
function Quiz(question){
    this.question=question;
    this.score=0;
    this.questionIndex=0;
}

//check function is ended
Quiz.prototype.isEnded=function(){
    return this.questionIndex===this.question.length;
}

//get question by its index
Quiz.prototype.getQuestionbyIndex=function(){
    return this.question[this.questionIndex];
}

//check question with answer is right 
Quiz.prototype.checkOptionWithAnswer = function(userAnswer){
    
    if(this.getQuestionbyIndex().isCorrectAnswer(userAnswer)){
        this.score++;
        
    }
    this.questionIndex++;
}

//take single question 
function Question(questionText,choices,answer){
    this.questionText=questionText;
    this.choices=choices;
    this.answer=answer;
}

Question.prototype.isCorrectAnswer=function(useranswer){
   
 return  this.answer===useranswer;
    
}


function loadQuestion(){

    if(quiz.isEnded()){
        showScores();
    }else{

       
         // show question
         let question = quiz.getQuestionbyIndex();
         //console.log(question)
         var element = document.getElementById("question");
         //console.log(element)
         element.innerText = question.questionText;
        // console.log(question.questionText)
   
         // show options
         var choices = question.choices;
         //console.log(choices)
         for(var i = 0; i < choices.length; i++) {
             var element = document.getElementById('choice'+i);
             //console.log('choice'+i)
             element.innerText = choices[i];
             handleOptionButton("btn" + i, choices[i]);

        showProgress();
    }

}
}

//this function is used for handle every click action 
function handleOptionButton(id,choice){
    let button=document.getElementById(id);
    button.onclick=function (){
        var button = document.getElementById(id);
            quiz.checkOptionWithAnswer(choice);
            loadQuestion();
       

    }
}


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.question.length;
}


function showScores(){
    let quizOverHTML = "<h1>Result</h1>";
    quizOverHTML+= "<h2> Your score: " + quiz.score + ". & mark percentage is: " + (quiz.score*100/quiz.question.length) +"% </h2>";
   
    document.getElementById("quiz").innerHTML = quizOverHTML;
    console.log( document.getElementById("quiz"))
}   

//this is array whoich hold object inside to processs
let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML","CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery","Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
  ];

  //to create obj for quiz function
let quiz = new Quiz(questions);

//load function 
loadQuestion();


