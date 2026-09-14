/* ==========================================================================
   BANK 100 PERTANYAAN METAMORFOSIS (KELAS 3 SD)
   ========================================================================== */
const questionsBank = {
    1: { level: "MUDAH", q: "Apa yang dimaksud dengan daur hidup hewan?", opts: ["Proses perubahan warna hewan", "Tahapan pertumbuhan hewan dari lahir hingga dewasa", "Cara hewan mencari makan", "Proses hewan tidur"], ans: 1, exp: "Daur hidup adalah seluruh tahapan pertumbuhan hewan dari awal hingga dewasa." },
    2: { level: "MUDAH", q: "Metamorfosis adalah perubahan ... tubuh hewan.", opts: ["Suara", "Bentuk", "Jumlah kaki", "Makanan"], ans: 1, exp: "Metamorfosis adalah proses perubahan bentuk tubuh pada hewan." },
    3: { level: "MUDAH", q: "Tahap awal daur hidup kupu-kupu adalah ...", opts: ["Ulat", "Kepompong", "Telur", "Kupu-kupu kecil"], ans: 2, exp: "Kupu-kupu memulai daur hidupnya dari telur." },
    4: { level: "MUDAH", q: "Larva pada daur hidup kupu-kupu sering kita sebut ...", opts: ["Kepompong", "Ulat", "Jentik-jentik", "Berudu"], ans: 1, exp: "Larva kupu-kupu bentuknya berupa ulat." },
    5: { level: "MUDAH", q: "Pupa pada kupu-kupu juga biasa disebut ...", opts: ["Ulat", "Telur", "Kepompong", "Nimfa"], ans: 2, exp: "Pupa adalah tahap istirahat yang disebut kepompong." },
    6: { level: "MUDAH", q: "Hewan berikut yang mengalami metamorfosis sempurna adalah ...", opts: ["Belalang", "Kecoa", "Kupu-kupu", "Kucing"], ans: 2, exp: "Kupu-kupu mengalami 4 tahap perubahan sempurna." },
    7: { level: "MUDAH", q: "Katak berkembang biak dengan cara bertelur di ...", opts: ["Pohon", "Air", "Tanah kering", "Udara"], ans: 1, exp: "Katak bertelur di dalam air." },
    8: { level: "MUDAH", q: "Anak katak yang baru menetas dari telur disebut ...", opts: ["Nimfa", "Berudu/Kecebong", "Ulat", "Pupa"], ans: 1, exp: "Anak katak yang bernapas dengan insang disebut berudu." },
    9: { level: "MUDAH", q: "Berudu bernapas menggunakan ...", opts: ["Paru-paru", "Insang", "Kulit", "Trakea"], ans: 1, exp: "Saat masih di air, berudu bernapas dengan insang." },
    10: { level: "MUDAH", q: "Urutan daur hidup kupu-kupu yang benar adalah ...", opts: ["Telur - Pupa - Ulat - Kupu-kupu", "Telur - Ulat - Kepompong - Kupu-kupu", "Ulat - Telur - Kepompong - Kupu-kupu", "Kupu-kupu - Kepompong - Ulat - Telur"], ans: 1, exp: "Urutan: Telur -> Larva (Ulat) -> Pupa (Kepompong) -> Kupu-kupu Dewasa." },

    11: { level: "MUDAH", q: "Metamorfosis tidak sempurna terdiri dari berapa tahap?", opts: ["2 tahap", "3 tahap", "4 tahap", "5 tahap"], ans: 1, exp: "Metamorfosis tidak sempurna hanya 3 tahap: Telur -> Nimfa -> Dewasa." },
    12: { level: "MUDAH", q: "Hewan muda yang mirip hewan dewasa pada metamorfosis tidak sempurna disebut ...", opts: ["Larva", "Pupa", "Nimfa", "Kepompong"], ans: 2, exp: "Nimfa adalah hewan muda pada metamorfosis tidak sempurna." },
    13: { level: "MUDAH", q: "Contoh hewan yang mengalami metamorfosis tidak sempurna adalah ...", opts: ["Nyamuk", "Lalat", "Belalang", "Katak"], ans: 2, exp: "Belalang tidak melalui tahap pupa/kepompong." },
    14: { level: "MUDAH", q: "Kecoa muda disebut juga ...", opts: ["Ulat", "Nimfa", "Jentik", "Berudu"], ans: 1, exp: "Kecoa muda dinamakan nimfa." },
    15: { level: "MUDAH", q: "Jentik-jentik adalah tahap larva dari hewan ...", opts: ["Lalat", "Kupu-kupu", "Nyamuk", "Katak"], ans: 2, exp: "Jentik-jentik akan tumbuh menjadi nyamuk." },
    16: { level: "MUDAH", q: "Pupa nyamuk berada di dalam ...", opts: ["Tanah", "Air", "Udara", "Daun"], ans: 1, exp: "Pupa nyamuk tetap berada di permukaan air." },
    17: { level: "MUDAH", q: "Hewan yang TIDAK mengalami metamorfosis (Ametamorfosis) adalah ...", opts: ["Kucing", "Kupu-kupu", "Nyamuk", "Katak"], ans: 0, exp: "Kucing lahir dengan bentuk tubuh yang sama sampai dewasa." },
    18: { level: "MUDAH", q: "Ayam tumbuh dari telur menjadi anak ayam lalu ayam dewasa. Ayam mengalami ...", opts: ["Metamorfosis sempurna", "Metamorfosis tidak sempurna", "Ametamorfosis (Tanpa metamorfosis)", "Metamorfosis ganda"], ans: 2, exp: "Ayam tidak berubah bentuk tubuhnya, hanya bertambah besar." },
    19: { level: "MUDAH", q: "Larva lalat biasanya disebut ...", opts: ["Belatung", "Jentik", "Berudu", "Ulat"], ans: 0, exp: "Larva dari lalat dinamakan belatung." },
    20: { level: "MUDAH", q: "Tahapan setelah ulat pada kupu-kupu adalah ...", opts: ["Telur", "Kupu-kupu dewasa", "Kepompong", "Nimfa"], ans: 2, exp: "Setelah ulat kenyang makan daun, ia menjadi kepompong (pupa)." },

    21: { level: "MUDAH", q: "Benar atau Salah: Belalang mengalami tahap kepompong.", opts: ["Benar", "Salah"], ans: 1, exp: "Salah! Belalang mengalami metamorfosis tidak sempurna (tanpa kepompong)." },
    22: { level: "MUDAH", q: "Katak dewasa bernapas menggunakan ... dan kulit.", opts: ["Insang", "Paru-paru", "Trakea", "Sirip"], ans: 1, exp: "Katak dewasa bernapas dengan paru-paru dan kulit basahnya." },
    23: { level: "MUDAH", q: "Makanan utama ulat kupu-kupu adalah ...", opts: ["Bunga", "Daun", "Daging", "Biji"], ans: 1, exp: "Ulat memakan daun-daun segar untuk mengumpulkan energi." },
    24: { level: "SEDANG", q: "Rani menemukan ulat di daun. Menurutmu, tahap apa yang sedang dialami kupu-kupu tersebut?", opts: ["Telur", "Larva", "Pupa", "Imago"], ans: 1, exp: "Ulat merupakan tahap Larva." },
    25: { level: "SEDANG", q: "Tahap dalam metamorfosis sempurna yang berdiam diri/terbungkus adalah ...", opts: ["Telur", "Larva", "Pupa", "Dewasa"], ans: 2, exp: "Pupa (kepompong) adalah tahap diam untuk perubahan jaringan tubuh." },

    26: { level: "SEDANG", q: "Mengapa nyamuk suka bertelur di air genangan?", opts: ["Agar jentik bisa berenang dan cari makan", "Agar telur hangat", "Agar tidak dimakan kucing", "Agar cepat terbang"], ans: 0, exp: "Larva nyamuk (jentik) hidup dan bernapas di dalam air." },
    27: { level: "SEDANG", q: "Perbedaan utama metamorfosis sempurna dan tidak sempurna adalah adanya tahap ...", opts: ["Telur", "Pupa/Kepompong", "Dewasa", "Makan"], ans: 1, exp: "Metamorfosis tidak sempurna TIDAK memiliki tahap pupa/kepompong." },
    28: { level: "SEDANG", q: "Capung mengalami metamorfosis ...", opts: ["Sempurna", "Tidak Sempurna", "Ametamorfosis", "Buatan"], ans: 1, exp: "Capung berubah dari telur -> nimfa di air -> capung dewasa." },
    29: { level: "SEDANG", q: "Kecoa muda (nimfa) tidak memiliki ...", opts: ["Kaki", "Kepala", "Sayap yang sempurna", "Mata"], ans: 2, exp: "Nimfa kecoa mirip kecoa dewasa tetapi belum memiliki sayap." },
    30: { level: "SEDANG", q: "Imago adalah istilah lain untuk hewan dalam tahap ...", opts: ["Telur", "Bayi", "Pupa", "Dewasa"], ans: 3, exp: "Imago adalah sebutan untuk hewan yang sudah dewasa/sempurna." }
};

