const questions = [
    {
        question: "domande pt 1 da fare",
        answers: ["NaN ", " NaN ", " NaN ", " NaN ", " NaN "],
        correct: [0]
    },
   // Aggiungi altre domande...
];

let availableIndices = [];
let usedIndices = new Set();
let currentQuestion = {};
let correctCount = 0;
let wrongCount = 0;  
let totalCount = 0;

function resetQuiz() {
    availableIndices = Array.from({length: questions.length}, (_, i) => i);
    usedIndices.clear();
    correctCount = 0;
    wrongCount = 0;
    totalCount = 0;  
    updateScoreDisplay();

}

function randomQuestion() {
    if (availableIndices.length === 0) {
        resultEl.textContent = 'Quiz completato! Ricarica per ricominciare.';
        submitBtn.disabled = true;
        newQBtn.disabled = true;
        return;
    }
    const randIdx = Math.floor(Math.random() * availableIndices.length);
    const questionIdx = availableIndices.splice(randIdx, 1)[0];
    usedIndices.add(questionIdx);
    currentQuestion = questions[questionIdx];
}

const quizContainer = document.getElementById('quiz-container');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');
const newQBtn = document.getElementById('new-question');
const scoreEl = document.getElementById('score'); 

resetQuiz();
randomQuestion();
showQuestion();

function shuffleArray(array) {
    const shuffled = [...array];  // Copia per non modificare originale
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function updateScoreDisplay() {
    scoreEl.textContent = `Corrette: ${correctCount} | Errori: ${wrongCount} | Fatte: ${totalCount} /40`;
    totalCount++;  
}

function showQuestion() {
    questionEl.textContent = currentQuestion.question;
    answersEl.innerHTML = '';
    
    const answerList = currentQuestion.answers.map((answer, idx) => ({text: answer, originalIdx: idx}));
    const shuffledList = shuffleArray(answerList);  // Randomizza
    
    shuffledList.forEach(({text, originalIdx}) => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = originalIdx;  
        checkbox.dataset.originalIdx = originalIdx; 
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(` ${text}`));
        answersEl.appendChild(label);
    });
}

submitBtn.addEventListener('click', () => {
    const selected = Array.from(answersEl.querySelectorAll('input:checked')).map(cb => parseInt(cb.value));
    const correctIdx = currentQuestion.correct;
    const isCorrect = selected.length === correctIdx.length && 
                      selected.every(s => correctIdx.includes(s)) && 
                      correctIdx.every(c => selected.includes(c));
    
    if (isCorrect) {
        correctCount++;
    } else {
        wrongCount++;
    }
    updateScoreDisplay();  // Aggiorna counter
    
    resultEl.textContent = isCorrect ? 'Corretto!' : 'Sbagliato! Corrette: ' + correctIdx.map(i => currentQuestion.answers[i]).join(', ');
    resultEl.style.color = isCorrect ? 'green' : 'red';
});

newQBtn.addEventListener('click', () => {
    randomQuestion();
    showQuestion();
    resultEl.textContent = '';
});

document.getElementById('reset').addEventListener('click', () => {
    resetQuiz();
    randomQuestion();
    showQuestion();
    resultEl.textContent = '';
    submitBtn.disabled = false;
    newQBtn.disabled = false;
});
