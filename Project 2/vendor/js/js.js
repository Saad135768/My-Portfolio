$(".settings i").click(() => {
  $(".settings i").toggleClass("tog");
  $(".settings .colors")
    .toggle()
    .toggleClass("togg");
});

$("#red").click(() => {
  $(".nav .container .active").css("background-color", "red");
  $(".nav .container span:last-child").css("color", "red");
  $(".sec-x span").css("color", "red");
  $(".sec-6 button").css({
    "background-color": "red",
    border: "1px solid red"
  });
  $(".sec-9 button").css({
    "background-color": "red",
    border: "1px solid red"
  });
  $(".sec-11 h4").css("color", "red");
  $(".sec-11 .active").css("color", "red");
  $("footer span").css("color", "red");
});
$("#yellow").click(() => {
  $(".nav .container .active").css("background-color", "yellow");
  $(".nav .container span:last-child").css("color", "yellow");
  $(".sec-x span").css("color", "yellow");
  $(".sec-6 button").css({
    "background-color": "yellow",
    border: "1px solid yellow"
  });
  $(".sec-9 button").css({
    "background-color": "yellow",
    border: "1px solid yellow"
  });
  $(".sec-11 h4").css("color", "yellow");
  $(".sec-11 .active").css("color", "yellow");
  $("footer span").css("color", "yellow");
});
$("#green").click(() => {
  $(".nav .container .active").css("background-color", "green");
  $(".nav .container span:last-child").css("color", "green");
  $(".sec-x span").css("color", "green");
  $(".sec-6 button").css({
    "background-color": "green",
    border: "1px solid green"
  });
  $(".sec-9 button").css({
    "background-color": "green",
    border: "1px solid green"
  });
  $(".sec-11 h4").css("color", "green");
  $(".sec-11 .active").css("color", "green");
  $("footer span").css("color", "green");
});
$("#blue").click(() => {
  $(".nav .container .active").css("background-color", "blue");
  $(".nav .container span:last-child").css("color", "blue");
  $(".sec-x span").css("color", "blue");
  $(".sec-6 button").css({
    "background-color": "blue",
    border: "1px solid blue"
  });
  $(".sec-9 button").css({
    "background-color": "blue",
    border: "1px solid blue"
  });
  $(".sec-11 h4").css("color", "blue");
  $(".sec-11 .active").css("color", "blue");
  $("footer span").css("color", "blue");
});
