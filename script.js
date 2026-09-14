// ==========================================
// ULAR TANGGA METAMORFOSIS - SCRIPT UTAMA
// ==========================================

let playerName = "";
let position = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let currentQuestion = null;
let currentQuestionNumber = 0;
let soundOn = true;

// Posisi ular dan tangga
const ladders = {
    3: 22,
    8: 30,
    15: 44,
    21: 42,
    28: 55,
    36: 57,
    51: 67,
    61: 79,
    72: 91,
    80: 99
};

const snakes = {
    17: 7,
    25: 11,
    39: 18,
    47: 26,
    54: 34,
    64: 48,
    73: 53,
    82: 62,
    92: 71,
    98: 78
};

// Menyimpan jawaban siswa
let answerHistory = [];

// ==========================================
// MULAI GAME
// ==========================================

function startGame() {
    const input = document.getElementById("player-name");
    const error = document.getElementById("name-error");

    playerName = input.value.trim();

    if (playerName === "") {
        error.textContent = "⚠️ Silakan masukkan nama terlebih dahulu.";
        input.focus();
        return;
    }

    error.textContent = "";

    position = 0;
    score = 0;
    correct = 0;
    wrong = 0;
    answerHistory = [];

    document.getElementById("landing-page").classList.remove("active");
    document.getElementById("game-page").classList.add("active");

    document.getElementById("display-player-name").textContent = playerName;

    updateStats();
    createBoard();
}

// ==========================================
// MEMBUAT PAPAN 100 KOTAK
// ==========================================

function createBoard() {
    const board = document.getElementById("board");

    if (!board) return;

    board.innerHTML = "";

    // Membuat 100 kotak
    for (let i = 1; i <= 100; i++) {
        const cell = document.createElement("div");
        cell.className = "board-cell";
        cell.id = `cell-${i}`;

        // Nomor kotak
        const number = document.createElement("span");
        number.className = "cell-number";
        number.textContent = i;

        cell.appendChild(number);

        // Tangga
        if (ladders[i]) {
            const ladder = document.createElement("span");
            ladder.className = "cell-icon";
            ladder.textContent = "🪜";
            ladder.title = `Tangga menuju kotak ${ladders[i]}`;
            cell.appendChild(ladder);
        }

        // Ular
        if (snakes[i]) {
            const snake = document.createElement("span");
            snake.className = "cell-icon";
            snake.textContent = "🐍";
            snake.title = `Ular turun ke kotak ${snakes[i]}`;
            cell.appendChild(snake);
        }

        board.appendChild(cell);
    }

    updatePlayerPosition();
}

// ==========================================
// MEMPERBARUI POSISI PEMAIN
// ==========================================

function updatePlayerPosition() {
    document.querySelectorAll(".player-token").forEach(token => {
        token.remove();
    });

    if (position <= 0) return;

    const cell = document.getElementById(`cell-${position}`);

    if (!cell) return;

    const token = document.createElement("div");
    token.className = "player-token";
    token.textContent = "🧑‍🎓";
    token.title = playerName;

    cell.appendChild(token);
}

// ==========================================
// DADU
// ==========================================

function rollDice() {

    if (currentQuestion !== null) {
        return;
    }

    const button = document.getElementById("btn-roll");
    const diceDisplay = document.getElementById("dice-display");
    const resultText = document.getElementById("dice-result-text");

    button.disabled = true;

    const dice = Math.floor(Math.random() * 6) + 1;

    const diceFaces = {
        1: "⚀",
        2: "⚁",
        3: "⚂",
        4: "⚃",
        5: "⚄",
        6: "⚅"
    };

    diceDisplay.textContent = diceFaces[dice];

    resultText.textContent = `🎲 Kamu mendapatkan angka ${dice}!`;

    let newPosition = position + dice;

    if (newPosition > 100) {
        newPosition = position;
        resultText.textContent =
            `🎲 Angka ${dice} terlalu besar. Kamu tetap di kotak ${position}.`;
        button.disabled = false;
        return;
    }

    position = newPosition;

    updatePlayerPosition();
    updateStats();

    setTimeout(() => {
        showQuestion(position);
    }, 500);
}

