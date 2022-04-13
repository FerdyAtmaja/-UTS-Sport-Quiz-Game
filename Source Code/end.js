const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

//JSON.parse(),mengurai data menjadi objek JavaScript.
//localStorage.getItem(),mengembalikan nilai item dari Objek Penyimpanan yang ditentukan.
const highScoresEasy = JSON.parse(localStorage.getItem("highScores-easy")) || [];
const highScoresMedium = JSON.parse(localStorage.getItem("highScores-medium")) || [];
const highScoresHard = JSON.parse(localStorage.getItem("highScores-hard")) || [];

const MAX_HIGH_SCORES = 5;

//Mencetak score yang didapatkan oleh user (innerText berguna untuk menuliskan 'finalscore' dari inputan 'mostRecentScore')
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value; //tombol save akan nonaktif ketika user belum menginputkan username
});

//menyimpan score yang didapatkan user
saveHighScore = (e) => {
  e.preventDefault(); //membatalkan event 'disabled' pada tombol save

  const score = {
    score: mostRecentScore,
    name: username.value,
  };

  if (localStorage.getItem("difficulty") == 1) {
    highScoresEasy.push(score); //Method push() menambahkan item baru ke akhir array.
    highScoresEasy.sort((a, b) => b.score - a.score); //mengurutkan peringkat
    /*Cara elemen array diurutkan tergantung pada nomor berapa yang dikembalikan oleh fungsi:
    Jika Hasil :
    < 0 (bilangan negatif): a mendahului b
    > 0 (bilangan positif): b mendahului a
    0 : Dua angka akan berdekatan dalam daftar yang diurutkan.*/
    highScoresEasy.splice(5); //memotong array no 5 karena highscore hanya menampilkan 5 player dengan score tertinggi

    //menyetel nilai item highscores ke Objek Penyimpanan 'highscores' di localStorage
    localStorage.setItem("highScores-easy", JSON.stringify(highScoresEasy)); //JSON.stringify(), mengubah objek JavaScript menjadi string
  }
  if (localStorage.getItem("difficulty") == 2) {
    highScoresMedium.push(score);
    highScoresMedium.sort((a, b) => b.score - a.score);

    highScoresMedium.splice(5);
    localStorage.setItem("highScores-medium", JSON.stringify(highScoresMedium));
  }
  if (localStorage.getItem("difficulty") == 3) {
    highScoresHard.push(score);
    highScoresHard.sort((a, b) => b.score - a.score);

    highScoresHard.splice(5);
    localStorage.setItem("highScores-hard", JSON.stringify(highScoresHard));
  }

  window.location.assign("index.html"); //langsung kembali menuju Main menu
};
