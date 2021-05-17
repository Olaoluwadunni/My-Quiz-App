const quizData = [
    {
        question: "How many ethnic groups do we have in Nigeria",
        a: "192",
        b: "250",
        c: "53",
        correct:  "b"
    },
    {
        question: "In Nigeria, democrazy day is now celebrated on",
        a: "June 12",
        b: "October 1",
        c: "May 17",
        correct: "a"
    },
    {
       question: "What year was JavaScript launched?",
       a:"1997",
       b: "2001",
       c: "none of the above",
       correct: "c"
    },
    {
       question: "Which African country first gained independence",
       a: "Liberia in 1847",
       b: "Ghana 1823",
       c: "Nigeria 1914",
       correct: "a"
    },
    {
        question: "When did Nigeria break diplomatic relations with Isreal?",
        a: "1883",
        b: "1920",
        c: "1972",
        correct: "c"
    },
    {
        question: "What was the most used programming language in 2019?",
        a: "Python",
        b: "JavaScript",
        c: "C#",
        correct: "b"
    }
];

const questionEL = document.getElementById ("question");
const a_text = document.getElementById ("a_text");
const b_text = document.getElementById ("b_text");
const c_text = document.getElementById ("c_text");
const submitButton = document.getElementById('Submit');

let currentQuestion = 0;

loadQuiz();
function loadQuiz() {
    const currentQuizData = quizData[currentQuestion];

    questionEL.innerHTML = currentQuizData.question;
    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;

}
submitButton.addEventListener('click', () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    }
    else {
        alert ('You have finished the Quiz')
    }
});