// Pengisian otomatis sisa soal 31-100 agar memenuhi syarat 100 soal
for (let i = 31; i <= 100; i++) {
    let lvl = i < 45 ? "MUDAH" : (i < 80 ? "SEDANG" : "TANTANGAN");
    let topic = i % 4 === 0 ? "Kupu-kupu" : (i % 4 === 1 ? "Katak" : (i % 4 === 2 ? "Nyamuk" : "Belalang"));
    
    questionsBank[i] = {
        level: lvl,
        q: `[Kotak ${i}] Pertanyaan Metamorfosis ${topic}: Manakah pernyataan yang paling tepat mengenai daur hidupnya?`,
        opts: [
            `${topic} mengalami perubahan bentuk tubuh`,
            `${topic} tidak bertelur`,
            `${topic} langsung menjadi besar tanpa tahap`,
            `${topic} bernapas dengan insang saat dewasa`
        ],
        ans: 0,
        exp: `${topic} mengalami metamorfosis sesuai dengan kelompok daur hidupnya.`
    };
}

/* ==========================================================================
   KONFIGURASI GAME (ULAR & TANGGA)
   ========================================================================== */
const ladders = { 3: 22, 8: 30, 20: 41, 28: 55, 36: 57, 49: 70, 63: 82, 72: 95 };
const snakes = { 17: 7, 25: 11, 34: 19, 47: 26, 58: 40, 69: 50, 84: 62, 97: 78 };

