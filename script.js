/* Binary background */
const binary = document.getElementById("binary");

function generateBinary() {
  const charWidth = 10;
  const charHeight = 18;
  const cols = Math.ceil(window.innerWidth / charWidth);
  const rows = Math.ceil(window.innerHeight / charHeight);

  let output = "";
  for (let r = 0; r < rows; r++) {
    let line = "";
    for (let c = 0; c < cols; c++) {
      line += Math.random() > 0.5 ? "1" : "0";
    }
    output += line + "\n";
  }
  binary.textContent = output;
}

setInterval(generateBinary, 90);
window.addEventListener("resize", generateBinary);
generateBinary();

/* Survey logic */
const questions = [
  "Are you alone?",
  "Did you expect this question?",
  "Is the room completely quiet?",
  "Did you check behind you?",
  "Are you answering honestly?",
  "Do you feel watched?",
  "Is your door unlocked?",
  "Would you continue if you were scared?",
  "Do you think this survey knows you?",
  "Are you sure?"
];

let index = 0;

const startScreen = document.getElementById("startScreen");
const surveyScreen = document.getElementById("surveyScreen");
const questionEl = document.getElementById("question");

document.getElementById("startBtn").onclick = () => {
  startScreen.classList.add("hidden");
  surveyScreen.classList.remove("hidden");
  showQuestion();
};

document.getElementById("yesBtn").onclick = nextQuestion;
document.getElementById("noBtn").onclick = nextQuestion;

function showQuestion() {
  questionEl.textContent = questions[index];
}

function nextQuestion() {
  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "THANK YOU FOR YOUR PARTICIPATION.";
    document.querySelector(".buttons").style.display = "none";
  }
}
