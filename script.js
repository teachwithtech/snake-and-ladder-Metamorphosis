let playerPos = 1;

// 1. Render Papan 100 Kotak dengan urutan ular tangga (Zig-zag)
function createBoard() {
  const board = document.getElementById('board');
  board.innerHTML = '';

  for (let row = 9; row >= 0; row--) {
    let isEvenRow = (9 - row) % 2 === 1;
    for (let col = 0; col < 10; col++) {
      let tileNum;
      if (isEvenRow) {
        tileNum = row * 10 + (10 - col);
      } else {
        tileNum = row * 10 + (col + 1);
      }

      const tile = document.createElement('div');
      tile.className = 'tile';
      tile.id = `tile-${tileNum}`;
      tile.innerText = tileNum;

      // Beri warna klasifikasi
      if (tileNum <= 25) tile.classList.add('lots');
      else if (tileNum <= 70) tile.classList.add('mots');
      else tile.classList.add('hots');

      board.appendChild(tile);
    }
  }
  updatePawn();
}

// 2. Perbarui Posisi Pion
function updatePawn() {
  document.querySelectorAll('.player-pawn').forEach(e => e.remove());
  const currentTile = document.getElementById(`tile-${playerPos}`);
  if (currentTile) {
    const pawn = document.createElement('div');
    pawn.className = 'player-pawn pawn-1';
    currentTile.appendChild(pawn);
  }
}

// 3. Kocok Dadu
function rollDice() {
  const dice = Math.floor(Math.random() * 6) + 1;
  document.getElementById('dice-result').innerText = `Dadu: ${dice}`;
  
  playerPos += dice;
  if (playerPos > 100) playerPos = 100;

  updatePawn();
  setTimeout(() => showQuestion(playerPos), 500);
}

// 4. Tampilkan Pertanyaan dari questions.js
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

// 5. Cek Jawaban Pemain
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

// Jalankan papan saat pertama kali dibuka
window.onload = createBoard;
