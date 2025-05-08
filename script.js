const sounds = [
  {
    src: "karga.mp3",
    correctIndex: 0
  },
  {
    src: "tavuk.mp3",
    correctIndex: 1
  }
];

let currentSoundIndex = null;

function playRandomSound() {
  currentSoundIndex = Math.floor(Math.random() * sounds.length);
  const audio = new Audio(sounds[currentSoundIndex].src);
  audio.play();
  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selectedIndex) {
  if (currentSoundIndex === null) return;

  const correctIndex = sounds[currentSoundIndex].correctIndex;
  const feedback = document.getElementById("feedback");

  if (selectedIndex === correctIndex) {
    feedback.textContent = "✅ Tebrikler! Doğru.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Yanlış. Tekrar deneyelim.";
    feedback.style.color = "red";
  }
}