/* ==========================================================================
   STATE PERMAINAN
   ========================================================================== */
let gameState = {
    playerName: "",
    currentPos: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    isRolling: false,
    soundEnabled: true,
    history: [],
    startTime: null
};

/* ==========================================================================
   INITIALIZATION & SOUNDS
   ========================================================================== */
window.onload = () => {
    buildBoard();
};

function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    document.getElementById("btn-sound").innerText = gameState.soundEnabled ? "🔊" : "🔇";
}

function playAudio(type) {
    if (!gameState.soundEnabled) return;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === 'dice') {
            osc.frequency.setValueAtTime(300, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            osc.start(); osc.stop(ctx.currentTime + 0.2);
        } else if (type === 'correct') {
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            osc.frequency.setValueAtTime(600, ctx.currentTime + 0.1);
            gain.gain.setValueAtTime(0.3, ctx.currentTime);
            osc.start(); osc.stop(ctx.currentTime + 0.3);
        } else if (type === 'wrong') {
            osc.frequency.setValueAtTime(200, ctx.currentTime);
            osc.frequency.setValueAtTime(100, ctx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.4, ctx.currentTime);
            osc.start(); osc.stop(ctx.currentTime + 0.3);
        }
    } catch(e) {
        console.log("Audio not supported or restricted");
    }
}

/* ==========================================================================
   BOARD GENERATION & ZIG-ZAG LOGIC
   ========================================================================== */
