const questions = [
    {
        question:"Which ASP Command Sends a Web Page To Another Web Page But Keeps The URl The Same ?",
        answers:[
            { text:'Session["URL"]',correct: false},
            { text:'Response.Redirect("URL")',correct: false},
            { text:'Server.Transfer("URL")',correct: true},
            { text:'Session.Transfer["URL"]',correct: false}
        ]
    },
    {
        question:"Which ASP command allows easy navigation between web pages in a web site?  The URL which the user sees changes also for each web page ?",
        answers:[
            { text:'Convert.ToString(number)',correct: false},
            { text:'Response.Redirect("URL")',correct: true},
            { text:'Server.Transfer("URL")',correct: false},
            { text:'Data Validation',correct: false}
        ]
    },
    {
        question:"Which is a server-side technology that allows tracking of data for all users of an application ?",
        answers:[
            { text:'View State',correct: false},
            { text:'Control State',correct: false},
            { text:'Session State',correct: false},
            { text:'Application State',correct: true}
        ]
    },
    {
        question:"What alters the layout of a web page ?",
        answers:[
            { text:'XML',correct: false},
            { text:' CSS',correct: true},
            { text:'Javascript',correct: false},
            { text:'XHTML',correct: false}
        ]
    }
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});



startQuiz();