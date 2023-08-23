let blue_btn = document.querySelector(".blue_btn");
let yellow_btn = document.querySelector(".yellow_btn");
let red_btn = document.querySelector(".red_btn");
let purple_btn = document.querySelector(".purple_btn");

blue_btn.addEventListener("click", function () {
  //console.log("blue");
  //show other buttons

  document.querySelector(".grid div:nth-child(4)").style.display = "block";
  document.querySelector(".grid div:nth-child(6)").style.display = "block";
  document.body.style.backgroundColor = "#CCC";
});
red_btn.addEventListener("click", function () {
  //console.log("red");
  document.querySelector(".grid div:nth-child(7)").style.display = "block";
  document.querySelector(".grid div:nth-child(8)").style.display = "block";
  document.body.style.backgroundColor = "#808080";
});
purple_btn.addEventListener("click", function () {
  //console.log("purple");
  document.querySelector(".grid div:nth-child(5)").style.display = "block";
  document.querySelector(".grid div:nth-child(3)").style.display = "block";
  document.body.style.backgroundColor = "#404040";
});
yellow_btn.addEventListener("click", function () {
  //console.log("yellow");
  document.querySelector(".grid div:nth-child(2)").style.display = "block";
  document.body.style.backgroundColor = "#000";

});


