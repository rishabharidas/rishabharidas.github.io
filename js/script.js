let moreMenuOpened = false;

function changeAndExpand() {
  if (moreMenuOpened) {
    document.getElementById("moreSection").style.height = "0";

    moreMenuOpened = !moreMenuOpened;
  } else {
    document.getElementById("moreSection").style.height = "160px";
    moreMenuOpened = !moreMenuOpened;
  }
}
