$(document).ready(function () {
  $("#play-button").on("click", function () {
    $("#difficulty1").toggle(500, function () {});
    $("#difficulty2").toggle(500, function () {});
    $("#difficulty3").toggle(500, function () {});
  });
});

$(document).ready(function () {
  $("#highscores-button").on("click", function () {
    $("#highscores1").toggle(500, function () {});
    $("#highscores2").toggle(500, function () {});
    $("#highscores3").toggle(500, function () {});
  });
});

difficulty1 = (e) => {
  localStorage.setItem("difficulty", 1);
};

difficulty2 = (e) => {
  localStorage.setItem("difficulty", 2);
};

difficulty3 = (e) => {
  localStorage.setItem("difficulty", 3);
};