// ==========================================
// MENAMPILKAN SOAL
// ==========================================

function showQuestion(number) {

    currentQuestionNumber = number;

    if (typeof getQuestionById !== "function") {
        alert("❌ Database soal belum terbaca. Periksa file questions.js.");
        document.getElementById("btn-roll").disabled = false;
        return;
    }

    currentQuestion = getQuestionById(number);

    if (!currentQuestion) {
        alert(`Soal untuk kotak ${number} tidak ditemukan.`);
        document.getElementById("btn-roll").disabled = false;
        return;
    }

    const modal = document.getElementById("question-modal");

    document.getElementById("question-title").textContent =
        `❓ PERTANYAAN KOTAK ${number}`;

    document.getElementById("question-text").textContent =
        currentQuestion.question;

    const level = document.getElementById("question-level");

    if (currentQuestion.level === "LOTS") {
        level.textContent = "🟢 MUDAH";
    } else if (currentQuestion.level === "MOTS") {
        level.textContent = "🟡 SEDANG";
    } else {
        level.textContent = "🔴 HOTS";
    }

    const optionsContainer =
        document.getElementById("options-container");

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.className = "option-btn";
        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.onclick = function () {
            checkAnswer(index);
        };

        optionsContainer.appendChild(button);
    });

    document.getElementById("feedback-box")
        .classList.add("hidden");

    modal.classList.add("active");
}

// ==========================================
// MEMERIKSA JAWABAN
// ==========================================