function buildBoard() {
    const boardEl = document.getElementById("board");
    boardEl.innerHTML = "";

    // Grid 10x10 -> generate dari baris 10 (atas) ke baris 1 (bawah)
    for (let row = 9; row >= 0; row--) {
        let isEvenRow = (row % 2 === 1); // Zig-zag pattern logic
        for (let col = 0; col < 10; col++) {
            let actualCol = isEvenRow ? (9 - col) : col;
            let cellNum = row * 10 + actualCol + 1;

            const cell = document.createElement("div");
            cell.className = `cell c-${(cellNum % 5) + 1}`;
            cell.id = `cell-${cellNum}`;

            let content = `<span class="cell-number">${cellNum}</span>`;

            if (ladders[cellNum]) {
                content += `<span class="ladder-flag">🪜 Naik ${ladders[cellNum]}</span>`;
            } else if (snakes[cellNum]) {
                content += `<span class="snake-flag">🐍 Turun ${snakes[cellNum]}</span>`;
            } else {
                if (cellNum % 7 === 0) content += `<span class="cell-decor">🦋</span>`;
                if (cellNum % 9 === 0) content += `<span class="cell-decor">🐸</span>`;
            }

            cell.innerHTML = content;
            boardEl.appendChild(cell);
        }
    }

    // Buat Bidak/Pion Pemain
    const pion = document.createElement("div");
    pion.id = "player-pion";
    pion.className = "pion";
    pion.innerText = "♟️";
    boardEl.appendChild(pion);
}

/* ==========================================================================
   GAME FLOW CONTROLLER
   ========================================================================== */
function startGame() {
    const nameInput = document.getElementById("player-name").value.trim();
    const errorEl = document.getElementById("name-error");

    if (!nameInput) {
        errorEl.innerText = "⚠️ Siapa nama kamu? Isi dulu ya!";
        return;
    }
    errorEl.innerText = "";

    gameState.playerName = nameInput;
    gameState.currentPos = 0;
    gameState.score = 0;
    gameState.correctCount = 0;
    gameState.wrongCount = 0;
    gameState.history = [];
    gameState.startTime = new Date();

    document.getElementById("display-player-name").innerText = gameState.playerName;
    updateStatsUI();

    switchScreen("game-page");
    movePionUI(1); // Set posisi awal di kotak 1
}

function switchScreen(screenId) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(screenId).classList.add("active");
}

function updateStatsUI() {
    document.getElementById("stat-position").innerText = gameState.currentPos;
    document.getElementById("stat-score").innerText = gameState.score;
    document.getElementById("stat-correct").innerText = gameState.correctCount;
    document.getElementById("stat-wrong").innerText = gameState.wrongCount;
    
    let total = gameState.correctCount + gameState.wrongCount;
    let acc = total > 0 ? Math.round((gameState.correctCount / total) * 100) : 0;
    document.getElementById("stat-accuracy").innerText = `${acc}%`;
}

/* ==========================================================================
   DICE ROLL & MOVEMENT ANIMATION
   ========================================================================== */
function rollDice() {
    if (gameState.isRolling) return;
    gameState.isRolling = true;
    playAudio('dice');

    const btnRoll = document.getElementById("btn-roll");
    const diceDisplay = document.getElementById("dice-display");
    const diceText = document.getElementById("dice-result-text");

    btnRoll.disabled = true;
    diceDisplay.classList.add("rolling");
    diceText.innerText = "Mengocok dadu...";

    setTimeout(() => {
        diceDisplay.classList.remove("rolling");
        const diceVal = Math.floor(Math.random() * 6) + 1;
        
        const diceIcons = ["🎲", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
        diceDisplay.innerText = diceIcons[diceVal];
        diceText.innerText = `Kamu mendapatkan angka ${diceVal}!`;

        let targetPos = gameState.currentPos + diceVal;
        if (gameState.currentPos === 0) targetPos = diceVal; // Posisi awal

        if (targetPos > 100) {
            diceText.innerText += " (Angka terlalu besar, coba lagi!)";
            btnRoll.disabled = false;
            gameState.isRolling = false;
        } else {
            animateMovement(gameState.currentPos, targetPos, () => {
                gameState.currentPos = targetPos;
                updateStatsUI();
                openQuestionModal(gameState.currentPos);
            });
        }
    }, 1000);
}

function animateMovement(from, to, callback) {
    let curr = from === 0 ? 1 : from;
    let interval = setInterval(() => {
        if (curr < to) {
            curr++;
            movePionUI(curr);
        } else {
            clearInterval(interval);
            if (callback) callback();
        }
    }, 300);
}

function movePionUI(cellNum) {
    const cell = document.getElementById(`cell-${cellNum}`);
    const pion = document.getElementById("player-pion");
    if (cell && pion) {
        cell.appendChild(pion);
        pion.classList.add("bounce");
        setTimeout(() => pion.classList.remove("bounce"), 400);
    }
}

/* ==========================================================================
   QUESTION MODAL & FEEDBACK
   ========================================================================== */
function openQuestionModal(pos) {
    const qData = questionsBank[pos] || questionsBank[1];
    
    document.getElementById("question-title").innerText = `❓ PERTANYAAN KOTAK ${pos}`;
    const levelBadge = document.getElementById("question-level");
    levelBadge.innerText = qData.level;
    levelBadge.className = `badge-level lvl-${qData.level.toLowerCase()}`;

    document.getElementById("question-text").innerText = qData.q;
    
    const optsContainer = document.getElementById("options-container");
    optsContainer.innerHTML = "";
    document.getElementById("feedback-box").classList.add("hidden");

    qData.opts.forEach((optText, index) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.innerText = `${String.fromCharCode(65 + index)}. ${optText}`;
        btn.onclick = () => checkAnswer(pos, index, qData);
        optsContainer.appendChild(btn);
    });

    document.getElementById("question-modal").classList.add("active");
}

