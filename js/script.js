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
const nextQuestionBtn = document.querySelector("next-question-btn")

const resultContainer = document.querySelector(".result-container")
const resultMessage = document.querySelector(".result-message")
const trAgainBtn = document.querySelector(".try-again-btn")

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
        questionOptions.forEach(button => button.classList.remove("active"))btn.classList.add("active")
        selectQuestionCount = btn.textContent
    })
})

