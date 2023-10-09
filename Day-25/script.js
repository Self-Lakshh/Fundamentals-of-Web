// learning functions, conditions, and dynamic choice events today
const questions = [
    {
        q: "Which HTML tag is used to reference external JavaScript?",
        options: ["<script>", "<javascript>", "<js>", "<src>"],
        correct: 0
    },
    {
        q: "What CSS layout style aligns columns side-by-side easily?",
        options: ["Relative positioning", "Flexbox / Grid", "Floats", "Margins"],
        correct: 1
    },
    {
        q: "Which method fetches elements by ID names?",
        options: ["querySelector", "getElementById", "getElementsByClass", "querySelectorAll"],
        correct: 1
    }
];

let curIdx = 0;
let score = 0;

const questionText = document.querySelector("#question");
const choicesDiv = document.querySelector("#choices");
const progressText = document.querySelector("#progress");

loadQuestion();

function loadQuestion() {
    if (curIdx >= questions.length) {
        showResults();
        return;
    }
    
    const curQ = questions[curIdx];
    questionText.textContent = curQ.q;
    progressText.textContent = `Question ${curIdx + 1} of ${questions.length}`;
    
    choicesDiv.innerHTML = "";
    curQ.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "btn-choice";
        btn.textContent = opt;
        btn.addEventListener("click", () => handleSelect(idx));
        choicesDiv.appendChild(btn);
    });
}

function handleSelect(selectedIdx) {
    if (selectedIdx === questions[curIdx].correct) {
        score++;
    }
    curIdx++;
    loadQuestion();
}

function showResults() {
    questionText.textContent = "Quiz Completed!";
    choicesDiv.innerHTML = `<h4>Your Score: ${score} / ${questions.length}</h4>`;
    progressText.textContent = "Click refresh to restart";
}