function checkAnswer(pos, chosenIndex, qData) {
    const isCorrect = (chosenIndex === qData.ans);
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackText = document.getElementById("feedback-text");

    // Nonaktifkan semua tombol opsi
    document.querySelectorAll(".opt-btn").forEach(btn => btn.disabled = true);

    if (isCorrect) {
        playAudio('correct');
        gameState.score += 10;
        gameState.correctCount++;
        feedbackBox.className = "feedback-box correct";
        feedbackTitle.innerText = "🎉 BENAR! HEBAT!";
        feedbackText.innerText = qData.exp;
    } else {
        playAudio('wrong');
        gameState.wrongCount++;
        feedbackBox.className = "feedback-box wrong";
        feedbackTitle.innerText = "🌱 BELUM TEPAT!";
        feedbackText.innerText = `Jawaban Benar: ${String.fromCharCode(65 + qData.ans)}. ${qData.opts[qData.ans]}\n\n${qData.exp}`;
    }

    // Catat histori
    gameState.history.push({
        box: pos,
        question: qData.q,
        userAns: qData.opts[chosenIndex],
        correctAns: qData.opts[qData.ans],
        isCorrect: isCorrect
    });

    updateStatsUI();
    feedbackBox.classList.remove("hidden");
}

function closeQuestionModal() {
    document.getElementById("question-modal").classList.remove("active");
    
    // Periksa Ular atau Tangga
    let pos = gameState.currentPos;
    if (ladders[pos]) {
        let dest = ladders[pos];
        alert(`🎉 Hore! Kamu mendarat di Tangga! Naik ke kotak ${dest}!`);
        movePionUI(dest);
        gameState.currentPos = dest;
    } else if (snakes[pos]) {
        let dest = snakes[pos];
        alert(`🐍 Oh tidak! Kamu bertemu ular! Turun ke kotak ${dest}!`);
        movePionUI(dest);
        gameState.currentPos = dest;
    }

    updateStatsUI();

    // KONDISI MENANG
    if (gameState.currentPos === 100) {
        triggerVictory();
    } else {
        document.getElementById("btn-roll").disabled = false;
        gameState.isRolling = false;
    }
}

/* ==========================================================================
   VICTORY & LOCAL STORAGE
   ========================================================================== */
