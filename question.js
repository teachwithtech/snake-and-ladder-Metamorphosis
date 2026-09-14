const questions = [
  {
    id: 1,
    question: "Apa yang dimaksud dengan metamorfosis?",
    options: [
      "Perubahan warna hewan",
      "Perubahan bentuk tubuh hewan selama pertumbuhan",
      "Perpindahan tempat hewan",
      "Pertambahan jumlah makanan"
    ],
    answer: 1,
    level: "LOTS",
    explanation: "Metamorfosis adalah perubahan bentuk tubuh hewan selama pertumbuhannya."
  },

  {
    id: 2,
    question: "Hewan berikut yang mengalami metamorfosis sempurna adalah ...",
    options: [
      "Belalang",
      "Kecoa",
      "Kupu-kupu",
      "Ayam"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Kupu-kupu mengalami metamorfosis sempurna: telur, larva, pupa, dan dewasa."
  },

  {
    id: 3,
    question: "Tahap pertama dalam daur hidup kupu-kupu adalah ...",
    options: [
      "Telur",
      "Ulat",
      "Kepompong",
      "Kupu-kupu"
    ],
    answer: 0,
    level: "LOTS",
    explanation: "Daur hidup kupu-kupu dimulai dari telur."
  },

  {
    id: 4,
    question: "Larva kupu-kupu disebut ...",
    options: [
      "Nimfa",
      "Ulat",
      "Berudu",
      "Pupa"
    ],
    answer: 1,
    level: "LOTS",
    explanation: "Ulat merupakan tahap larva dalam metamorfosis kupu-kupu."
  },

  {
    id: 5,
    question: "Tahap setelah ulat pada metamorfosis kupu-kupu adalah ...",
    options: [
      "Telur",
      "Nimfa",
      "Pupa",
      "Kupu-kupu"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Setelah menjadi ulat, kupu-kupu memasuki tahap pupa atau kepompong."
  },

  {
    id: 6,
    question: "Pupa kupu-kupu biasa disebut ...",
    options: [
      "Telur",
      "Kepompong",
      "Nimfa",
      "Berudu"
    ],
    answer: 1,
    level: "LOTS",
    explanation: "Pupa kupu-kupu dikenal sebagai kepompong."
  },

  {
    id: 7,
    question: "Urutan metamorfosis sempurna yang benar adalah ...",
    options: [
      "Telur → nimfa → dewasa",
      "Telur → larva → pupa → dewasa",
      "Telur → pupa → larva → dewasa",
      "Larva → telur → pupa → dewasa"
    ],
    answer: 1,
    level: "LOTS",
    explanation: "Metamorfosis sempurna terdiri atas telur, larva, pupa, kemudian dewasa."
  },

  {
    id: 8,
    question: "Hewan yang mengalami metamorfosis tidak sempurna adalah ...",
    options: [
      "Kupu-kupu",
      "Nyamuk",
      "Belalang",
      "Lalat"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Belalang mengalami metamorfosis tidak sempurna."
  },

  {
    id: 9,
    question: "Tahap setelah telur pada metamorfosis belalang adalah ...",
    options: [
      "Pupa",
      "Larva",
      "Nimfa",
      "Dewasa"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Setelah telur menetas, belalang menjadi nimfa."
  },

  {
    id: 10,
    question: "Metamorfosis tidak sempurna memiliki berapa tahap utama?",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 1,
    level: "LOTS",
    explanation: "Tahap utama metamorfosis tidak sempurna adalah telur, nimfa, dan dewasa."
  },

  {
    id: 11,
    question: "Contoh hewan yang mengalami metamorfosis sempurna adalah ...",
    options: [
      "Belalang",
      "Kecoa",
      "Nyamuk",
      "Capung"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Nyamuk mengalami metamorfosis sempurna."
  },

  {
    id: 12,
    question: "Anak katak yang hidup di air dan bernapas menggunakan insang disebut ...",
    options: [
      "Larva",
      "Nimfa",
      "Berudu",
      "Pupa"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Anak katak yang masih hidup di air disebut berudu atau kecebong."
  },

  {
    id: 13,
    question: "Hewan dewasa pada metamorfosis kupu-kupu adalah ...",
    options: [
      "Telur",
      "Ulat",
      "Kepompong",
      "Kupu-kupu"
    ],
    answer: 3,
    level: "LOTS",
    explanation: "Kupu-kupu merupakan tahap dewasa."
  },

  {
    id: 14,
    question: "Tahap yang tidak terdapat pada metamorfosis tidak sempurna adalah ...",
    options: [
      "Telur",
      "Nimfa",
      "Pupa",
      "Dewasa"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Metamorfosis tidak sempurna tidak memiliki tahap pupa."
  },

  {
    id: 15,
    question: "Hewan yang bentuk anaknya mirip dengan hewan dewasa adalah ...",
    options: [
      "Kupu-kupu",
      "Nyamuk",
      "Belalang",
      "Lalat"
    ],
    answer: 2,
    level: "LOTS",
    explanation: "Nimfa belalang memiliki bentuk yang mirip dengan belalang dewasa."
  },

  {
    id: 16,
    question: "Mengapa ulat disebut larva kupu-kupu?",
    options: [
      "Karena ulat adalah hewan dewasa",
      "Karena ulat merupakan tahap setelah telur",
      "Karena ulat merupakan pupa",
      "Karena ulat tidak mengalami perubahan"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Ulat merupakan tahap larva yang muncul setelah telur menetas."
  },

  {
    id: 17,
    question: "Perhatikan urutan: telur → ulat → kepompong → kupu-kupu. Urutan tersebut merupakan metamorfosis ...",
    options: [
      "Tidak sempurna",
      "Sederhana",
      "Sempurna",
      "Sebagian"
    ],
    answer: 2,
    level: "MOTS",
    explanation: "Adanya tahap larva dan pupa menunjukkan metamorfosis sempurna."
  },

  {
    id: 18,
    question: "Perbedaan utama metamorfosis sempurna dan tidak sempurna adalah ...",
    options: [
      "Jumlah makanan",
      "Ada atau tidaknya tahap pupa",
      "Tempat hidup hewan",
      "Ukuran hewan"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Metamorfosis sempurna memiliki tahap pupa, sedangkan metamorfosis tidak sempurna tidak memiliki tahap pupa."
  },

  {
    id: 19,
    question: "Jika seekor belalang baru keluar dari telur dan bentuknya mirip belalang dewasa tetapi lebih kecil, hewan itu berada pada tahap ...",
    options: [
      "Pupa",
      "Nimfa",
      "Larva",
      "Telur"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Belalang muda yang bentuknya mirip dewasa disebut nimfa."
  },

  {
    id: 20,
    question: "Mengapa metamorfosis kupu-kupu disebut sempurna?",
    options: [
      "Karena kupu-kupu selalu terbang",
      "Karena memiliki tahap telur, larva, pupa, dan dewasa",
      "Karena kupu-kupu memiliki sayap",
      "Karena kupu-kupu hidup di udara"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Kupu-kupu memiliki empat tahap utama: telur, larva, pupa, dan dewasa."
  },

  {
    id: 21,
    question: "Hewan X memiliki tahapan telur → nimfa → dewasa. Hewan X kemungkinan adalah ...",
    options: [
      "Kupu-kupu",
      "Nyamuk",
      "Belalang",
      "Lalat"
    ],
    answer: 2,
    level: "MOTS",
    explanation: "Belalang mengalami metamorfosis tidak sempurna dengan tahap telur, nimfa, dan dewasa."
  },

  {
    id: 22,
    question: "Jika kamu menemukan kepompong menempel pada daun, kemungkinan hewan tersebut akan berubah menjadi ...",
    options: [
      "Belalang",
      "Kupu-kupu",
      "Kecoa",
      "Berudu"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Kepompong merupakan tahap pupa kupu-kupu sebelum menjadi kupu-kupu dewasa."
  },

  {
    id: 23,
    question: "Perhatikan urutan berikut: telur → berudu → katak muda → katak dewasa. Urutan tersebut menunjukkan daur hidup ...",
    options: [
      "Kupu-kupu",
      "Belalang",
      "Katak",
      "Nyamuk"
    ],
    answer: 2,
    level: "MOTS",
    explanation: "Katak mengalami perubahan dari telur menjadi berudu, katak muda, lalu katak dewasa."
  },

  {
    id: 24,
    question: "Apa yang terjadi pada tubuh ulat setelah memasuki tahap pupa?",
    options: [
      "Tidak mengalami perubahan",
      "Mengalami perubahan menuju bentuk dewasa",
      "Menjadi nimfa",
      "Kembali menjadi telur"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Pada tahap pupa terjadi perubahan menuju bentuk kupu-kupu dewasa."
  },

  {
    id: 25,
    question: "Persamaan metamorfosis kupu-kupu dan belalang adalah ...",
    options: [
      "Keduanya memiliki tahap pupa",
      "Keduanya dimulai dari telur",
      "Keduanya memiliki tahap larva",
      "Keduanya tidak mengalami perubahan"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Baik kupu-kupu maupun belalang memulai daur hidupnya dari telur."
  },

  {
    id: 26,
    question: "Perbedaan bentuk tubuh ulat dan kupu-kupu menunjukkan bahwa ...",
    options: [
      "Kupu-kupu tidak tumbuh",
      "Kupu-kupu mengalami metamorfosis",
      "Ulat adalah hewan berbeda",
      "Ulat tidak akan berubah"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Perubahan bentuk yang jelas dari ulat menjadi kupu-kupu merupakan ciri metamorfosis sempurna."
  },

  {
    id: 27,
    question: "Siti melihat seekor hewan kecil yang bentuknya mirip belalang tetapi belum memiliki sayap sempurna. Hewan itu kemungkinan adalah ...",
    options: [
      "Larva",
      "Pupa",
      "Nimfa",
      "Telur"
    ],
    answer: 2,
    level: "MOTS",
    explanation: "Nimfa belalang menyerupai belalang dewasa tetapi belum berkembang sempurna."
  },

  {
    id: 28,
    question: "Tahap pupa penting bagi kupu-kupu karena pada tahap tersebut ...",
    options: [
      "Kupu-kupu mencari makanan",
      "Tubuh mengalami perubahan menuju bentuk dewasa",
      "Kupu-kupu bertelur",
      "Kupu-kupu menjadi nimfa"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Pada tahap pupa terjadi perubahan tubuh yang besar sebelum menjadi kupu-kupu dewasa."
  },

  {
    id: 29,
    question: "Jika telur nyamuk menetas, tahap berikutnya adalah ...",
    options: [
      "Pupa",
      "Larva atau jentik-jentik",
      "Nimfa",
      "Nyamuk dewasa"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Telur nyamuk menetas menjadi larva yang biasa disebut jentik-jentik."
  },

  {
    id: 30,
    question: "Jentik-jentik yang kamu lihat di air merupakan tahap ... dalam metamorfosis nyamuk.",
    options: [
      "Telur",
      "Larva",
      "Pupa",
      "Dewasa"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Jentik-jentik merupakan larva nyamuk."
  },

  {
    id: 31,
    question: "Urutan metamorfosis nyamuk yang benar adalah ...",
    options: [
      "Telur → nimfa → dewasa",
      "Telur → larva → pupa → dewasa",
      "Telur → pupa → nimfa → dewasa",
      "Telur → larva → dewasa"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Nyamuk mengalami metamorfosis sempurna: telur, larva, pupa, dan dewasa."
  },

  {
    id: 32,
    question: "Jika sebuah hewan memiliki tahap telur, larva, pupa, dan dewasa, hewan tersebut mengalami ...",
    options: [
      "Metamorfosis tidak sempurna",
      "Metamorfosis sempurna",
      "Pertumbuhan biasa",
      "Perubahan warna"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Empat tahap tersebut merupakan ciri metamorfosis sempurna."
  },

  {
    id: 33,
    question: "Mengapa nimfa belalang disebut mirip dengan belalang dewasa?",
    options: [
      "Karena sudah menjadi dewasa",
      "Karena bentuk tubuhnya menyerupai dewasa tetapi belum berkembang sempurna",
      "Karena berasal dari pupa",
      "Karena tidak mengalami pertumbuhan"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Nimfa memiliki bentuk dasar seperti dewasa, tetapi ukuran dan beberapa bagian tubuhnya belum sempurna."
  },

  {
    id: 34,
    question: "Seorang anak menemukan telur katak di kolam. Tahap berikutnya yang mungkin ia lihat adalah ...",
    options: [
      "Kupu-kupu",
      "Berudu",
      "Nimfa",
      "Kepompong"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Telur katak akan berkembang menjadi berudu atau kecebong."
  },

  {
    id: 35,
    question: "Kelompok hewan yang semuanya mengalami metamorfosis sempurna adalah ...",
    options: [
      "Belalang dan kecoa",
      "Kupu-kupu dan nyamuk",
      "Belalang dan katak",
      "Kecoa dan capung"
    ],
    answer: 1,
    level: "MOTS",
    explanation: "Kupu-kupu dan nyamuk memiliki tahap telur, larva, pupa, dan dewasa."
  },

  {
    id: 36,
    question: "Rani menemukan banyak jentik-jentik di genangan air. Beberapa minggu kemudian, ia melihat nyamuk terbang di sekitar rumah. Kesimpulan yang tepat adalah ...",
    options: [
      "Jentik-jentik adalah nimfa nyamuk",
      "Jentik-jentik merupakan salah satu tahap metamorfosis nyamuk",
      "Jentik-jentik adalah telur nyamuk",
      "Nyamuk tidak mengalami metamorfosis"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Jentik-jentik merupakan tahap larva dalam metamorfosis nyamuk."
  },

  {
    id: 37,
    question: "Budi menemukan ulat pada daun. Ia kembali beberapa hari kemudian dan melihat kepompong. Apa yang kemungkinan terjadi selanjutnya?",
    options: [
      "Menjadi telur",
      "Menjadi nimfa",
      "Menjadi kupu-kupu",
      "Menjadi berudu"
    ],
    answer: 2,
    level: "HOTS",
    explanation: "Setelah tahap pupa atau kepompong, kupu-kupu akan menjadi dewasa."
  },

  {
    id: 38,
    question: "Dika mengamati dua hewan. Hewan A memiliki tahap telur → larva → pupa → dewasa. Hewan B memiliki tahap telur → nimfa → dewasa. Pernyataan yang tepat adalah ...",
    options: [
      "A dan B mengalami metamorfosis sempurna",
      "A sempurna, B tidak sempurna",
      "A tidak sempurna, B sempurna",
      "A dan B tidak mengalami metamorfosis"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Hewan A memiliki pupa sehingga termasuk metamorfosis sempurna. Hewan B tidak memiliki pupa."
  },

  {
    id: 39,
    question: "Perhatikan dua urutan berikut: Hewan P: telur → ulat → kepompong → dewasa. Hewan Q: telur → nimfa → dewasa. Jika kedua hewan sedang berada pada tahap kedua, perbedaannya adalah ...",
    options: [
      "P berupa larva, Q berupa nimfa",
      "P berupa pupa, Q berupa larva",
      "P berupa telur, Q berupa pupa",
      "Keduanya berupa pupa"
    ],
    answer: 0,
    level: "HOTS",
    explanation: "Tahap kedua kupu-kupu adalah larva atau ulat, sedangkan tahap kedua belalang adalah nimfa."
  },

  {
    id: 40,
    question: "Di sebuah kolam terdapat telur katak. Kolam tersebut kemudian mengering sebelum telur menetas. Apa kemungkinan yang terjadi?",
    options: [
      "Telur berkembang menjadi kupu-kupu",
      "Perkembangan telur dapat terganggu karena membutuhkan lingkungan yang sesuai",
      "Telur langsung menjadi katak dewasa",
      "Telur berubah menjadi nimfa"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Telur katak membutuhkan lingkungan yang sesuai, terutama air, agar dapat berkembang."
  },

  {
    id: 41,
    question: "Andi berkata, 'Belalang mengalami metamorfosis sempurna karena memiliki telur, nimfa, dan dewasa.' Mengapa pendapat Andi kurang tepat?",
    options: [
      "Belalang tidak bertelur",
      "Belalang memiliki tahap pupa",
      "Metamorfosis sempurna harus memiliki tahap pupa, sedangkan belalang tidak",
      "Belalang tidak mengalami perubahan"
    ],
    answer: 2,
    level: "HOTS",
    explanation: "Belalang mengalami metamorfosis tidak sempurna karena tidak memiliki tahap pupa."
  },

  {
    id: 42,
    question: "Seekor hewan memiliki tahap telur → larva → pupa → dewasa. Hewan tersebut kehilangan tahap pupa. Apa yang paling mungkin terjadi?",
    options: [
      "Tidak ada perubahan",
      "Siklus hidupnya menjadi berbeda dari metamorfosis sempurna",
      "Hewan langsung menjadi nimfa",
      "Hewan langsung menjadi telur"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Tahap pupa merupakan salah satu ciri penting metamorfosis sempurna."
  },

  {
    id: 43,
    question: "Guru menampilkan gambar: telur → jentik-jentik → pupa → nyamuk. Seorang siswa mengatakan gambar tersebut menunjukkan metamorfosis belalang. Apa yang sebaiknya dilakukan?",
    options: [
      "Membenarkan karena semua hewan memiliki tahapan sama",
      "Menolak karena urutan tersebut merupakan metamorfosis nyamuk",
      "Mengubah jentik-jentik menjadi nimfa",
      "Menghapus tahap pupa"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Jentik-jentik dan pupa merupakan tahapan metamorfosis nyamuk."
  },

  {
    id: 44,
    question: "Mengapa menjaga kebersihan lingkungan dapat membantu mengurangi jumlah nyamuk?",
    options: [
      "Karena nyamuk tidak bisa terbang",
      "Karena mengurangi tempat yang dapat digunakan nyamuk untuk berkembang biak",
      "Karena nyamuk berubah menjadi kupu-kupu",
      "Karena semua nyamuk hidup di tanah"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Mengurangi genangan air dapat mengurangi tempat nyamuk bertelur dan berkembang."
  },

  {
    id: 45,
    question: "Di taman sekolah terdapat banyak daun yang dimakan ulat. Beberapa minggu kemudian, terlihat banyak kupu-kupu. Hubungan kedua kejadian tersebut adalah ...",
    options: [
      "Ulat merupakan salah satu tahap kehidupan kupu-kupu",
      "Ulat dan kupu-kupu tidak berhubungan",
      "Kupu-kupu berubah menjadi ulat",
      "Ulat adalah nimfa kupu-kupu"
    ],
    answer: 0,
    level: "HOTS",
    explanation: "Ulat merupakan tahap larva dalam daur hidup kupu-kupu."
  },

  {
    id: 46,
    question: "Perhatikan data berikut: Hewan A: telur–larva–pupa–dewasa. Hewan B: telur–nimfa–dewasa. Jika siswa ingin mencari hewan yang bentuk anaknya paling berbeda dari hewan dewasa, hewan mana yang lebih tepat dipilih?",
    options: [
      "Hewan A",
      "Hewan B",
      "Keduanya sama",
      "Tidak dapat diketahui"
    ],
    answer: 0,
    level: "HOTS",
    explanation: "Pada metamorfosis sempurna, bentuk larva sangat berbeda dari hewan dewasa."
  },

  {
    id: 47,
    question: "Lala ingin membuat poster tentang cara mengurangi nyamuk di rumah. Tindakan yang paling sesuai dengan pengetahuan tentang daur hidup nyamuk adalah ...",
    options: [
      "Membiarkan genangan air",
      "Menguras tempat penampungan air secara rutin",
      "Menambah tempat air terbuka",
      "Menyimpan sampah di halaman"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Menguras tempat penampungan air membantu menghilangkan tempat nyamuk berkembang biak."
  },

  {
    id: 48,
    question: "Seorang siswa menyusun kartu daur hidup kupu-kupu: 1. kupu-kupu, 2. telur, 3. pupa, 4. larva. Urutan yang benar adalah ...",
    options: [
      "1 → 2 → 4 → 3",
      "2 → 4 → 3 → 1",
      "2 → 3 → 4 → 1",
      "4 → 2 → 3 → 1"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Urutan yang benar adalah telur → larva → pupa → kupu-kupu dewasa."
  },

  {
    id: 49,
    question: "Riko menemukan seekor serangga kecil yang bentuk tubuhnya hampir sama dengan serangga dewasa, tetapi sayapnya belum sempurna. Berdasarkan pengamatan tersebut, kemungkinan serangga itu adalah ...",
    options: [
      "Larva kupu-kupu",
      "Pupa nyamuk",
      "Nimfa belalang",
      "Telur lalat"
    ],
    answer: 2,
    level: "HOTS",
    explanation: "Nimfa belalang mirip dengan belalang dewasa tetapi belum memiliki bentuk tubuh yang sempurna."
  },

  {
    id: 50,
    question: "Guru meminta siswa membandingkan kupu-kupu dan belalang. Kesimpulan terbaik adalah ...",
    options: [
      "Keduanya tidak mengalami metamorfosis",
      "Keduanya mengalami metamorfosis, tetapi tahapan pertumbuhannya berbeda",
      "Keduanya memiliki tahap pupa",
      "Keduanya memiliki tahap nimfa"
    ],
    answer: 1,
    level: "HOTS",
    explanation: "Keduanya mengalami metamorfosis, tetapi kupu-kupu sempurna sedangkan belalang tidak sempurna."
  }
];
