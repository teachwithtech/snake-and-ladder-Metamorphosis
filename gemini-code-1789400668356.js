/* ===================================================
   DATA PERTANYAAN METAMORFOSIS (100 SOAL KELAS 3 SD)
   =================================================== */
   const questionsData = {
    1: { level: "EASY", q: "Metamorfosis adalah proses perubahan ... pada hewan.", ops: ["Ukuran tubuh", "Bentuk tubuh", "Warna kulit", "Jumlah kaki"], ans: 1, exp: "Metamorfosis adalah perubahan bentuk tubuh bertahap pada hewan." },
    2: { level: "EASY", q: "Daur hidup hewan dimulai dari ...", ops: ["Anak", "Telur / Kelahiran", "Dewasa", "Kepompong"], ans: 1, exp: "Semua daur hidup hewan dimulai dari telur atau kelahiran." },
    3: { level: "EASY", q: "Kupu-kupu berkembang biak dengan cara ...", ops: ["Melahirkan", "Bertelur", "Membelah diri", "Tunas"], ans: 1, exp: "Kupu-kupu adalah hewan bertelur (ovipar)." },
    4: { level: "EASY", q: "Tahap awal daur hidup kupu-kupu adalah ...", ops: ["Ulat", "Kepompong", "Telur", "Kupu-kupu kecil"], ans: 2, exp: "Induk kupu-kupu meletakkan telur di permukaan daun." },
    5: { level: "EASY", q: "Ulat pada daur hidup kupu-kupu dinamakan juga ...", ops: ["Pupa", "Larva", "Nimfa", "Imago"], ans: 1, exp: "Larva adalah nama ilmiah dari tahap ulat." },
    6: { level: "EASY", q: "Makanan utama dari larva kupu-kupu (ulat) adalah ...", ops: ["Bunga", "Daun", "Daging", "Biji"], ans: 1, exp: "Ulat sangat aktif makan daun-daunan untuk mengumpulkan energi." },
    7: { level: "EASY", q: "Setelah tahap ulat, kupu-kupu akan berubah menjadi ...", ops: ["Nyamuk", "Kepompong (Pupa)", "Telur lagi", "Nimfa"], ans: 1, exp: "Ulat membungkus dirinya menjadi kepompong atau pupa." },
    8: { level: "EASY", q: "Nama lain dari kepompong adalah ...", ops: ["Larva", "Pupa", "Nimfa", "Imago"], ans: 1, exp: "Pupa adalah istilah biologi untuk kepompong." },
    9: { level: "EASY", q: "Hewan dewasa yang sudah sempurna bentuknya disebut ...", ops: ["Imago", "Pupa", "Larva", "Nimfa"], ans: 0, exp: "Imago adalah sebutan untuk hewan tahap dewasa." },
    10: { level: "EASY", q: "Kupu-kupu mengalami metamorfosis ...", ops: ["Tidak sempurna", "Sempurna", "Ganda", "Ametamorfosis"], ans: 1, exp: "Metamorfosis sempurna karena ada fase pupa/kepompong." },
    11: { level: "EASY", q: "Katak hidup di dua alam, yaitu darat dan air. Katak disebut hewan ...", ops: ["Reptil", "Amfibi", "Mamalia", "Unggas"], ans: 1, exp: "Amfibi adalah hewan yang hidup di darat dan air." },
    12: { level: "EASY", q: "Telur katak menetas menjadi ...", ops: ["Katak kecil", "Kecebong (Berudu)", "Ulat", "Jentik"], ans: 1, exp: "Telur katak di air menetas menjadi kecebong." },
    13: { level: "EASY", q: "Kecebong/berudu bernapas menggunakan ...", ops: ["Paru-paru", "Insang", "Kulit", "Trakea"], ans: 1, exp: "Saat hidup di air, kecebong bernapas dengan insang." },
    14: { level: "EASY", q: "Katak dewasa bernapas di darat menggunakan paru-paru dan ...", ops: ["Insang", "Kulit basah", "Sirip", "Ekor"], ans: 1, exp: "Kulit basah membantu katak dewasa menyerap oksigen." },
    15: { level: "EASY", q: "Urutan daur hidup katak yang benar adalah ...", ops: ["Telur - Berudu - Katak Muda - Katak Dewasa", "Berudu - Telur - Katak Dewasa", "Telur - Katak Dewasa - Berudu", "Katak Muda - Berudu - Telur"], ans: 0, exp: "Katak: Telur -> Berudu -> Katak Muda -> Katak Dewasa." },
    16: { level: "EASY", q: "Nyamuk bertelur di ...", ops: ["Tanah kering", "Air menggenang", "Daun pohon", "Udara"], ans: 1, exp: "Induk nyamuk meletakkan telurnya di atas permukaan air menggenang." },
    17: { level: "EASY", q: "Anak nyamuk yang hidup di air disebut ...", ops: ["Berudu", "Jentik-jentik (Uget-uget)", "Belatung", "Ulat"], ans: 1, exp: "Jentik-jentik adalah tahap larva dari nyamuk." },
    18: { level: "EASY", q: "Penyakit Demam Berdarah ditularkan oleh nyamuk ...", ops: ["Anopheles", "Aedes aegypti", "Culex", "Lalat tsetse"], ans: 1, exp: "Nyamuk Aedes aegypti membawa virus demam berdarah." },
    19: { level: "EASY", q: "Nyamuk mengalami metamorfosis ...", ops: ["Sempurna", "Tidak sempurna", "Ametamorfosis", "Lambat"], ans: 0, exp: "Metamorfosis nyamuk lengkap: Telur-Jentik-Pupa-Nyamuk." },
    20: { level: "EASY", q: "Urutan metamorfosis nyamuk yang benar adalah ...", ops: ["Telur - Pupa - Jentik - Nyamuk", "Telur - Jentik - Pupa - Nyamuk", "Jentik - Telur - Nyamuk - Pupa", "Pupa - Telur - Jentik - Nyamuk"], ans: 1, exp: "Tahapan nyamuk: Telur -> Jentik -> Pupa -> Nyamuk Dewasa." },
    21: { level: "EASY", q: "Larva lalat biasanya dinamakan ...", ops: ["Jentik", "Belatung", "Ulat", "Kecebong"], ans: 1, exp: "Larva lalat dikenal sebagai belatung." },
    22: { level: "EASY", q: "Lalat hinggap di sampah dapat menyebarkan bibit penyakit ...", ops: ["DHF", "Diare", "Flu", "Batuk"], ans: 1, exp: "Lalat membawa kuman dari sampah ke makanan yang memicu diare." },
    23: { level: "EASY", q: "Metamorfosis yang TIDAK mengalami fase pupa/kepompong disebut ...", ops: ["Metamorfosis sempurna", "Metamorfosis tidak sempurna", "Ametamorfosis", "Transformasi"], ans: 1, exp: "Metamorfosis tidak sempurna hanya melalui tahapan telur-nimfa-dewasa." },
    24: { level: "EASY", q: "Hewan muda pada metamorfosis tidak sempurna dinamakan ...", ops: ["Larva", "Nimfa", "Pupa", "Imago"], ans: 1, exp: "Nimfa adalah hewan muda yang mirip hewan dewasa tetapi belum bersayap." },
    25: { level: "EASY", q: "Contoh hewan yang mengalami metamorfosis tidak sempurna adalah ...", ops: ["Kupu-kupu", "Belalang", "Nyamuk", "Katak"], ans: 1, exp: "Belalang tidak melalui fase pupa/kepompong." },
    26: { level: "EASY", q: "Kecoa muda yang baru menetas dari telur disebut ...", ops: ["Larva", "Nimfa", "Pupa", "Ulat"], ans: 1, exp: "Anak kecoa disebut nimfa." },
    27: { level: "EASY", q: "Tahapan daur hidup belalang yang benar adalah ...", ops: ["Telur - Larva - Pupa - Dewasa", "Telur - Nimfa - Belalang Dewasa", "Telur - Kepompong - Dewasa", "Nimfa - Telur - Dewasa"], ans: 1, exp: "Belalang: Telur -> Nimfa -> Dewasa." },
    28: { level: "EASY", q: "Ametamorfosis artinya hewan ... mengalami perubahan bentuk.", ops: ["Banyak", "Tidak", "Sangat cepat", "Selalu"], ans: 1, exp: "Ametamorfosis = tanpa metamorfosis." },
    29: { level: "EASY", q: "Contoh hewan yang mengalami ametamorfosis (tanpa metamorfosis) adalah ...", ops: ["Kucing", "Kupu-kupu", "Belalang", "Katak"], ans: 0, exp: "Kucing lahir langsung berbentuk kucing kecil." },
    30: { level: "EASY", q: "Ayam berkembang biak dengan ... dan anak ayam bentuknya mirip induknya.", ops: ["Melahirkan", "Bertelur", "Membelah diri", "Spora"], ans: 1, exp: "Ayam bertelur dan bentuk anak ayam mirip induknya." },
    
    // MEDIUM QUESTIONS (31 - 70)
    31: { level: "MEDIUM", q: "Perbedaan utama antara larva dan nimfa adalah ...", ops: ["Nimfa punya sayap besar", "Larva bentuknya sangat beda dari dewasa, nimfa mirip dewasa", "Larva bertelur", "Nimfa menjadi pupa"], ans: 1, exp: "Larva berbeda total dari imago, sedangkan nimfa menyerupai imago versi kecil." },
    32: { level: "MEDIUM", q: "Mengapa tahap ulat (larva) pada kupu-kupu sering merugikan petani?", ops: ["Ulat memakan bunga", "Ulat memakan daun tanaman hingga habis", "Ulat merusak akar", "Ulat menghisap darah"], ans: 1, exp: "Ulat sangat rakus memakan daun sehingga merusak tanaman." },
    33: { level: "MEDIUM", q: "Bagaimana cara kita mencegah perkembangbiakan nyamuk di rumah?", ops: ["Menimbun barang bekas dan menguras bak mandi", "Membiarkan air menggenang", "Menanam banyak rumput", "Membuka jendela malam hari"], ans: 0, exp: "3M (Menguras, Menutup, Mengubur) memutus rantai telur/jentik nyamuk." },
    34: { level: "MEDIUM", q: "Tahap dalam metamorfosis sempurna di mana hewan berdiam diri dan berpuasa adalah ...", ops: ["Larva", "Pupa", "Nimfa", "Imago"], ans: 1, exp: "Dalam pupa, jaringan tubuh dirombak total tanpa makan." },
    35: { level: "MEDIUM", q: "Kecoa dewasa memiliki ... sedangkan nimfa kecoa tidak memilikinya.", ops: ["Kaki", "Mata", "Sayap yang sempurna", "Antena"], ans: 2, exp: "Nimfa kecoa belum memiliki sayap yang berkembang sempurna." },
    36: { level: "MEDIUM", q: "Proses pergantian kulit pada nimfa belalang atau kecoa disebut ...", ops: ["Metamorfosis", "Eksdisis / Molting", "Fotosintesis", "Respirasi"], ans: 1, exp: "Molting/ekdisis adalah pelepasan kulit lama agar tubuh bisa membesar." },
    37: { level: "MEDIUM", q: "Hewan mana di bawah ini yang mengalami tahap pupa?", ops: ["Kumbang", "Belalang", "Capung", "Jangkrik"], ans: 0, exp: "Kumbang mengalami metamorfosis sempurna (ada pupa)." },
    38: { level: "MEDIUM", q: "Capung muda (nimfa capung) hidup di mana?", ops: ["Darat", "Air", "Udara", "Dalam tanah"], ans: 1, exp: "Nimfa capung hidup di dalam air sebagai predator air." },
    39: { level: "MEDIUM", q: "Berudu/kecebong akan perlahan tumbuh ... sebelum ekornya menyusut.", ops: ["Sayap", "Kaki depan dan belakang", "Antena", "Paruh"], ans: 1, exp: "Kecebong menumbuhkan kaki belakang lalu kaki depan." },
    40: { level: "MEDIUM", q: "Kupu-kupu dewasa mengisap ... dari bunga.", ops: ["Daun", "Nektar / Madu", "Air liur", "Serbuk sari"], ans: 1, exp: "Nektar adalah cairan manis di dalam bunga." },
    41: { level: "MEDIUM", q: "Kupu-kupu membantu tumbuhan dalam proses ...", ops: ["Fotosintesis", "Penyerbukan", "Pencernaan", "Pernapasan"], ans: 1, exp: "Saat hinggap di bunga, kupu-kupu membantu penyerbukan." },
    42: { level: "MEDIUM", q: "Apa yang terjadi pada ekor kecebong saat berubah menjadi katak dewasa?", ops: ["Tumbuh makin panjang", "Menyusut dan menghilang", "Berubah jadi kaki", "Menjadi cabang"], ans: 1, exp: "Ekor kecebong terserap ke dalam tubuh saat menjadi katak dewasa." },
    43: { level: "MEDIUM", q: "Sapi, Kambing, dan Kucing berkembang biak dengan ...", ops: ["Bertelur", "Melahirkan (Vivipar)", "Bertelur-melahirkan", "Tunas"], ans: 1, exp: "Mamalia melahirkan anaknya (vivipar)." },
    44: { level: "MEDIUM", q: "Hewan yang mengalami metamorfosis sempurna adalah ...", ops: ["Kupu-kupu dan Nyamuk", "Belalang dan Kecoa", "Ayam dan Bebek", "Kucing dan Anjing"], ans: 0, exp: "Kupu-kupu dan nyamuk melalui fase telur-larva-pupa-dewasa." },
    45: { level: "MEDIUM", q: "Tahapan larva pada kumbang sering disebut ...", ops: ["Uler", "Uret / Stren", "Belatung", "Jentik"], ans: 1, exp: "Uret adalah sebutan larva kumbang tanah." },
    46: { level: "MEDIUM", q: "Jangkrik mengalami metamorfosis ...", ops: ["Sempurna", "Tidak sempurna", "Tanpa metamorfosis", "Ganda"], ans: 1, exp: "Jangkrik: Telur -> Nimfa -> Jangkrik Dewasa." },
    47: { level: "MEDIUM", q: "Telur nyamuk menetas menjadi jentik dalam waktu relatif ...", ops: ["Sangat cepat (hitungan hari)", "Berbulan-bulan", "1 Tahun", "1 Jam"], ans: 0, exp: "Telur nyamuk dapat menetas dalam 1-3 hari di air." },
    48: { level: "MEDIUM", q: "Bentuk tubuh anak kucing ketika lahir adalah ...", ops: ["Mirip induknya tapi kecil", "Sangat berbeda dari induknya", "Berbentuk telur", "Berbentuk kepompong"], ans: 0, exp: "Anak kucing langsung mirip induknya (ametamorfosis)." },
    49: { level: "MEDIUM", q: "Nyamuk jantan biasanya makan ...", ops: ["Darah manusia", "Cairan tumbuhan / Nektar", "Daging", "Air kotor"], ans: 1, exp: "Hanya nyamuk betina yang menghisap darah untuk nutrisi telurnya." },
    50: { level: "MEDIUM", q: "Ulat sutra dipelihara manusia untuk diambil ...", ops: ["Dagingnya", "Kepompongnya (benang sutra)", "Telurnya", "Minyaknya"], ans: 1, exp: "Kepompong ulat sutra dipintal menjadi kain sutra halus." },
    
    // HARD / HOTS QUESTIONS (51 - 100)
    51: { level: "HARD", q: "Rani menemukan ulat di daun bunga mawar. Tahap apa yang sedang dialami hewan tersebut?", ops: ["Telur", "Larva", "Pupa", "Imago"], ans: 1, exp: "Ulat adalah tahap larva dari kupu-kupu atau ngengat." },
    52: { level: "HARD", q: "Budi melihat ada benda menggantung keras di ranting pohon. Benda itu adalah ...", ops: ["Larva", "Pupa (Kepompong)", "Nimfa", "Telur"], ans: 1, exp: "Pupa kupu-kupu berdiam diri menggantung di ranting." },
    53: { level: "HARD", q: "Jika di selokan banyak jentik-jentik, beberapa hari kemudian di area itu akan banyak ...", ops: ["Lalat", "Nyamuk", "Katak", "Kupu-kupu"], ans: 1, exp: "Jentik-jentik akan berkembang menjadi nyamuk dewasa." },
    54: { level: "HARD", q: "Mengapa pembasman nyamuk dengan cara 'Fogging' kurang efektif untuk jentik nyamuk?", ops: ["Fogging membunuh jentik", "Fogging hanya membunuh nyamuk dewasa di udara", "Jentik tahan asap", "Asap fogging wangi"], ans: 1, exp: "Fogging berupa asap untuk nyamuk terbang, jentik di air butuh abatisasi/kuras." },
    55: { level: "HARD", q: "Mengapa katak dewasa bisa melompat jauh di darat sedangkan kecebong hanya bisa berenang?", ops: ["Katak dewasa punya kaki kuat, kecebong punya ekor/sirip", "Kecebong punya sayap", "Katak dewasa tidak punya tulang", "Kecebong berbisa"], ans: 0, exp: "Perubahan organ tubuh mendukung perbedaan habitat hidupnya." },
    56: { level: "HARD", q: "Seorang petani gembira melihat banyak kupu-kupu di kebunnya. Hal ini karena kupu-kupu ...", ops: ["Memakan buah", "Membuat daun habis", "Membantu penyerbukan bunga jadi buah", "Membawa racun"], ans: 2, exp: "Kupu-kupu dewasa membantu penyerbukan tanaman." },
    57: { level: "HARD", q: "Pernyataan BENAR tentang perbedaan kecoa dan kupu-kupu adalah ...", ops: ["Kecoa ada fase pupa, kupu-kupu tidak", "Kupu-kupu ada fase pupa, kecoa tidak ada", "Keduanya tidak bertelur", "Keduanya bernapas dengan insang"], ans: 1, exp: "Kupu-kupu metamorfosis sempurna (ada pupa), kecoa tidak sempurna (tanpa pupa)." },
    58: { level: "HARD", q: "Apa dampak buruk jika populasi katak di sawah habis ditangkapi?", ops: ["Padi makin subur", "Hama serangga seperti belalang meningkat pesat", "Ular sawah mati semua", "Air sawah mengering"], ans: 1, exp: "Katak adalah pemangsa serangga. Tanpa katak, serangga hama melonjak." },
    59: { level: "HARD", q: "Mengapa ulat harus berganti kulit beberapa kali saat tumbuh?", ops: ["Kulit ulat tidak ikut membesar seiring tubuhnya", "Agar warnanya berubah jadi merah", "Untuk menakuti musuh", "Agar bisa terbang"], ans: 0, exp: "Eksoskeleton/kulit ulat kaku sehingga perlu diganti saat tubuhnya bertambah besar." },
    60: { level: "HARD", q: "Ditemukan hewan kecil mirip belalang tetapi belum memiliki sayap. Hewan tersebut berada pada tahap ...", ops: ["Larva", "Pupa", "Nimfa", "Telur"], ans: 2, exp: "Nimfa belalang bentuknya mirip belalang dewasa tapi belum bersayap." },
    61: { level: "HARD", q: "Urutkan daur hidup lalat dari awal:", ops: ["Telur - Belatung - Pupa - Lalat Dewasa", "Belatung - Telur - Lalat", "Pupa - Telur - Belatung", "Lalat - Pupa - Telur"], ans: 0, exp: "Telur -> Belatung (Larva) -> Pupa -> Lalat Dewasa." },
    62: { level: "HARD", q: "Serbuk abate yang ditaburkan ke tempat penampungan air bertujuan untuk membunuh ...", ops: ["Nyamuk dewasa", "Jentik-jentik nyamuk", "Katak", "Ikan"], ans: 1, exp: "Abate adalah larvasida untuk meracuni jentik nyamuk." },
    63: { level: "HARD", q: "Manakah pasangan hewan dan jenis metamorfosisnya yang TEPAT?", ops: ["Nyamuk - Tidak Sempurna", "Belalang - Sempurna", "Kupu-kupu - Sempurna", "Katak - Ametamorfosis"], ans: 2, exp: "Kupu-kupu mengalami metamorfosis sempurna." },
    64: { level: "HARD", q: "Di bawah ini hewan yang anak dan induknya memiliki bentuk sangat serupa adalah ...", ops: ["Nyamuk", "Kambing", "Katak", "Lalat"], ans: 1, exp: "Kambing tergolong ametamorfosis (anak mirip induk)." },
    65: { level: "HARD", q: "Urutan tahap metamorfosis sempurna yang benar:", ops: ["Telur -> Pupa -> Larva -> Dewasa", "Telur -> Larva -> Pupa -> Dewasa", "Larva -> Telur -> Pupa -> Dewasa", "Dewasa -> Pupa -> Larva -> Telur"], ans: 1, exp: "Urutan baku: Telur -> Larva -> Pupa -> Dewasa." },
    66: { level: "HARD", q: "Kecebong yang mulai tumbuh dua kaki belakang dinamakan ...", ops: ["Katak dewasa", "Berudu berkaki", "Pupa", "Nimfa"], ans: 1, exp: "Tahap perkembangan berudu lanjutan sebelum menjadi katak muda." },
    67: { level: "HARD", q: "Kelelawar berkembang biak dengan melahirkan. Daur hidup kelelawar tergolong ...", ops: ["Metamorfosis Sempurna", "Metamorfosis Tidak Sempurna", "Tanpa Metamorfosis (Ametamorfosis)", "Ganda"], ans: 2, exp: "Mamalia seperti kelelawar tidak mengalami metamorfosis." },
    68: { level: "HARD", q: "Di antara hewan berikut, yang larvanya hidup di air tetapi dewasanya terbang di udara adalah ...", ops: ["Kupu-kupu", "Nyamuk", "Belalang", "Kecoa"], ans: 1, exp: "Larva nyamuk (jentik) di air, nyamuk dewasa terbang di udara." },
    69: { level: "HARD", q: "Alasan kupu-kupu dewasa tidak lagi memakan daun adalah ...", ops: ["Kupu-kupu tidak punya mulut ulat (mandibula), tapi punya belalai (probosis)", "Kupu-kupu kenyang", "Kupu-kupu takut ulat", "Daun sudah habis"], ans: 0, exp: "Bentuk mulut berubah dari tipe penggigit/pengunyah jadi pengisap (probosis)." },
    70: { level: "HARD", q: "Capung bertelur di ...", ops: ["Daun kering", "Permukaan air", "Tumpukan sampah", "Pasir pantai"], ans: 1, exp: "Capung meletakkan telurnya di dalam atau dekat air." },
    71: { level: "HARD", q: "Manakah hewan yang TIDAK mengalami fase nimfa?", ops: ["Belalang", "Kecoa", "Kupu-kupu", "Capung"], ans: 2, exp: "Kupu-kupu mengalami fase larva dan pupa, bukan nimfa." },
    72: { level: "HARD", q: "Hewan yang merusak pakaian di almari (ngengat pakaian) menyerang saat berada di tahap ...", ops: ["Telur", "Larva (Ulat)", "Kepompong", "Dewasa"], ans: 1, exp: "Larva ngengat memakan serat kain untuk tumbuh." },
    73: { level: "HARD", q: "Tahapan mana dari nyamuk yang TIDAK membutuhkan makanan?", ops: ["Nyamuk Betina", "Jentik", "Pupa nyamuk", "Nyamuk Jantan"], ans: 2, exp: "Fase pupa nyamuk beristirahat merombak tubuh tanpa makan." },
    74: { level: "HARD", q: "Belalang kayu menetas dari telur langsung menjadi ...", ops: ["Ulat", "Nimfa", "Kepompong", "Jentik"], ans: 1, exp: "Belalang adalah metamorfosis tidak sempurna, jadi menetas jadi nimfa." },
    75: { level: "HARD", q: "Hewan berikut yang bertelur di tempat kotor/busuk adalah ...", ops: ["Kupu-kupu", "Lalat", "Katak", "Capung"], ans: 1, exp: "Lalat hinggap dan bertelur di sampah atau makanan membusuk." },
    76: { level: "HARD", q: "Persamaan antara kecoa dan belalang adalah ...", ops: ["Sama-sama metamorfosis sempurna", "Sama-sama metamorfosis tidak sempurna", "Sama-sama punya pupa", "Sama-sama bernapas dengan insang"], ans: 1, exp: "Keduanya metamorfosis tidak sempurna." },
    77: { level: "HARD", q: "Gambar daur hidup: Telur -> X -> Pupa -> Kupu-kupu. Huruf X adalah ...", ops: ["Nimfa", "Ulat (Larva)", "Kecebong", "Belatung"], ans: 1, exp: "X adalah ulat/larva." },
    78: { level: "HARD", q: "Gambar daur hidup: Telur -> Jentik -> Y -> Nyamuk. Huruf Y adalah ...", ops: ["Ulat", "Pupa", "Nimfa", "Berudu"], ans: 1, exp: "Y adalah pupa nyamuk." },
    79: { level: "HARD", q: "Lalat dewasa memiliki pasang sayap utama sebanyak ...", ops: ["1 pasang (2 sayap)", "2 pasang (4 sayap)", "3 pasang", "Tidak punya"], ans: 0, exp: "Lalat termasuk ordo Diptera (artinya bersayap dua/1 pasang)." },
    80: { level: "HARD", q: "Ametamorfosis terjadi pada hewan kelas mamalia, reptil, dan burung karena ...", ops: ["Bentuk anak saat lahir sudah memiliki struktur organ dasar mirip dewasa", "Anaknya bertelur", "Tidak berdarah panas", "Mengalami fase pupa di perut"], ans: 0, exp: "Struktur tubuh anak mamalia/reptil/burung sudah serupa dewasa sejak lahir." },
    81: { level: "HARD", q: "Katak muda masih memiliki ... pendek yang belum habis terserap.", ops: ["Sayap", "Ekor", "Insang luar", "Tanduk"], ans: 1, exp: "Katak muda memiliki sisa ekor pendek sebelum dewasa total." },
    82: { level: "HARD", q: "Ulat tentara/grayak merugikan petani jagung karena menyerang pada fase ...", ops: ["Imago", "Larva", "Pupa", "Telur"], ans: 1, exp: "Larva ulat merusak tanaman jagung." },
    83: { level: "HARD", q: "Rayap muda yang baru menetas akan menjadi ...", ops: ["Nimfa", "Larva", "Pupa", "Uret"], ans: 0, exp: "Rayap metamorfosis tidak sempurna (melewati tahapan nimfa)." },
    84: { level: "HARD", q: "Mengapa air tergenang harus dibersihkan seminggu sekali?", ops: ["Daur hidup nyamuk dari telur jadi nyamuk butuh sekitar 7-10 hari", "Agar air harum", "Agar katak senang", "Supaya air jadi asin"], ans: 0, exp: "Menguras seminggu sekali memutus siklus perkembangan nyamuk sebelum dewasa." },
    85: { level: "HARD", q: "Hewan yang mengalami perubahan organ pernapasan dari insang menjadi paru-paru/kulit adalah ...", ops: ["Kupu-kupu", "Katak", "Nyamuk", "Belalang"], ans: 1, exp: "Katak (kecebong bernapas insang, katak dewasa paru-paru/kulit)." },
    86: { level: "HARD", q: "Lebah madu mengalami metamorfosis ...", ops: ["Sempurna", "Tidak Sempurna", "Ametamorfosis", "Buatan"], ans: 0, exp: "Lebah: Telur -> Larva -> Pupa -> Lebah Dewasa." },
    87: { level: "HARD", q: "Semut berkembang biak dengan tahapan: Telur -> Larva -> Pupa -> Semut. Artinya metamorfosis semut tergolong ...", ops: ["Sempurna", "Tidak Sempurna", "Tanpa Metamorfosis", "Lambat"], ans: 0, exp: "Ada fase larva dan pupa = metamorfosis sempurna." },
    88: { level: "HARD", q: "Perubahan bentuk tubuh yang sangat dramatis pada metamorfosis sempurna disebut juga ...", ops: ["Holometabola", "Hemimetabola", "Ametabola", "Fototropisme"], ans: 0, exp: "Holometabola adalah nama ilmiah metamorfosis sempurna." },
    89: { level: "HARD", q: "Metamorfosis tidak sempurna dikenal juga dengan istilah biologi ...", ops: ["Holometabola", "Hemimetabola", "Ametabola", "Metabolik"], ans: 1, exp: "Hemimetabola = metamorfosis tidak sempurna." },
    90: { level: "HARD", q: "Cangkang kepompong terbuat dari benang halus yang dihasilkan oleh kelenjar ... larva.", ops: ["Air liur khusus", "Keringat", "Minyak", "Susu"], ans: 0, exp: "Kelenjar ludah ulat menghasilkan benang protein untuk memintal kepompong." },
    91: { level: "HARD", q: "Apakah kutu rambut mengalami metamorfosis?", ops: ["Ya, metamorfosis tidak sempurna (Telur-Nimfa-Kutu)", "Ya, metamorfosis sempurna", "Tidak mengalami", "Hanya tumbuh bunga"], ans: 0, exp: "Kutu rambut: Telur (telur kutu) -> Nimfa -> Kutu Dewasa." },
    92: { level: "HARD", q: "Mengapa belalang muda (nimfa) sering berwarna hijau mirip daun sekitarnya?", ops: ["Untuk menyamar (kamuflase) dari pemangsa", "Karena sakit", "Karena kena sinar matahari", "Agar dipetik petani"], ans: 0, exp: "Kamuflase melindunginya dari burung pemangsa." },
    93: { level: "HARD", q: "Manakah urutan yang BENAR untuk daur hidup nyamuk demam berdarah?", ops: ["Telur -> Jentik -> Pupa -> Nyamuk Dewasa", "Jentik -> Telur -> Nyamuk -> Pupa", "Telur -> Pupa -> Jentik -> Nyamuk", "Pupa -> Telur -> Jentik -> Nyamuk"], ans: 0, exp: "Telur di air -> Jentik -> Pupa -> Nyamuk Dewasa." },
    94: { level: "HARD", q: "Tonggeret (serangga bersuara nyaring di pohon) berada dalam tanah selama bertahun-tahun sebagai ...", ops: ["Nimfa", "Kepompong", "Telur", "Fosil"], ans: 0, exp: "Nimfa tonggeret hidup di dalam tanah mengisap nutrisi akar pohon." },
    95: { level: "HARD", q: "Ulat daun berkembang menjadi kupu-kupu yang indah. Hal ini membuktikan bahwa ...", ops: ["Bentuk hewan muda dapat sangat berbeda dengan dewasa", "Semua ulat mati di daun", "Kupu-kupu tidak bertelur", "Ulat adalah hewan dewasa"], ans: 0, exp: "Ciri metamorfosis sempurna adalah perbedaan ekstrem bentuk muda dan dewasa." },
    96: { level: "HARD", q: "Jangkrik jantan bersuara krik-krik dengan cara ...", ops: ["Membuka mulut", "Menggosokkan kedua sayap depannya", "Menghentakkan kaki", "Bersiul"], ans: 1, exp: "Suara jangkrik berasal dari gesekan kedua sayapnya." },
    97: { level: "HARD", q: "Habitat kecebong adalah di ... sedangkan katak dewasa dapat hidup di ...", ops: ["Air; Darat dan Air", "Darat; Udara", "Udara; Air", "Pohon; Dalam tanah"], ans: 0, exp: "Kecebong sepenuhnya akuatik, katak dewasa amfibi." },
    98: { level: "HARD", q: "Anak ayam yang menetas memiliki bulu halus. Ini adalah contoh hewan yang ...", ops: ["Metamorfosis Sempurna", "Metamorfosis Tidak Sempurna", "Tidak Metamorfosis (Ametamorfosis)", "Bermetamorfosis ganda"], ans: 2, exp: "Ayam hanya mengalami pertumbuhan ukuran tubuh (ametamorfosis)." },
    99: { level: "HARD", q: "Apa fungsi fase Pupa pada metamorfosis sempurna?", ops: ["Tempat pembentukan organ tubuh dewasa (reorganisasi sel)", "Tempat mencari makan", "Tempat bertelur", "Tempat tidur siang"], ans: 0, exp: "Di dalam pupa terjadi transformasi besar pembentukan struktur imago." },
    100: { level: "HARD", q: "Selamat! Kamu di Kotak 100. Apa pelajaran paling berharga tentang metamorfosis?", ops: ["Semua hewan bertelur", "Setiap hewan mengalami tahap pertumbuhan unik untuk bertahan hidup", "Serangga tidak penting", "Katak tidak berkembang biak"], ans: 1, exp: "Metamorfosis adalah bentuk adaptasi hewan untuk kelangsungan hidupnya." }
};

