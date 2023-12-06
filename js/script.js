let moreMenuOpened = false;

function changeAndExpand() {
	if (moreMenuOpened) {
		document.getElementById('moreSection').style.height = '0';

		moreMenuOpened = !moreMenuOpened;
	} else {
		document.getElementById('moreSection').style.height = '160px';
		moreMenuOpened = !moreMenuOpened;
	}
}

function showNavigator(value = true) {
	if (value) {
		document.getElementById('navigator').style.display = 'flex';
		document.getElementById('drive-up-list').style.display = 'none';
	} else {
		document.getElementById('navigator').style.display = 'none';
		document.getElementById('drive-up-list').style.display = 'flex';
	}
}
