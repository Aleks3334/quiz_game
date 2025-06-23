import questions  from "./questions"

//Initial data

let selectCategory = ""
let selectQuestionCount = 0
let currentQuestion = 0
let score = 0

//DOM Elements

const configContainer = document.querySelector(".config-container")
const categoryOptions = document.querySelectorAll(".category-option")
const questionOptions = document.querySelectorAll(".question-option")
const startQuizBtn = document.querySelector(".start-quiz-btn")

const quizContainer = document.querySelector(".quiz-container")
const timeDuration = document.querySelector(".time-duration")
const quizQuestion = document.querySelector(".quiz-question")
const answerOption = document.querySelectorAll(".answer-option")
const questionStatus = document.querySelector(".question-status")
const nextQuestionBtn = document.querySelector(".next-question-btn")

const resultContainer = document.querySelector(".result-container")
const resultMessage = document.querySelector(".result-message")
const tryAgainBtn = document.querySelector(".try-again-btn")

//Select Category

categoryOptions.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryOptions.forEach(button => button.classList.remove("active"))
        btn.classList.add("active")
        selectCategory = btn.textContent.trim()
    })
})

questionOptions.forEach(btn => {
    btn.addEventListener("click", () => {
        questionOptions.forEach(button => button.classList.remove("active"))
        btn.classList.add("active")
        selectQuestionCount = parseInt(btn.textContent)
    })
})

startQuizBtn.addEventListener("click", ()=>{
    if (!selectCategory || !selectQuestionCount) {
        alert("choose category or question count")
        return
    }
    configContainer.style.display = "none"
    quizContainer.style.display = "block"
    const categoryData = questions.find(cat => cat.category === selectCategory)
    if (!categoryData) {
        alert("There is nothing")
        return
    }
    const total = categoryData.questions.length()
    const shuffled = [...categoryData.questions].sort(() => Math.floor(Math.random()-0.5))
    const replaced = shuffled.slice(0,selectQuestionCount)
    startQuiz(replaced)
})  
const quizQuestions = []
function startQuiz(data) {
   quizQuestions = data
   currentQuestion = 0
   score = 0

   showQuestion()
}

function showQuestion() {
    const questionShow = quizQuestions[currentQuestion]

    quizQuestion.textContent = `${currentQuestion + 1}. ${questionShow.question}`
    answerOption.forEach((btn, i) => {
        btn.textContent = questionShow.option[i]
        btn.className = "answer-option"
        btn.onclick = () => checkAnswer(btn, i)
    })
    questionStatus.textContent = `Question ${currentQuestion + 1} of ${selectQuestionCount}`
    nextQuestionBtn.style.display = "none"
}

function checkAnswer(button, selectedIndex) {
    const correctAnswerIndex = quizQuestions[currentQuestion].correctAnswer

    if (selectedIndex === correctAnswerIndex) {
        button.classList.add("correct")
        score++
    }
    else{
        button.classList.add("incorrect")
        answerOption[correctAnswerIndex].classList.add("correct")
    }
    nextQuestionBtn.style.display = "block"
}