/* ===================================================
   POSISI ULAR DAN TANGGA
   =================================================== */
const LADDERS = {
    3: 22,
    8: 30,
    20: 41,
    28: 55,
    36: 57,
    49: 70,
    63: 82,
    72: 95
};

const SNAKES = {
    17: 7,
    25: 11,
    34: 19,
    47: 26,
    58: 40,
    69: 50,
    84: 62,
    97: 78
};

/* ===================================================
   STATE GAME & VARIABLE GLOBAL
   =================================================== */
let gameMode = 1; // 1 atau 2 pemain
let players = [];
let currentPlayerIndex = 0;
let isRolling = false;
let isSoundMuted = false;

// Audio Synth sederhana (Web Audio API)
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    if (isSoundMuted) return;
    try {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.connect(gain);
        gain.connect(audioCtx.destination);

        if (type === 'dice') {
            osc.type = 'square';
            osc.frequency.setValueAtTime(300, audioCtx.currentTime);
            gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.1);
        } else if (type === 'correct') {
            osc.type = 'sine';
            osc.frequency.setValueAtTime(523.25, audioCtx.currentTime); // C5
            osc.frequency.setValueAtTime(659.25, audioCtx.currentTime + 0.1); // E5
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'wrong') {
            osc.type = 'sawtooth';
            osc.frequency.setValueAtTime(200, audioCtx.currentTime);
            osc.frequency.setValueAtTime(150, audioCtx.currentTime + 0.15);
            gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.3);
        } else if (type === 'win') {
            osc.type = 'triangle';
            osc.frequency.setValueAtTime(400, audioCtx.currentTime);
            osc.frequency.setValueAtTime(800, audioCtx.currentTime + 0.2);
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            osc.start();
            osc.stop(audioCtx.currentTime + 0.5);
        }
    } catch (e) {
        // Fallback jika audio dikunci browser
    }
}

