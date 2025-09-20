// Éléments DOM
const questionContainer = document.getElementById("questionContainer");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const resultContainer = document.getElementById("resultContainer");
const gifResult = document.getElementById("gifResult");
const image = document.getElementById("image");
const questionText = document.getElementById("question");

// Plusieurs questions d'amour (10)
const questions = [
  "Do you love me?",
  "Are you mine?",
  "Will you be my forever?",
  "Can I hold your hand?",
  "Do you want to marry me?",
  "Do you think about me?",
  "Are we soulmates?",
  "Will you love me forever?",
  "Do you miss me?",
  "Will you stay with me?"
];

// Index de la question actuelle
let currentQuestionIndex = 0;

// Messages après "Yes"
const yesMessages = [
  "I knew it 😍!",
  "You're the one for me ❤️",
  "My heart is yours forever 💖",
  "I love you too! 🥹",
  "You make me so happy 😊",
  "Forever and always 🌹",
  "You're my everything 🌟"
];

// Changer la question
function changeQuestion() {
  const nextIndex = (currentQuestionIndex + 1) % questions.length;
  questionText.textContent = questions[nextIndex];
  currentQuestionIndex = nextIndex;
}

// Gérer le clic sur "Yes"
yesBtn.addEventListener("click", () => {
  // Cache les boutons
  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // Affiche le cœur
  createHeart();

  // Message aléatoire
  const randomMsg = yesMessages[Math.floor(Math.random() * yesMessages.length)];
  document.getElementById("resultText").textContent = randomMsg;

  // Affiche le résultat
  setTimeout(() => {
    resultContainer.style.display = "block";
    gifResult.src = "https://i.imgur.com/qoYdKXH.png"; // GIF d'amour
    gifResult.play(); // Si c'est un GIF animé

    // Après 3 secondes, afficher la prochaine question
    setTimeout(() => {
      resultContainer.style.display = "none";
      yesBtn.style.display = "inline-block";
      noBtn.style.display = "inline-block";
      changeQuestion();
    }, 3000);
  }, 500);
});

// Créer un cœur animé
function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = '<div class="heart"></div>';
  heart.style.position = "absolute";
  heart.style.top = "50%";
  heart.style.left = "50%";
  heart.style.transform = "translate(-50%, -50%)";
  heart.style.zIndex = "100";
  document.body.appendChild(heart);

  // Animation du cœur
  setTimeout(() => {
    heart.style.opacity = "0";
    heart.style.transform = "translate(-50%, -50%) scale(2)";
    setTimeout(() => {
      heart.remove();
    }, 300);
  }, 1000);
}

// Gérer le survol ou tap sur "No"
noBtn.addEventListener("touchstart", () => {
  moveButton();
});
noBtn.addEventListener("mouseover", () => {
  moveButton();
});

function moveButton() {
  const newLeft = Math.floor(Math.random() * window.innerWidth * 0.8);
  const newTop = Math.floor(Math.random() * window.innerHeight * 0.7);
  noBtn.style.left = `${newLeft}px`;
  noBtn.style.top = `${newTop}px`;
}

// Gérer le clic/tap sur "No"
noBtn.addEventListener("click", () => {
  alert("Come on! Just say YES 😔");
});

// Animation du cœur
const heartStyle = `
  .heart {
    width: 60px;
    height: 60px;
    background-color: red;
    border-radius: 50%;
    position: relative;
    animation: bounce 1s infinite;
    box-shadow: 0 0 10px rgba(255,0,0,0.5);
  }
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;
const styleSheet = document.createElement("style");
styleSheet.textContent = heartStyle;
document.head.appendChild(styleSheet);

// Ajout d'une petite animation au clic Yes
yesBtn.addEventListener("click", () => {
  yesBtn.style.transform = "scale(1.2)";
  setTimeout(() => {
    yesBtn.style.transform = "scale(1)";
  }, 200);
});

// Position initiale des boutons
yesBtn.style.position = "relative";
noBtn.style.position = "relative";
yesBtn.style.margin = "10px";
noBtn.style.margin = "10px";

// Réinitialisation si besoin
window.onload = () => {
  changeQuestion();
};
