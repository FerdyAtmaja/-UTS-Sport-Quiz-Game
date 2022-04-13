const highScoresList = document.getElementById("highScoresList");
//JSON.parse(),mengurai data menjadi objek JavaScript.
//localStorage.getItem(), mengembalikan nilai item dari Objek Penyimpanan yang ditentukan.
const highScoresEasy = JSON.parse(localStorage.getItem("highScores-easy")) || [];
const highScoresMedium = JSON.parse(localStorage.getItem("highScores-medium")) || [];
const highScoresHard = JSON.parse(localStorage.getItem("highScores-hard")) || [];

if (localStorage.getItem("difficulty") == 1) {
  highScoresList.innerHTML = highScoresEasy
    //map() membuat array baru dari memanggil fungsi untuk setiap elemen array.
    .map((score) => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join(""); //join() mereturn array sebagai string.
}

if (localStorage.getItem("difficulty") == 2) {
  highScoresList.innerHTML = highScoresMedium
    //map() membuat array baru dari memanggil fungsi untuk setiap elemen array.
    .map((score) => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join(""); //join() mereturn array sebagai string.
}

if (localStorage.getItem("difficulty") == 3) {
  highScoresList.innerHTML = highScoresHard
    //map() membuat array baru dari memanggil fungsi untuk setiap elemen array.
    .map((score) => {
      return `<li class="high-score">${score.name} - ${score.score}</li>`;
    })
    .join(""); //join() mereturn array sebagai string.
}