/* ===================================================
   INIT & EVENT LISTENERS
   =================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initLandingPage();
    initBoard();
    initEventListeners();
});

function initLandingPage() {
    const radioMode1 = document.getElementById("mode-1");
    const radioMode2 = document.getElementById("mode-2");
    const groupP2 = document.getElementById("group-p2");
    const p2Input = document.getElementById("p2-name");

    radioMode1.addEventListener("change", () => {
        gameMode = 1;
        groupP2.classList.add("hidden");
        p2Input.removeAttribute("required");
    });

    radioMode2.addEventListener("change", () => {
        gameMode = 2;
        groupP2.classList.remove("hidden");
        p2Input.setAttribute("required", "true");
    });

    document.getElementById("form-player-names").addEventListener("submit", (e) => {
        e.preventDefault();
        const p1Name = document.getElementById("p1-name").value.trim();
        const p2Name = document.getElementById("p2-name").value.trim();

        if (!p1Name || (gameMode === 2 && !p2Name)) return;

        setupPlayers(p1Name, p2Name);
        startGame();
    });
}

function setupPlayers(name1, name2) {
    players = [
        {
            id: 1,
            name: name1,
            pos: 0,
            score: 0,
            correct: 0,
            wrong: 0,
            colorClass: 'pion-p1-color',
            badge: '🟢',
            answers: []
        }
    ];

    if (gameMode === 2) {
        players.push({
            id: 2,
            name: name2,
            pos: 0,
            score: 0,
            correct: 0,
            wrong: 0,
            colorClass: 'pion-p2-color',
            badge: '🔵',
            answers: []
        });
    }

    updatePanelStats();
}

/* ===================================================
   MEMBUAT PAPAN ZIG-ZAG 10x10 (1 - 100)
   =================================================== */