function checkAnswer(selectedIndex) {

    if (!currentQuestion) return;

    const buttons =
        document.querySelectorAll(".option-btn");

    buttons.forEach(button => {
        button.disabled = true;
    });

    const isCorrect =
        selectedIndex === currentQuestion.answer;

    const selectedAnswer =
        currentQuestion.options[selectedIndex];

    const correctAnswer =
        currentQuestion.options[currentQuestion.answer];

    answerHistory.push({
        number: currentQuestionNumber,
        question: currentQuestion.question,
        studentAnswer: selectedAnswer,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        correct++;
        score += 10;

        showFeedback(
            true,
            "🎉 BENAR!",
            currentQuestion.explanation || "Jawabanmu benar!"
        );

    } else {
        wrong++;

        showFeedback(
            false,
            "😊 BELUM TEPAT",
            `Jawaban yang benar adalah: ${correctAnswer}. ${currentQuestion.explanation || ""}`
        );
    }

    updateStats();
}

// ==========================================
// FEEDBACK
// ==========================================

function showFeedback(isCorrect, title, text) {

    const feedback =
        document.getElementById("feedback-box");

    const feedbackTitle =
        document.getElementById("feedback-title");

    const feedbackText =
        document.getElementById("feedback-text");

    feedbackTitle.textContent = title;
    feedbackText.textContent = text;

    feedback.classList.remove("hidden");

    if (isCorrect) {
        feedback.classList.add("correct");
        feedback.classList.remove("wrong");
    } else {
        feedback.classList.add("wrong");
        feedback.classList.remove("correct");
    }
}

// ==========================================
// LANJUT SETELAH SOAL
// ==========================================

function closeQuestionModal() {

    document.getElementById("question-modal")
        .classList.remove("active");

    currentQuestion = null;

    // Cek tangga
    if (ladders[position]) {

        const oldPosition = position;
        position = ladders[position];

        document.getElementById("dice-result-text").textContent =
            `🪜 Hebat! Naik tangga dari ${oldPosition} ke ${position}!`;

        updatePlayerPosition();
        updateStats();

        setTimeout(() => {
            checkVictory();
        }, 700);

        return;
    }

    // Cek ular
    if (snakes[position]) {

        const oldPosition = position;
        position = snakes[position];

        document.getElementById("dice-result-text").textContent =
            `🐍 Ups! Kamu turun dari ${oldPosition} ke ${position}.`;

        updatePlayerPosition();
        updateStats();

        setTimeout(() => {
            checkVictory();
        }, 700);

        return;
    }

    checkVictory();

    document.getElementById("btn-roll").disabled = false;
}

// ==========================================
// UPDATE STATISTIK
// ==========================================

function updateStats() {

    document.getElementById("stat-position").textContent =
        position;

    document.getElementById("stat-score").textContent =
        score;

    document.getElementById("stat-correct").textContent =
        correct;

    document.getElementById("stat-wrong").textContent =
        wrong;

    const total = correct + wrong;

    const accuracy =
        total === 0
            ? 0
            : Math.round((correct / total) * 100);

    document.getElementById("stat-accuracy").textContent =
        `${accuracy}%`;
}

// ==========================================
// CEK MENANG
// ==========================================

function checkVictory() {

    if (position < 100) {
        document.getElementById("btn-roll").disabled = false;
        return;
    }

    saveResult();

    document.getElementById("game-page")
        .classList.remove("active");

    document.getElementById("victory-page")
        .classList.add("active");

    const total = correct + wrong;

    const accuracy =
        total === 0
            ? 0
            : Math.round((correct / total) * 100);

    document.getElementById("victory-player-name")
        .textContent = playerName;

    document.getElementById("v-score")
        .textContent = score;

    document.getElementById("v-correct")
        .textContent = correct;

    document.getElementById("v-wrong")
        .textContent = wrong;

    document.getElementById("v-accuracy")
        .textContent = `${accuracy}%`;

    if (typeof confetti === "function") {
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
}

// ==========================================
// SIMPAN HASIL SISWA
// ==========================================

function saveResult() {

    const results =
        JSON.parse(localStorage.getItem("metamorfosisResults")) || [];

    const total = correct + wrong;

    const accuracy =
        total === 0
            ? 0
            : Math.round((correct / total) * 100);

    results.push({
        name: playerName,
        date: new Date().toLocaleString("id-ID"),
        score: score,
        correct: correct,
        wrong: wrong,
        accuracy: accuracy,
        answers: answerHistory
    });

    localStorage.setItem(
        "metamorfosisResults",
        JSON.stringify(results)
    );
}

// ==========================================
// RESTART
// ==========================================

function confirmRestart() {

    const yakin = confirm(
        "Apakah kamu yakin ingin memulai kembali?"
    );

    if (yakin) {
        resetGameToLanding();
    }
}

function resetGameToLanding() {

    document.getElementById("game-page")
        .classList.remove("active");

    document.getElementById("victory-page")
        .classList.remove("active");

    document.getElementById("landing-page")
        .classList.add("active");

    document.getElementById("player-name").value = "";

    document.getElementById("btn-roll").disabled = false;

    position = 0;
    score = 0;
    correct = 0;
    wrong = 0;
    answerHistory = [];

    updateStats();
}

// ==========================================
// MATERI
// ==========================================

function openMateriModal() {
    document.getElementById("materi-modal")
        .classList.add("active");
}

function closeMateriModal() {
    document.getElementById("materi-modal")
        .classList.remove("active");
}

// ==========================================
// DASHBOARD GURU
// ==========================================

function openGuruModal() {

    loadStudentResults();

    document.getElementById("guru-modal")
        .classList.add("active");
}

function openGuruModalFromVictory() {

    document.getElementById("victory-page")
        .classList.remove("active");

    openGuruModal();
}

function closeGuruModal() {

    document.getElementById("guru-modal")
        .classList.remove("active");
}

// ==========================================
// MENAMPILKAN HASIL SISWA
// ==========================================

function loadStudentResults() {

    const results =
        JSON.parse(localStorage.getItem("metamorfosisResults")) || [];

    const tbody =
        document.getElementById("results-tbody");

    tbody.innerHTML = "";

    if (results.length === 0) {

        tbody.innerHTML = `
            <tr>
                <td colspan="7">
                    Belum ada hasil siswa.
                </td>
            </tr>
        `;

        return;
    }

    results.forEach((result, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${result.name}</td>
            <td>${result.date}</td>
            <td>${result.score}</td>
            <td>${result.correct}/${result.wrong}</td>
            <td>${result.accuracy}%</td>
            <td>
                <button onclick="showStudentDetail(${index})">
                    👁️ Detail
                </button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

// ==========================================
// DETAIL HASIL SISWA
// ==========================================

function showStudentDetail(index) {

    const results =
        JSON.parse(localStorage.getItem("metamorfosisResults")) || [];

    const result = results[index];

    if (!result) return;

    document.getElementById("student-detail-section")
        .classList.remove("hidden");

    document.getElementById("detail-student-name")
        .textContent =
        `📊 Analisis Jawaban: ${result.name}`;

    const tbody =
        document.getElementById("detail-tbody");

    tbody.innerHTML = "";

    result.answers.forEach((answer, i) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${i + 1}</td>
            <td>${answer.number}</td>
            <td>${answer.question}</td>
            <td>${answer.studentAnswer}</td>
            <td>${answer.correctAnswer}</td>
            <td>${answer.isCorrect ? "✅ Benar" : "❌ Salah"}</td>
        `;

        tbody.appendChild(row);
    });
}

// ==========================================
// PENCARIAN SISWA
// ==========================================

function filterStudentResults() {

    const keyword =
        document.getElementById("search-student")
            .value.toLowerCase();

    const rows =
        document.querySelectorAll("#results-tbody tr");

    rows.forEach(row => {

        const name =
            row.cells[1]?.textContent.toLowerCase() || "";

        row.style.display =
            name.includes(keyword) ? "" : "none";
    });
}

// ==========================================
// EXPORT CSV
// ==========================================

function exportToCSV() {

    const results =
        JSON.parse(localStorage.getItem("metamorfosisResults")) || [];

    if (results.length === 0) {
        alert("Belum ada data siswa untuk diunduh.");
        return;
    }

    let csv =
        "No,Nama,Tanggal,Skor,Benar,Salah,Akurasi\n";

    results.forEach((result, index) => {

        csv +=
            `${index + 1},"${result.name}","${result.date}",${result.score},${result.correct},${result.wrong},${result.accuracy}%\n`;
    });

    const blob =
        new Blob([csv], {
            type: "text/csv;charset=utf-8;"
        });

    const url =
        URL.createObjectURL(blob);

    const link =
        document.createElement("a");

    link.href = url;
    link.download = "hasil_game_metamorfosis.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
}

// ==========================================
// HAPUS SEMUA DATA
// ==========================================

function clearAllData() {

    const yakin = confirm(
        "⚠️ Apakah Anda yakin ingin menghapus SEMUA data siswa?"
    );

    if (!yakin) return;

    localStorage.removeItem("metamorfosisResults");

    loadStudentResults();

    document.getElementById("student-detail-section")
        .classList.add("hidden");

    alert("✅ Semua data siswa telah dihapus.");
}

// ==========================================
// SUARA
// ==========================================

function toggleSound() {

    soundOn = !soundOn;

    const button =
        document.getElementById("btn-sound");

    button.textContent =
        soundOn ? "🔊" : "🔇";
}

// ==========================================
// TOMBOL ESC UNTUK MENUTUP MODAL
// ==========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeMateriModal();
        closeGuruModal();
    }

});

// ==========================================
// CEK DATABASE SOAL
// ==========================================

console.log(
    "Game Metamorfosis berhasil dimuat."
);

if (typeof questions !== "undefined") {
    console.log(
        `Jumlah soal tersedia: ${questions.length}`
    );
}