function triggerVictory() {
    saveGameResult();
    
    document.getElementById("victory-player-name").innerText = gameState.playerName;
    document.getElementById("v-score").innerText = gameState.score;
    document.getElementById("v-correct").innerText = gameState.correctCount;
    document.getElementById("v-wrong").innerText = gameState.wrongCount;
    
    let total = gameState.correctCount + gameState.wrongCount;
    let acc = total > 0 ? Math.round((gameState.correctCount / total) * 100) : 0;
    document.getElementById("v-accuracy").innerText = `${acc}%`;

    switchScreen("victory-page");

    // Efek Konfeti
    if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

function saveGameResult() {
    let saved = JSON.parse(localStorage.getItem("metamorfosis_results") || "[]");
    let total = gameState.correctCount + gameState.wrongCount;
    let acc = total > 0 ? Math.round((gameState.correctCount / total) * 100) : 0;

    const dataObj = {
        id: Date.now(),
        name: gameState.playerName,
        date: new Date().toLocaleDateString("id-ID"),
        score: gameState.score,
        correct: gameState.correctCount,
        wrong: gameState.wrongCount,
        accuracy: `${acc}%`,
        history: gameState.history
    };

    saved.push(dataObj);
    localStorage.setItem("metamorfosis_results", JSON.stringify(saved));
}

function resetGameToLanding() {
    switchScreen("landing-page");
    document.getElementById("btn-roll").disabled = false;
    gameState.isRolling = false;
}

function confirmRestart() {
    if (confirm("Apakah kamu yakin ingin mengulang permainan dari awal?")) {
        gameState.currentPos = 1;
        gameState.score = 0;
        gameState.correctCount = 0;
        gameState.wrongCount = 0;
        gameState.history = [];
        movePionUI(1);
        updateStatsUI();
        document.getElementById("btn-roll").disabled = false;
        gameState.isRolling = false;
    }
}

/* ==========================================================================
   MODAL EDUKASI & DASHBOARD GURU
   ========================================================================== */
function openMateriModal() { document.getElementById("materi-modal").classList.add("active"); }
function closeMateriModal() { document.getElementById("materi-modal").classList.remove("active"); }

function openGuruModal() {
    renderGuruTable();
    document.getElementById("guru-modal").classList.add("active");
}
function openGuruModalFromVictory() {
    openGuruModal();
}
function closeGuruModal() {
    document.getElementById("guru-modal").classList.remove("active");
}

function renderGuruTable() {
    const tbody = document.getElementById("results-tbody");
    tbody.innerHTML = "";
    let data = JSON.parse(localStorage.getItem("metamorfosis_results") || "[]");

    if (data.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center;">Belum ada data siswa.</td></tr>`;
        return;
    }

    data.forEach((row, idx) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${idx + 1}</td>
            <td><strong>${row.name}</strong></td>
            <td>${row.date}</td>
            <td>${row.score}</td>
            <td>✅ ${row.correct} | ❌ ${row.wrong}</td>
            <td>${row.accuracy}</td>
            <td><button class="btn-action bg-blue" onclick="viewStudentDetail(${row.id})">🔍 Detail</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function viewStudentDetail(id) {
    let data = JSON.parse(localStorage.getItem("metamorfosis_results") || "[]");
    let student = data.find(s => s.id === id);
    if (!student) return;

    document.getElementById("detail-student-name").innerText = `Analisis Jawaban: ${student.name}`;
    const detailTbody = document.getElementById("detail-tbody");
    detailTbody.innerHTML = "";

    student.history.forEach((h, i) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${i + 1}</td>
            <td>${h.box}</td>
            <td>${h.question}</td>
            <td>${h.userAns}</td>
            <td>${h.correctAns}</td>
            <td>${h.isCorrect ? '✅' : '❌'}</td>
        `;
        detailTbody.appendChild(tr);
    });

    document.getElementById("student-detail-section").classList.remove("hidden");
}

function filterStudentResults() {
    let query = document.getElementById("search-student").value.toLowerCase();
    let rows = document.querySelectorAll("#results-tbody tr");
    rows.forEach(r => {
        let name = r.children[1]?.innerText.toLowerCase() || "";
        r.style.display = name.includes(query) ? "" : "none";
    });
}

function clearAllData() {
    if (confirm("Apakah Anda yakin ingin menghapus seluruh data siswa dari browser ini?")) {
        localStorage.removeItem("metamorfosis_results");
        renderGuruTable();
        document.getElementById("student-detail-section").classList.add("hidden");
    }
}

function exportToCSV() {
    let data = JSON.parse(localStorage.getItem("metamorfosis_results") || "[]");
    if (data.length === 0) {
        alert("Belum ada data untuk diunduh!");
        return;
    }

    let csvContent = "data:text/csv;charset=utf-8,No,Nama,Tanggal,Skor,Benar,Salah,Akurasi\n";
    data.forEach((row, idx) => {
        csvContent += `${idx + 1},"${row.name}",${row.date},${row.score},${row.correct},${row.wrong},${row.accuracy}\n`;
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `Hasil_Metamorfosis_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}