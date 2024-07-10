const quizDB = [
    {
        question: "Q1: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "HyperText Markup Language",
        c: "HyperText Machine Language",
        d: "HyperText Marking Language",
        correct: "b"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Creative Style Sheets",
        c: "Computer Style Sheets",
        d: "Colorful Style Sheets",
        correct: "a"
    },
    {
        question: "Q3: What is the full form of JS?",
        a: "JavaSource",
        b: "JavaScript",
        c: "JustScript",
        d: "JollyScript",
        correct: "b"
    },
    {
        question: "Q4: What does SQL stand for?",
        a: "Strong Question Language",
        b: "Structured Query Language",
        c: "Stylistic Query Language",
        d: "Statement Question Language",
        correct: "b"
    }
];

const questionEl = document.querySelector('.question');
const optionsEls = document.querySelectorAll('.answer');
const option1El = document.getElementById('options1');
const option2El = document.getElementById('options2');
const option3El = document.getElementById('options3');
const option4El = document.getElementById('options4');
const submitBtn = document.getElementById('submit');
const showScoreEl = document.getElementById('showScore');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuiz = quizDB[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    option1El.textContent = currentQuiz.a;
    option2El.textContent = currentQuiz.b;
    option3El.textContent = currentQuiz.c;
    option4El.textContent = currentQuiz.d;
}

function getSelected() {
    let answer = undefined;
    optionsEls.forEach(optionEl => {
        if (optionEl.checked) {
            answer = optionEl.id;
        }
    });
    return answer;
}

function deselectAll() {
    optionsEls.forEach(optionEl => {
        optionEl.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === `ans${quizDB[currentQuestion].correct}`) {
            score++;
        }

        currentQuestion++;

        if (currentQuestion < quizDB.length) {
            loadQuestion();
            deselectAll();
        } else {
            showScoreEl.innerHTML = `
                <h3>You scored ${score}/${quizDB.length}🤞</h3>
                <button class="btn" onclick="location.reload()">Reload</button>
            `;
            showScoreEl.classList.remove('scoreArea');
        }
    } else {
        alert('Please select an answer before submitting.');
    }
});

loadQuestion();




let myTweets =  "Apple , Banana, Kiwi";
let res = myTweets.substring(0,8)
console.log(res)