function initBoard() {
    const boardEl = document.getElementById("board");
    boardEl.innerHTML = "";

    // Membuat matriks 10x10 dari atas (100) ke bawah (1)
    // Baris 10: 100 - 91 (Kiri ke Kanan)
    // Baris 9:  81 - 90  (Kanan ke Kiri) ... dst.
    
    for (let row = 10; row >= 1; row--) {
        const isEvenRowFromBottom = (row % 2 === 0);
        
        let rowCells = [];
        for (let col = 1; col <= 10; col++) {
            let cellNum;
            if (isEvenRowFromBottom) {
                // Kiri ke kanan (misal baris 10: 100..91)
                cellNum = (row * 10) - (col - 1);
            } else {
                // Kanan ke kiri (misal baris 9: 81..90)
                cellNum = ((row - 1) * 10) + col;
            }
            rowCells.push(cellNum);
        }

        rowCells.forEach(num => {
            const cellDiv = document.createElement("div");
            cellDiv.className = `cell bg-c${(num % 5) + 1}`;
            cellDiv.dataset.square = num;
            cellDiv.id = `square-${num}`;

            let decor = "";
            let indicator = "";

            if (LADDERS[num]) {
                decor = "🪜";
                indicator = `<span class="cell-indicator" style="color:green;">▲${LADDERS[num]}</span>`;
                cellDiv.classList.add("cell-ladder-start");
            } else if (SNAKES[num]) {
                decor = "🐍";
                indicator = `<span class="cell-indicator" style="color:red;">▼${SNAKES[num]}</span>`;
                cellDiv.classList.add("cell-snake-head");
            } else if (num === 100) {
                decor = "🏆";
            }

            cellDiv.innerHTML = `
                <span class="cell-num">${num}</span>
                <span class="cell-decor">${decor}</span>
                ${indicator}
                <div class="pion-container" id="pion-box-${num}"></div>
            `;
            boardEl.appendChild(cellDiv);
        });
    }
}

