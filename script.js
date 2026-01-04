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
const buttons = document.querySelector(".buttons");
const jumpscare = document.getElementById("jumpscare");
const flash = document.getElementById("flash");
const glitchText = document.getElementById("glitchText");

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
  // Trigger jumpscare after Question 8 (index 7)
  if (index === 7) {
    index++; // move to Question 9 after jumpscare
    triggerJumpscare();
    return;
  }

  index++;
  if (index < questions.length) {
    showQuestion();
  } else {
    questionEl.textContent = "I hope to see you again...";
    buttons.style.display = "none";
  }
}

function triggerJumpscare() {
  // Step 1: White flash
  flash.style.display = "block";

  setTimeout(() => {
    flash.style.display = "none";

    // Step 2: Show jumpscare + glitch text + shake
    jumpscare.style.display = "block";
    glitchText.style.display = "block";
    document.body.style.animation = "shake 0.5s";

    // Step 3: Hide jumpscare and glitch text after 0.9s
    setTimeout(() => {
      jumpscare.style.display = "none";
      glitchText.style.display = "none";
      document.body.style.animation = ""; // remove shake
      showQuestion(); // continue survey with Question 9
    }, 900);
  }, 150); // flash duration
}
