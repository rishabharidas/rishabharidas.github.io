let moreMenuOpened = false;
function random() {
  return Math.floor(Math.random() * 6);
}
function changeAndExpand() {
  let cubeColors = [
    "yellow",
    "rgb(14, 205, 16)",
    "rgb(255, 153, 0)",
    "rgb(0, 79, 255)",
    "red",
    "#ffffff"
  ];

  let leftPieceMiddle = document.getElementById("leftPieceMiddle");
  let rightPieceMiddle = document.getElementById("rightPieceMiddle");
  let middlePieceMiddle = document.getElementById("middlePieceMiddle");

  leftPieceMiddle.style.backgroundColor = cubeColors[random()];
  rightPieceMiddle.style.backgroundColor = cubeColors[random()];
  middlePieceMiddle.style.backgroundColor = cubeColors[random()];

  let leftPieceTop = document.getElementById("leftPieceTop");
  let rightPieceTop = document.getElementById("rightPieceTop");
  let middlePieceTop = document.getElementById("middlePieceTop");

  leftPieceTop.style.backgroundColor = cubeColors[random()];
  middlePieceTop.style.backgroundColor = cubeColors[random()];
  rightPieceTop.style.backgroundColor = cubeColors[random()];

  let leftPieceBottom = document.getElementById("leftPieceBottom");
  let middlePieceBottom = document.getElementById("middlePieceBottom");
  let rightPieceBottom = document.getElementById("rightPieceBottom");

  leftPieceBottom.style.backgroundColor = cubeColors[random()];
  middlePieceBottom.style.backgroundColor = cubeColors[random()];
  rightPieceBottom.style.backgroundColor = cubeColors[random()];

  if (moreMenuOpened) {
    document.getElementById("moreSection").style.height = "0";
    document.getElementById("arrowPointer").style.display = "block";

    moreMenuOpened = !moreMenuOpened;
  } else {
    document.getElementById("moreSection").style.height = "160px";
    document.getElementById("arrowPointer").style.display = "none";
    moreMenuOpened = !moreMenuOpened;
  }
}
function viewSocials() {
  document.getElementById("social").style.height = "50px";
}