/* ===================================================
   EVENT LISTENERS TOMBOL CONTROLLER
   =================================================== */
function initEventListeners() {
    document.getElementById("btn-roll").addEventListener("click", rollDice);
    document.getElementById("btn-materi").addEventListener("click", () => {
        document.getElementById("modal-materi").classList.remove("hidden");
    });
    document.getElementById("btn-close-materi").addEventListener("click", () => {
        document.getElementById("modal-materi").classList.add("hidden");
    });
    document.getElementById("btn-sound").addEventListener("click", toggleSound);
    document.getElementById("btn-restart").addEventListener("click", confirmRestart);
    document.getElementById("btn-play-again").addEventListener("click", resetGameToLanding);
}

function toggleSound() {
    isSoundMuted = !isSoundMuted;
    document.getElementById("btn-sound").textContent = isSoundMuted ? "🔇" : "🔊";
}

function confirmRestart() {
    if (confirm("Apakah kamu yakin ingin mengulang permainan dari awal?")) {
        resetGameToLanding();
    }
}

function resetGameToLanding() {
    document.getElementById("game-page").classList.add("hidden-page");
    document.getElementById("landing-page").classList.remove("hidden-page");
    document.getElementById("modal-winner").classList.add("hidden");
    document.getElementById("btn-restart").classList.add("hidden");
    
    // Reset data
    players = [];
    currentPlayerIndex = 0;
    renderPions();
}

