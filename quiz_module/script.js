const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex, questionsCorrect

startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => { 
    currentQuestionIndex++
    setNextQuestion()
})

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsCorrect = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        questionsCorrect++
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Approximately how many people have been displaced as a result of the Yemen Crisis?',
        answers: [
            {text: '1 million', correct: false }, 
            {text: '2 million', correct: false },
            {text: '3 million', correct: false },
            {text: '4 million', correct: true },
        ]
    },
    {
        question: 'How many people have been killed since 2015?',
        answers: [
            {text: '50,000', correct: false }, 
            {text: '100,000', correct: true },
            {text: '500,000', correct: false },
            {text: '1 million', correct: false },
        ]
    },
    {
        question: 'Who are the two sides of the conflict?',
        answers: [
            {text: 'Yemeni government and Saudi-backed military vs. Iran-backed Houthi rebels', correct: true }, 
            {text: 'Yemeni government and Iran-backed military vs. Saudi-backed Houthi rebels', correct: false },
            {text: 'Yemeni government and Saudi-backed military vs. Iran-backed Sunni rebels', correct: false },
            {text: 'Yemeni government and Iran-backed military vs. Saudi-backed Sunni rebels', correct: false },
        ]
    },
    {
        question: 'Who currently controls the capital of Yemen (Sanaa)?',
        answers: [
            {text: 'Yemeni government and Saudi-backed military vs. Iran-backed Houthi rebels', correct: true }, 
            {text: 'Yemeni government and Iran-backed military vs. Saudi-backed Houthi rebels', correct: false },
            {text: 'Yemeni government and Saudi-backed military vs. Iran-backed Sunni rebels', correct: false },
            {text: 'Yemeni government and Iran-backed military vs. Saudi-backed Sunni rebels', correct: false },
        ]
    },
    {
        question: 'What does the Riyadh Agreement say?',
        answers: [
            {text: 'After the war, the Yemeni government will control the country', correct: false }, 
            {text: 'After the war, the Houthis will control the country', correct: false },
            {text: 'After the war, the two sides will share control', correct: true },
            {text: 'After the war, another group will control the country', correct: false },
        ]
    },
    {
        question: 'Which side does the US back?',
        answers: [
            {text: 'Yemeni government', correct: true }, 
            {text: 'Houthi', correct: false },
            {text: 'Both sides', correct: false },
            {text: 'None of the above', correct: false },
        ]
    },
    {
        question: 'When and how did the Yemeni crisis end?',
        answers: [
            {text: '50,000', correct: false }, 
            {text: '100,000', correct: true },
            {text: '500,000', correct: false },
            {text: '1 million', correct: false },
        ]
    },
    {
        question: 'What is the Yemen/ Yemeni Crisis?',
        answers: [
            {text: 'The biggest humanitarian crisis in the world.', correct: true }, 
            {text: 'An epidemic.', correct: false },
            {text: 'A crisis created from a natural disaster.', correct: false },
            {text: 'A hoax created by the U.S.', correct: false },
        ]
    },
    {
        question: 'What political group is currently in power in Yemen?',
        answers: [
            {text: 'ISIS', correct: false }, 
            {text: 'Al Qaeda', correct: false },
            {text: 'Hamas', correct: false },
            {text: 'Houthis', correct: true },
        ]
    },
    {
        question: 'When and how did the Yemeni crisis end?',
        answers: [
            {text: '2011, following the siege of Dammaj', correct: false }, 
            {text: '2012, with the democratic election of president Abradabbuh Mansur Hadi', correct: false },
            {text: '2019, following the withdrawal of UN troops from Yemen', correct: false },
            {text: 'Conflict is still ongoing', correct: true },
        ]
    },
]