const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const timerText = document.getElementById("time");
const progressBar = document.getElementById("progressBarFull");
const game = document.getElementById("game");
let currentQuestion = {}; // inisialisasi objek, '{}' berarti default value / doesn't have value (undefined, null)
let acceptingAnswers = false; //inisialisasi dengan kondisi ketika user belum menginputkan jawaban
let score = 0; //inisialisasi nilai score pada permulaan game
let questionCounter = 0; //inisialisasi jumlah pertanyaan
let availableQuesions = []; //inisialisasi array untuk available question / pertanyaan yang tersedia

let questions;

if (localStorage.getItem("difficulty") == 1) {
  questions = [
    {
      question: "Melakukan gerakan push up itu dapat melatih otot ...",
      choice1: "Kaki",
      choice2: "Tangan",
      choice3: "Pinggang",
      choice4: "Punggung",
      answer: 2,
    },
    {
      question: "Pada saat berguling ke depan maka bagian badan mana yang akan menempel matras pertama kali?",
      choice1: "Kepala",
      choice2: "Tengkuk",
      choice3: "Punggung",
      choice4: "Dahi",
      answer: 2,
    },
    {
      question: "Permainan gobak sodor termasuk olahraga nomor ...",
      choice1: "Senam",
      choice2: "Atlitik",
      choice3: "Permainan tradisional",
      choice4: "Permainan modern",
      answer: 3,
    },
    {
      question: "Posisi kaki pada saat melakukan tolakan lompat jauh harus ...",
      choice1: "Kaki terkuat",
      choice2: "Kedua kaki",
      choice3: "Kaki kiri",
      choice4: "Kaki kanan",
      answer: 1,
    },
    {
      question: "Jalan seperti kapal terbang bisa di ibaratkan sebagai gerakan latihan ...",
      choice1: "Keseimbangan",
      choice2: "Kekuatan",
      choice3: "Kecepatan",
      choice4: "Kelincahan",
      answer: 1,
    },
    {
      question: "Sikap awal dalam gerakan jalan ditempat adalah ...",
      choice1: "Berdiri tegak",
      choice2: "Jongkok",
      choice3: "Duduk",
      choice4: "Bersandar",
      answer: 1,
    },
    {
      question: "Dalam melakukan Dribble bola dalam permainan bola basket, jari tangan harus ...",
      choice1: "Tertutup",
      choice2: "Terbuka",
      choice3: "Terkonsentrasi",
      choice4: "Merebut",
      answer: 2,
    },
    {
      question: "Mengumpan bola dengan umpan pendek selama pertandingan sepak bola berarti ...",
      choice1: "Meneruskan atau menerima bola",
      choice2: "Untuk menembak",
      choice3: "Untuk berhenti",
      choice4: "Untuk melompat",
      answer: 1,
    },
    {
      question: "Naik turun tangga adalah bentuk pelatihan untuk meningkatkan kekuatan ...",
      choice1: "otot punggung",
      choice2: "otot pinggang",
      choice3: "otot kaki",
      choice4: "otot tangan",
      answer: 3,
    },
    {
      question: "Senam yang diiringi dengan irama disebut ...",
      choice1: "Senam Massal",
      choice2: "Senam ritmik",
      choice3: "Senam lantai",
      choice4: "Senam Ketangkasan",
      answer: 2,
    },
  ];
}
if (localStorage.getItem("difficulty") == 2) {
  questions = [
    {
      question: "Lompat tali berfungsi untuk melatih . . .",
      choice1: "Kekuatan otot lengan",
      choice2: "Kekuatan otot kaki",
      choice3: "Kecepatan lengan",
      choice4: "Kelenturan badan",
      answer: 2,
    },
    {
      question: "Pemanasan dapat di lakukan ... gerakan inti. ",
      choice1: "Sebelum",
      choice2: "Setelah",
      choice3: "Selama",
      choice4: "Bersamaan",
      answer: 1,
    },
    {
      question: "Renang gaya katak disebut juga gaya ...",
      choice1: "Dada",
      choice2: "Kupu-kupu",
      choice3: "Bebas",
      choice4: "Punggung",
      answer: 1,
    },
    {
      question: "Jumlah pemain dalam permainan bola voli adalah ...",
      choice1: "3 Orang",
      choice2: "5 Orang",
      choice3: "4 Orang",
      choice4: "6 Orang",
      answer: 4,
    },
    {
      question: "Permainan tarik tambang bertujuan untuk melatih ...",
      choice1: "Melatih hidup sehat",
      choice2: "Melatih kerja sama tim",
      choice3: "Melatih kemandirian",
      choice4: "Mencari tempat berkemah",
      answer: 2,
    },
    {
      question: "Nyamuk yang sering menyebabkan penyakit demam berdarah disebut nyamuk ...",
      choice1: "Aedes Aegypt",
      choice2: "Leptospirosis",
      choice3: "Anopheles",
      choice4: "Haemagglutinin",
      answer: 1,
    },
    {
      question: "Jumlah pemain sepak bola dalam satu tim adalah ...",
      choice1: "10",
      choice2: "9",
      choice3: "11",
      choice4: "6",
      answer: 3,
    },
    {
      question: "Bagian tubuh yang dilatih saat menggerakkan kepala ...",
      choice1: "Otot kaki",
      choice2: "Otot leher",
      choice3: "Otot tangan",
      choice4: "Otot lutut",
      answer: 2,
    },
    {
      question: "Bentuk lapangan kasti ...",
      choice1: "Persegi panjang",
      choice2: "Segi lima beraturan",
      choice3: "Segi tiga sama sisi",
      choice4: "Lingkaran berangkai",
      answer: 1,
    },
    {
      question: "Kemampuan menendang bola dapat dilakukan dengan kaki bagian berikut, kecuali ...",
      choice1: "kaki bagian punggung",
      choice2: "Kaki bagian luar ",
      choice3: "kaki bagian dalam ",
      choice4: "Telapak kaki",
      answer: 4,
    },
  ];
}
if (localStorage.getItem("difficulty") == 3) {
  questions = [
    {
      question: "Permainan softball salah satu cabang permainan ...",
      choice1: "Bola besar",
      choice2: "Perorangan",
      choice3: "Bola kecil",
      choice4: "Atletik",
      answer: 2,
    },
    {
      question: "Lapangan permainan rounders berbentuk ...",
      choice1: "Segitiga",
      choice2: "Persegi panjang",
      choice3: "Segi lima beraturan",
      choice4: "Lingkaran",
      answer: 3,
    },
    {
      question: "Permainan bola basket ditemukan di negara ...",
      choice1: "Amerika",
      choice2: "Inggris",
      choice3: "China",
      choice4: "Indonesia",
      answer: 1,
    },
    {
      question: "Jumlah pelari dalam lari estafet adalah ...",
      choice1: "4 Orang",
      choice2: "6 Orang",
      choice3: "5 Orang",
      choice4: "7 Orang",
      answer: 1,
    },
    {
      question: "Untuk melatih kekuatan otot dibagian perut dapat dilakukan dengan ...",
      choice1: "Squat jump ",
      choice2: "Handstand",
      choice3: "Sit up",
      choice4: "gerobak dorong",
      answer: 3,
    },
    {
      question: "Menggiring bola disebut dengan teknik ...",
      choice1: "Dribbling",
      choice2: "Passing",
      choice3: "Shooting",
      choice4: "Fault",
      answer: 1,
    },
    {
      question: "Induk organisasi softball Indonesia yakni ...",
      choice1: "PASI",
      choice2: "PERBASASI",
      choice3: "PERBASI",
      choice4: "PBSI",
      answer: 2,
    },
    {
      question: "PASI adalah induk organisasi dari olahraga ...",
      choice1: "Permainan",
      choice2: "Bela diri",
      choice3: "Senam",
      choice4: "Atletik",
      answer: 4,
    },
    {
      question: "Nama lain dari virus flu burung adalah ...",
      choice1: "Influensa",
      choice2: "H5N1",
      choice3: "H2N2",
      choice4: "H1N2",
      answer: 2,
    },
    {
      question: "Permainan softball diciptakan oleh...",
      choice1: "William G. Morgan",
      choice2: "George Hancock",
      choice3: "Amderson Tatg",
      choice4: "Ames Naismit",
      answer: 2,
    },
  ];
}