function startGame() {
    document.getElementById("landing-page").classList.add("hidden-page");
    document.getElementById("game-page").classList.remove("hidden-page");
    document.getElementById("btn-restart").classList.remove("hidden");

    // UI Player Panel
    document.getElementById("p1-disp-name").textContent = players[0].name;
    if (gameMode === 2) {
        document.getElementById("card-p2").classList.remove("hidden");
        document.getElementById("p2-disp-name").textContent = players[1].name;
    } else {
        document.getElementById("card-p2").classList.add("hidden");
    }

    currentPlayerIndex = 0;
    updatePanelStats();
    renderPions();
}

/* ===================================================
   UPDATE VISUAL PION DI PAPAN
   =================================================== */
function renderPions() {
    // Bersihkan semua pion
    document.querySelectorAll(".pion-container").forEach(el => el.innerHTML = "");

    players.forEach(p => {
        if (p.pos > 0 && p.pos <= 100) {
            const container = document.getElementById(`pion-box-${p.pos}`);
            if (container) {
                const pionEl = document.createElement("div");
                pionEl.className = `pion ${p.colorClass} pion-bounce`;
                pionEl.title = p.name;
                container.appendChild(pionEl);
            }
        }
    });
}

/* ===================================================
   LOGIKA DADU & PERGERAKAN
   =================================================== */
