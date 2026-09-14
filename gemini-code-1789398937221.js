let playerPos = 1;

// Pemetaan Tangga (Naik) dan Ular (Turun)
const ladders = { 3: 15, 8: 28, 21: 36, 51: 67 };
const snakes = { 17: 7, 25: 12, 39: 20, 47: 31, 54: 41 };

function createBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';

  for (let row = 9; row >= 0; row--) {
    let isEvenRow = (9 - row) % 2 === 1;
    for (let col = 0; col < 10; col++) {
      let tileNum = isEvenRow ? (row * 10 + (10 - col)) : (row * 10 + (col + 1));

      const tile = document.createElement('div');
      tile.className = `tile ${tileNum % 2 === 0 ? 'tile-even' : 'tile-odd'}`;
      tile.id = `tile-${tileNum}`;

      // Angka Petak
      const numSpan = document.createElement('span');
      numSpan.className = 'tile-num';
      numSpan.innerText = tileNum;
      tile.appendChild(numSpan);

      // Ikon Animasi Tangga
      if (ladders[tileNum]) {
        const ladderIcon = document.createElement('span');
        ladderIcon.className = 'element-icon ladder-icon';
        ladderIcon.innerText = '🪜';
        tile.appendChild(ladderIcon);
      }

      // Ikon Animasi Ular
      if (snakes[tileNum]) {
        const snakeIcon = document.createElement('span');
        snakeIcon.className = 'element-icon snake-icon';
        snakeIcon.innerText = '🐍';
        tile.appendChild(snakeIcon);
      }

      board.appendChild(tile);
    }
  }
  updatePawn();
}

function updatePawn() {
  document.querySelectorAll('.player-pawn').forEach(e => e.remove());
  const currentTile = document.getElementById(`tile-${playerPos}`);
  if (currentTile) {
    const pawn = document.createElement('div');
    pawn.className = 'player-pawn pawn-1';
    currentTile.appendChild(pawn);
  }
}

function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').innerText = `Dadu: ${dice}`;
  
  playerPos += dice;
  
  // Cek Tangga atau Ular
  if (ladders[playerPos]) {
    alert("Hore! Kamu menemukan tangga, naik!");
    playerPos = ladders[playerPos];
  } else if (snakes[playerPos]) {
    alert("Awas! Kamu tergelincir ular, turun!");
    playerPos = snakes[playerPos];
  }

  if (playerPos > 100) playerPos = 100;

  updatePawn();
  setTimeout(() => showQuestion(playerPos), 500);
}

function showQuestion(pos) {
  const qData = questions.find(q => q.id === pos);
  if (!qData) return;

  const modal = document.getElementById('quiz-modal');
  document.getElementById('quiz-level').innerText = `Kotak ${qData.id} [${qData.level}]`;
  document.getElementById('quiz-question').innerText = qData.question;
  
  const optionsDiv = document.getElementById('quiz-options');
  optionsDiv.innerHTML = '';

  qData.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx, qData.answer, qData.explanation);
    optionsDiv.appendChild(btn);
  });

  modal.classList.remove('hidden');
}

function checkAnswer(selected, correct, exp) {
  if (selected === correct) {
    alert("Jawaban Benar! 🎉\n\n" + exp);
  } else {
    alert("Jawaban Salah! ❌\nPemain mundur 2 langkah.\n\nPenjelasan: " + exp);
    playerPos = Math.max(1, playerPos - 2);
    updatePawn();
  }
  document.getElementById('quiz-modal').classList.add('hidden');
}

window.onload = createBoard;