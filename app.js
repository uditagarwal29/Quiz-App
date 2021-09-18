const quizData = [{
        question: 'What is the hottest continent on Earth?',
        a: 'Asia',
        b: 'Europe',
        c: 'Africa',
        d: 'South America',
        correct: 'c'
    },

    {
        question: ' The world smallest country is',
        a: 'Canada',
        b: 'Russia',
        c: 'Maldives',
        d: ' Vatican City',
        correct: 'd'
    },

    {
        question: ' Which one is the smallest ocean in the World',
        a: 'Indian',
        b: 'Pacific',
        c: 'Atlantic',
        d: 'Artic',
        correct: 'd'
    },

    {
        question: ' Which country gifted the Statue of Liberty to USA in 1886',
        a: 'French',
        b: 'Canada',
        c: 'Italy',
        d: 'England',
        correct: 'a'
    },

    {
        question: 'Who was the first President of the USA ?',
        a: 'Abraham Lincoln',
        b: 'George Washington',
        c: 'Theodore Roosevelt',
        d: 'John F. Kennedy',
        correct: 'b'
    }
]

let currQues = 0;
let score = 0;

const answerEle = document.querySelectorAll('.answer');
const question = document.querySelector('#question');
const opt1 = document.getElementById('aOptn');
const opt2 = document.getElementById('bOptn');
const opt3 = document.getElementById('cOptn');
const opt4 = document.getElementById('dOptn');
const submitBtn = document.querySelector('#submitBtn');
const options = document.querySelector('#optionsList');

const scoreContainer = document.getElementById('score-container')
const atag = document.querySelector('.atag');
const userScore = document.getElementById('userScore');
const midEle = document.getElementById('outof')
const totalScore = document.getElementById('totalScore');

loadQuiz();
getSelected();

function loadQuiz() {
    deselectAnswer()
    question.innerHTML = quizData[currQues].question;
    opt1.innerHTML = quizData[currQues].a;
    opt2.innerHTML = quizData[currQues].b;
    opt3.innerHTML = quizData[currQues].c;
    opt4.innerHTML = quizData[currQues].d;
}

function getSelected() {
    let answer = undefined;
    answerEle.forEach((answerEle) => {
        if (answerEle.checked) {
            answer = answerEle.id;
        }
    })
    return answer;
}

function deselectAnswer() {
    answerEle.forEach((answerEle) => {
        answerEle.checked = false;
    })

}

submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currQues].correct) {
            score++;
        }
        currQues++;
        if (currQues < quizData.length) {
            loadQuiz();
            getSelected();

        } else {
            ScoreCard();
        }
    }
})

function ScoreCard() {
    question.innerHTML = 'Your Score is : ';
    document.querySelector('.quiz-container').style.height = '390px';
    submitBtn.style.margin = "3rem 0";
    question.style.display = "flex";
    question.style.justifyContent = "center";
    question.style.fontSize = "3rem";
    options.remove();

    //printing and Styling score
    scoreContainer.style.display = "flex";
    scoreContainer.style.justifyContent = "center";
    scoreContainer.style.marginTop = "3rem";
    userScore.innerHTML = score;
    userScore.style.color = '#52b788';
    userScore.style.margin = "0 1rem";
    userScore.style.fontSize = "2rem";
    midEle.innerHTML = '   out of    ';
    midEle.style.color = '#495057'
    midEle.style.fontSize = "2rem";
    totalScore.innerHTML = quizData.length;
    totalScore.style.color = '#ef6351';
    totalScore.style.margin = "0 1rem";
    totalScore.style.fontSize = "2rem";

    //submit button change
    submitBtn.innerHTML = 'Play Again !';

    submitBtn.style.backgroundColor = '#F27969'
    submitBtn.addEventListener('mouseover', () => {
        submitBtn.style.backgroundColor = '#ef6351';
    })
    submitBtn.addEventListener('mouseout', () => {
        submitBtn.style.backgroundColor = '#F27969';
    })
    submitBtn.addEventListener('click', () => {
        window.location.reload();
    })
}