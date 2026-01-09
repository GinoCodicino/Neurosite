const questions = [
    
  {
    question: "What do all human sensory systems have in common?",
    answers: [
      "They all transform electromagnetic energy",
      "They all convert mechanical stimuli in electrical energy",
      "They all sense electrical stimuli",
      "They all convey information to the brain about the surrounding through afferent neural pathway",
      "Stimuli are sensed by our brain thanks to the sensory responses coming from efferent nerve pathways",
      "None of these"
    ],
    correct: [3]
  },
  {
    question: "Which of these are TRUE about IHCs?",
    answers: [
      "IHCs have stereocilia that are in direct contact with the tectorial membrane and can amplify the relative movement between the tectorial and the basilar membranes",
      "Most of the afferent fibres approach IHCs",
      "There are many more IHCs than OHCs",
      "IHCs allow for the opening of ion channels by deflection of the stereocilia",
      "None of these"
    ],
    correct: [1, 3]
  },
  {
    question: "Which of these statements about basilar membrane (BM) are TRUE?",
    answers: [
      "Tones at higher frequencies are assumed to give higher displacements closer to the apex of BM",
      "The higher the displacement for a specific tone in its characteristic location to the BM, the less energy it takes to reach the hearing threshold level (lower threshold) for that one",
      "Tones at lower frequencies are assumed to give higher displacements closer to the basis of the BM",
      "The tonotopic properties of the BM are matched by frequency tuning properties if the auditory nerve fibres in the classical ascending auditory pathways",
      "A travelling pressure wave induces a specific oscillation of the basilar membrane, which contributes to the bending of the inner hair cell’s stereocilia, which generates an electrical stimulus",
      "Stiffness and propagation velocity gradually increase from base to apex",
      "The velocity of the stapes vibration is proportional to the eardrum pressure in the same way for all frequencies"
    ],
    correct: [1, 3, 4]
  },
  {
    question: "Which of the following statements regarding the LGN are TRUE?",
    answers: [
      "The 9 layers of the LGN contain magnocellular and parvocellular cells",
      "Magnocellular cells have large cell bodies and use a relatively short time to process information",
      "Parvocellular cells have small cell bodies and operate quickly but without much detail",
      "Parasol cells are the retinal ganglion cells (10% of total) that project their axons to the parvocellular layers of the LGN",
      "Midget cells (80% of total) project their axons to the parvocellular layers of the LGN"
    ],
    correct: [1, 4]
  },
  {
    question: "Parasympathetic activation results in … of both pupils. … of the pupils is mediated by sympathetic innervation of the iris.",
    answers: [
      "Innervation",
      "Dilation",
      "Alteration",
      "Constriction",
      "Compression"
    ],
    correct: [3, 1]
  },
  {
    question: "Which of these statements about key properties of visual perception are TRUE?",
    answers: [
      "In EMERGENCE the object of perception is perceived as a whole, all at once and not by recognizing its parts",
      "In the process of REIFICATION, the experienced percept contains more explicit spatial information than the sensory stimulus on which it’s based",
      "INVARIANCE is the tendency of ambiguous perceptual experiences to pop back and forth unstably between two or more alternative interpretations",
      "MULTISTABILITY is the property of perception whereby geometrical objects are recognised independent of rotation, translation and scale, as well as several other variations such as elastic deformations, different lighting and different component features",
      "None of these"
    ],
    correct: [0, 1]
  },
  {
    question: "Which statements about the somatosensory system are TRUE?",
    answers: [
      "Touch and perception are transmitted by thinly myelinated and unmyelinated nerves",
      "A patch of skin contains many overlapping receptive fields that are innervated by individual sensory nerve",
      "Mechanical nociceptors respond to subtle tactile stimuli",
      "The Pacinian corpuscle is a fast-adapting mechanoreceptor located in the skin",
      "Meissner’s corpuscle and Merkel disk receptors in the superficial layers are suited for accurate spatial localization or for fine spatial resolution",
      "A dense population of receptors leads to finer resolution of spatial detail because the receptors have larger receptive fields",
      "Pain and temperature senses are mediated by receptors with bare nerve ending"
    ],
    correct: [1, 3, 4, 6]
  },
  {
    question: "Choose the two definitions that fill the two gaps: Retina chromatic information is conveyed through the on/off center-surround antagonism of ........... and it overlaps with..... achromatic information.",
    answer: [
      "midget ganglion cells",
      "bipolar cells",
      "high resolution",
      "low resolution",
      "directional",
      "dynamic",
      "parasol cells"
    ],
    correct: [1, 3]
  },
  {
    question: "The vestibular semicircular canals detect",
    answer: [
    "angular velocity",
    "fluid displacement",
    "linear acceleration",
    "linear velocity",
    "angular displacement",
    "none of these answers"
    ],
    correct: [5]
  },
  {
    "question": "Which of these statements about vision optics are true?",
    "answer": [
      "The point spread function is independent from pupil dimension",
      "The shorter the light's wavelength the greater the scattering",
      "In a denser medium like the cornea tissue (n=1,38) light will travel at a higher velocity",
      "The wider the pupil the smaller the theoretic lens diffraction",
      "Contrast and resolution increase in dim light",
      "None of the statements are true"
    ],
    "correct": [1, 3]
  },
  {
    "question": "Which of these statements about motion perception are true?",
    "answer": [
      "Most of the processing for motion integration happens in V4",
      "The middle temporal (MT) area is a critical area for motion integration",
      "Motion integration happens along the dorsal stream",
      "MT cell are intrinsically sensitive to color",
      "Motion integration is mediated by thin stripes in V2",
      "Most of the processing of motion integration happens in V4",
      "MT cells are not directional cells (they don't respond to specific direction gradients)",
      "None of these statements are true"
    ],
    "correct": [1, 2]
  },
  {
    "question": "Which of these answers are true statements about the main characteristics of Red, Green and Blue light Retinal Imaging?",
    "answer": [
      "Use of blue light (490 nm) enhance the surface layers of retina",
      "Blue light (490 nm) has a mid-penetration and enhances the vessels",
      "Green light (540-575 nm) enhances the fibers converging t o the optic disk",
      "Red light (630-640 nm) enhances the choroid structure",
      "Green light (540-575 nm) enhances the choroid structure"

    ],
    "correct": [1, 4]
  },
  {
    "question": "Which of these statements about vision optics are FALSE?",
    "answer": [
    "The point spread function is independent from pupil dimension",
    "In a denser medium like the cornea tissue ( n - 1.38) light will travel at a higher velocity",
    "The wider the pupil the smaller the theoretic lens diffraction",
    "The shorter the light's wavelength the greater the scattering",
    "Contrast and resolution decrease in dim light",
    "None of these statements are false"

    ],
    "correct": [1, 3, 5]
  }

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
