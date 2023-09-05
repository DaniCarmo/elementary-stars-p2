let easyQuestions = [
    {
        question: "What color is the body of the boat?",
        answers: [
            { text: "Orange", correct: false },
            { text: "Blue", correct: true },
            { text: "Red", correct: false },
            { text: "Green", correct: false }
        ]
    },
    {
        question: "How many circle windows does the boat have?",
        answers: [
            { text: "Five", correct: false },
            { text: "Three", correct: false },
            { text: "Ten", correct: false },
            { text: "Eight", correct: true }
        ]
    },
    {
        question: "What animal can you see swimming by the boat?",
        answers: [
            { text: "Fish", correct: true },
            { text: "Dog", correct: false },
            { text: "Elephant", correct: false },
            { text: "Bird", correct: false }
        ]
    },
    {
        question: "What other animals swim in the sea?",
        answers: [
            { text: "Cats", correct: false },
            { text: "Giraffes", correct: false },
            { text: "Sheep", correct: false },
            { text: "Dolphins", correct: true }
        ]
    },
    {
        question: "What sea life starts with the letter 'S'?",
        answers: [
            { text: "Whale", correct: false },
            { text: "Shark", correct: true },
            { text: "Octopus", correct: false },
            { text: "Starfish", correct: false }
        ]
    }
];
let smartQuestions = [
    {
        question: "How many animals are in the picture above?",
        answers: [
            { text: "Five", correct: false },
            { text: "Eleven", correct: false },
            { text: "Nine", correct: true },
            { text: "Seven", correct: false }
        ]
    },
    {
        question: "What color is the animal beginning with 'M'?",
        answers: [
            { text: "White", correct: false },
            { text: "Pink", correct: false },
            { text: "Yellow", correct: false },
            { text: "Brown", correct: true }
        ]
    },
    {
        question: "What are the smallest and largest animals in the picture?",
        answers: [
            { text: "Mouse and Horse", correct: true },
            { text: "Dog and Chicken", correct: false },
            { text: "Bird and Sheep", correct: false },
            { text: "Pig and Horse", correct: false }
        ]
    },
    {
        question: "Which animal's name comes first in the alphabet?",
        answers: [
            { text: "Dog", correct: false },
            { text: "Chicken", correct: false },
            { text: "Sheep", correct: false },
            { text: "Bird", correct: true }
        ]
    },
    {
        question: "Where would you see these animals together?",
        answers: [
            { text: "Zoo", correct: false },
            { text: "Farm", correct: true },
            { text: "Circus", correct: false },
            { text: "Playground", correct: false }
        ]
    }
];
let masterQuestions = [
    {
        question: "What color is the body of the boat?",
        answers: [
            { text: "Orange", correct: false },
            { text: "Blue", correct: true },
            { text: "Red", correct: false },
            { text: "Green", correct: false }
        ]
    },
    {
        question: "How many circle windows does the boat have?",
        answers: [
            { text: "Five", correct: false },
            { text: "Three", correct: false },
            { text: "Ten", correct: false },
            { text: "Eight", correct: true }
        ]
    },
    {
        question: "What animal can you see swimming by the boat?",
        answers: [
            { text: "Fish", correct: true },
            { text: "Dog", correct: false },
            { text: "Elephant", correct: false },
            { text: "Bird", correct: false }
        ]
    },
    {
        question: "What other animals swim in the sea?",
        answers: [
            { text: "Cats", correct: false },
            { text: "Giraffes", correct: false },
            { text: "Sheep", correct: false },
            { text: "Dolphins", correct: true }
        ]
    },
    {
        question: "What sea life starts with the letter 'S'?",
        answers: [
            { text: "Whale", correct: false },
            { text: "Shark", correct: true },
            { text: "Octopus", correct: false },
            { text: "Starfish", correct: false }
        ]
    }
];
let difficulty = document.getElementById("difficulty").innerHTML;
let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
let questions = [];

if (difficulty === "Kindergarten Stars / Easy-Peasy") {
    questions = easyQuestions;
} else if (difficulty === "Kindergarten Stars / Smartie Pants") {
    questions = smartQuestions;
} else {
    questions = masterQuestions;
}


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectAnswer(e) {
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();