const words = ["apple", "banana", "mango", "grape", "orange", "peach", "kiwi"];
let secretWord = "";
let attempts = 5;

const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const restartBtn = document.getElementById("restartBtn");

function startGame() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  attempts = 5;
  hint.innerText = `Hint: The word starts with '${secretWord[0].toUpperCase()}' (Fruit)`;
  input.disabled = false;
  input.value = "";
  message.innerText = "";
  restartBtn.style.display = "none";
  document.body.style.backgroundColor = "#f0f8ff";
  console.log("Secret word for testing:", secretWord);
}

function submitGuess() {
  const guess = input.value.trim().toLowerCase();
  if (attempts === 0) return;

  if (guess === "") {
    attempts--;
    message.innerText = `Incorrect guess. You have ${attempts} attempt${attempts === 1 ? '' : 's'} left. Try again!`;
    return;
  }

  if (guess === secretWord) {
    message.innerHTML = `<span class="win">Congratulations! You guessed the secret word!</span>`;
    document.body.style.backgroundColor = "lightblue";
    endGame();
  } else {
    attempts--;
    if (attempts === 0) {
      message.innerHTML = `<span class="lose">Game over! The secret word was '${secretWord}'.</span>`;
      document.body.style.backgroundColor = "#f5c6c6";
      endGame();
    } else {
      message.innerText = `Incorrect guess. You have ${attempts} attempt${attempts === 1 ? '' : 's'} left. Try again!`;
      document.body.style.backgroundColor = "#fff3cd";
    }
  }

  input.value = "";
}

function endGame() {
  input.disabled = true;
  restartBtn.style.display = "inline-block";
}

function restartGame() {
  startGame();
}

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    submitGuess();
  }
});

startGame();