timerText.style.color = "#363738";
timerText.innerHTML = "Start!";
//timer
setInterval(function () {
  timerText.style.color = "#56a5eb";
  timerText.innerHTML = sec;
  sec--;

  if (sec < 5) {
    timerText.style.color = "red"; // warna akan berubah saat detik = 5
  }
  if (sec < 0) {
    timerText.style.color = "#363738";
    timerText.innerHTML = "Times Up!";
    acceptingAnswers = false;
  }

  if (sec < -1) {
    getNewQuestion();
  }
}, 1000);

//CONSTANTS
const CORRECT_BONUS = 10; // set nilai jika jawaban benar
const MAX_QUESTIONS = 10; // set jumlah pertanyaan yang akan muncul
const MAX_TIME = 15; //set jumlah waktu

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuesions = [...questions];
  getNewQuestion();
  game.classList.remove("hidden");
};

getNewQuestion = () => {
  sec = MAX_TIME;
  //Jika jumlah pertanyaan sudah habis (===0) atau questionCounter melebihi jumlah maximal pertanyaan
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //menyetel nilai item score ke Objek Penyimpanan 'mostRecentScore' di localStorage
    localStorage.setItem("mostRecentScore", score);
    // menuju end page
    return window.location.assign("end.html");
  }

  //UPDATE QUESTION COUNTER
  questionCounter++;
  // menampilkan jumlah dan sisa pertanyaan
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  // progress bar berjalan
  progressBar.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  // Memilih index pertanyaan secara acak
  //"Math.random() * availableQuesions.length" untuk mengambil angka random mulai dari 0 - (jumlah pertanyaan)
  //"Math.floor()"" untuk membulatkan bilangannya
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerHTML = currentQuestion.question;

  //Menampilkan Pertanyaan
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerHTML = currentQuestion["choice" + number];
  });

  //menghapus satu buah objek array pada array availableQuesions pada posisi questionIndex saat ini agar pertanyaan yang sama tidak muncul dua kali
  availableQuesions.splice(questionIndex, 1);
  //tidak dapat menginputkan jawaban ketika acceptingAnswers bernilai false
  acceptingAnswers = true;
};

//Method forEach() memanggil fungsi untuk setiap elemen dalam array.
choices.forEach((choice) => {
  //Method addEventListener() memungkinkan Anda menyiapkan fungsi yang akan dipanggil saat peristiwa tertentu terjadi, seperti saat pengguna mengklik tombol.
  //parameter menggunakan variabel bernama e (biasa dikenal dengan 'event'). Parameter ini adalah objek yang berisi berbagai informasi tentang event seperti id target.
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false; //agar pengguna tidak menginputkan jawaban dua kali
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    //Bolean untuk menentukan jawaban yang benar
    var classToApply = "incorrect";
    if (selectedAnswer == currentQuestion.answer) {
      classToApply = "correct";
    }
    /*sama dengan 
      const classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    */

    if (classToApply === "correct") {
      incrementScore(CORRECT_BONUS);
    }

    selectedChoice.parentElement.classList.add(classToApply); //memberi indikator berupa warna ketika jawaban benar atau salah

    //memberi jeda sedikit saat player mengklik/memilih jawaban
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply); //menghapus warna indikator
      getNewQuestion();
    }, 1000); //1000 = 1 detik
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
