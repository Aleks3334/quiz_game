let quizCategory = "Technology"

const getRandomQuestion = () => {
    const categoryQuestions = questions.find(object => object.category.toLowerCase() === quizCategory.toLowerCase()).questions
    const randomQuestion = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]

    console.log(randomQuestion);

}


const renderQuestion = () =>{
    
}


getRandomQuestion()