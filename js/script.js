let moreMenuOpened = false;
setInterval(startComet, 35000);


function startComet() {
  let cometElement = document.getElementById("comet");
  cometElement.style.animation = "comet-fall 5s linear";
  setTimeout(() => {
    cometElement.style.animation = "none";
  }, 15000);
}

function changeAndExpand() {
  if (moreMenuOpened) {
    document.getElementById("moreSection").style.height = "0";

    moreMenuOpened = !moreMenuOpened;
  } else {
    document.getElementById("moreSection").style.height = "160px";
    moreMenuOpened = !moreMenuOpened;
  }
}