function rollDice() {
    if (isRolling) return;
    isRolling = true;

    const btnRoll = document.getElementById("btn-roll");
    const diceEl = document.getElementById("dice");
    const diceTxt = document.getElementById("dice-result-text");

    btnRoll.disabled = true;
    diceEl.classList.add("dice-rolling");
    playSound('dice');

    let rollCount = 0;
    const rollInterval = setInterval(() => {
        const rand = Math.floor(Math.random() * 6) + 1;
        diceEl.textContent = getDiceIcon(rand);
        rollCount++;

        if (rollCount > 10) {
            clearInterval(rollInterval);
            diceEl.classList.remove("dice-rolling");

            const diceVal = Math.floor(Math.random() * 6) + 1;
            diceEl.textContent = getDiceIcon(diceVal);
            diceTxt.textContent = `${players[currentPlayerIndex].name} mendapatkan angka ${diceVal}!`;

            movePlayerSequence(diceVal);
        }
    }, 80);
}

function getDiceIcon(val) {
    const icons = ['🎲', '⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return icons[val] || '🎲';
}

function movePlayerSequence(steps) {
    const player = players[currentPlayerIndex];
    let targetPos = player.pos + steps;

    if (targetPos > 100) {
        document.getElementById("dice-result-text").textContent = "Angka dadu terlalu besar. Coba lagi di giliran berikutnya!";
        setTimeout(nextTurn, 1800);
        return;
    }

    // Animasi bergerak langkah demi langkah
    let currentStep = player.pos;
    const stepInterval = setInterval(() => {
        currentStep++;
        player.pos = currentStep;
        renderPions();
        playSound('dice');

        if (currentStep === targetPos) {
            clearInterval(stepInterval);
            updatePanelStats();
            // Setelah berhenti, munculkan soal
            setTimeout(() => {
                showQuestionModal(player.pos);
            }, 500);
        }
    }, 300);
}

/* ===================================================
   SISTEM MODAL PERTANYAAN
   =================================================== */
function showQuestionModal(squareNum) {
    const qData = questionsData[squareNum] || {
        level: "EASY",
        q: "Metamorfosis terjadi pada hewan untuk ...",
        ops: ["Bertambah besar & berkembang", "Tidur", "Lari", "Makan saja"],
        ans: 0,
        exp: "Metamorfosis adalah bagian pertumbuhan hewan."
    };

    const modal = document.getElementById("modal-question");
    const badge = document.getElementById("modal-q-badge");
    const title = document.getElementById("modal-q-title");
    const qText = document.getElementById("question-text");
    const optionsGrid = document.getElementById("options-container");
    const feedbackBox = document.getElementById("feedback-box");

    // Level Badge Styling
    badge.textContent = `🟢 ${qData.level}`;
    badge.className = "level-badge";
    if (qData.level === "EASY") badge.classList.add("badge-easy");
    else if (qData.level === "MEDIUM") badge.classList.add("badge-medium");
    else if (qData.level === "HARD") badge.classList.add("badge-hard");

    title.textContent = `🦋 PERTANYAAN KOTAK ${squareNum}`;
    qText.textContent = qData.q;
    optionsGrid.innerHTML = "";
    feedbackBox.classList.add("hidden");

    qData.ops.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "btn-option";
        btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}`;
        btn.addEventListener("click", () => handleAnswer(idx, qData, squareNum));
        optionsGrid.appendChild(btn);
    });

    modal.classList.remove("hidden");
}

function handleAnswer(selectedIndex, qData, squareNum) {
    const player = players[currentPlayerIndex];
    const optionBtns = document.querySelectorAll(".btn-option");
    optionBtns.forEach(b => b.disabled = true); // Disable semua pilihan

    const isCorrect = (selectedIndex === qData.ans);
    const feedbackBox = document.getElementById("feedback-box");
    const feedbackStatus = document.getElementById("feedback-status");
    const feedbackExp = document.getElementById("feedback-explanation");

    // Catat jawaban
    player.answers.push({
        square: squareNum,
        q: qData.q,
        chosen: qData.ops[selectedIndex],
        correctOpt: qData.ops[qData.ans],
        isCorrect: isCorrect
    });

    if (isCorrect) {
        playSound('correct');
        optionBtns[selectedIndex].classList.add("correct");
        feedbackStatus.textContent = "🎉 BENAR! Hebat!";
        feedbackStatus.style.color = "#2e7d32";
        player.score += 10;
        player.correct += 1;
    } else {
        playSound('wrong');
        optionBtns[selectedIndex].classList.add("wrong");
        optionBtns[qData.ans].classList.add("correct");
        feedbackStatus.textContent = "💡 BELUM TEPAT!";
        feedbackStatus.style.color = "#c62828";
        player.wrong += 1;
    }

    feedbackExp.textContent = qData.exp;
    feedbackBox.classList.remove("hidden");

    updatePanelStats();

    // Event tombol Lanjutkan
    const btnNext = document.getElementById("btn-next-turn");
    btnNext.onclick = () => {
        document.getElementById("modal-question").classList.add("hidden");
        checkSnakesOrLadders(player);
    };
}

/* ===================================================
   LOGIKA TANGGA & ULAR SELESAI SOAL
   =================================================== */
function checkSnakesOrLadders(player) {
    const pos = player.pos;

    if (LADDERS[pos]) {
        const target = LADDERS[pos];
        alert(`🎉 Hebat! ${player.name} menemukan TANGGA! Naik dari kotak ${pos} ke ${target}.`);
        player.pos = target;
        renderPions();
        updatePanelStats();
    } else if (SNAKES[pos]) {
        const target = SNAKES[pos];
        alert(`🐍 Oh tidak! ${player.name} bertemu ULAR! Turun dari kotak ${pos} ke ${target}.`);
        player.pos = target;
        renderPions();
        updatePanelStats();
    }

    // Cek Kemenangan
    if (player.pos === 100) {
        showWinnerScreen(player);
    } else {
        nextTurn();
    }
}

function nextTurn() {
    if (gameMode === 2) {
        currentPlayerIndex = (currentPlayerIndex === 0) ? 1 : 0;
    } else {
        currentPlayerIndex = 0;
    }

    const player = players[currentPlayerIndex];
    document.getElementById("current-player-name").textContent = player.name;
    document.getElementById("btn-roll").disabled = false;
    isRolling = false;

    // Highlight Card Aktif
    if (currentPlayerIndex === 0) {
        document.getElementById("card-p1").classList.add("active-card");
        document.getElementById("card-p2").classList.remove("active-card");
    } else {
        document.getElementById("card-p2").classList.add("active-card");
        document.getElementById("card-p1").classList.remove("active-card");
    }
}

function updatePanelStats() {
    const p1 = players[0];
    if (p1) {
        document.getElementById("p1-pos").textContent = p1.pos === 0 ? "START" : p1.pos;
        document.getElementById("p1-score").textContent = p1.score;
        document.getElementById("p1-correct").textContent = p1.correct;
        document.getElementById("p1-wrong").textContent = p1.wrong;
    }

    if (gameMode === 2 && players[1]) {
        const p2 = players[1];
        document.getElementById("p2-pos").textContent = p2.pos === 0 ? "START" : p2.pos;
        document.getElementById("p2-score").textContent = p2.score;
        document.getElementById("p2-correct").textContent = p2.correct;
        document.getElementById("p2-wrong").textContent = p2.wrong;
    }
}

/* ===================================================
   HALAMAN KEMENANGAN & LAPORAN AKHIR
   =================================================== */
function showWinnerScreen(winner) {
    playSound('win');
    if (typeof confetti === 'function') {
        confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
    }

    document.getElementById("winner-name-txt").textContent = winner.name;
    
    const totalAns = winner.correct + winner.wrong;
    const accuracy = totalAns > 0 ? Math.round((winner.correct / totalAns) * 100) : 0;

    const summaryEl = document.getElementById("winner-stats-summary");
    summaryEl.innerHTML = `
        <p>⭐ <strong>Total Skor:</strong> ${winner.score}</p>
        <p>✅ <strong>Jawaban Benar:</strong> ${winner.correct}</p>
        <p>❌ <strong>Jawaban Salah:</strong> ${winner.wrong}</p>
        <p>📊 <strong>Akurasi Jawaban:</strong> ${accuracy}%</p>
    `;

    document.getElementById("modal-winner").classList.remove("hidden");
    
    // Simpan ke localStorage
    saveResultToLocalStorage(winner, accuracy);
}

function saveResultToLocalStorage(player, accuracy) {
    const history = JSON.parse(localStorage.getItem("metamorfosis_history") || "[]");
    const record = {
        name: player.name,
        date: new Date().toLocaleDateString("id-ID"),
        time: new Date().toLocaleTimeString("id-ID"),
        score: player.score,
        correct: player.correct,
        wrong: player.wrong,
        accuracy: accuracy + "%",
        answers: player.answers
    };
    history.push(record);
    localStorage.setItem("metamorfosis_history", JSON.stringify(history));
}