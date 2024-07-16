let navOpened = false;
function isNavOpened() {
	return navOpened;
}

function showNavigator(bgClose = false) {
	var svgIcon = document.getElementById('svgIcon');
	var sideNav2 = document.getElementById('sideNav');
	var menuItem1 = document.getElementById('menuItem1');
	var menuItem2 = document.getElementById('menuItem2');

	const closeSvg =
		'<path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>';
	const menuSvg =
		'<path fill="#ffffff" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />';
	if (!navOpened && !bgClose) {
		sideNav2.style.height = '140px';
		sideNav2.style.width = '140px';
		svgIcon.style.width = '45px';
		svgIcon.style.right = '6%';
		svgIcon.style.bottom = '6%';
		menuItem1.style.display = 'flex';
		menuItem2.style.display = 'flex';
		svgIcon.innerHTML = closeSvg;
		navOpened = true;
	} else {
		sideNav2.style.height = '80px';
		sideNav2.style.width = '80px';
		svgIcon.style.width = '35px';
		svgIcon.style.right = '18%';
		svgIcon.style.bottom = '12%';
		menuItem1.style.display = 'none';
		menuItem2.style.display = 'none';
		svgIcon.innerHTML = menuSvg;
		navOpened = false;
	}
}

function downloadResume() {
	var fileUrl = 'files/rishabharidas-resume.pdf';

	fetch(fileUrl)
		.then((response) => response.blob())
		.then((blob) => {
			let url = window.URL.createObjectURL(blob);

			let link = document.createElement('a');
			link.href = url;
			link.download = 'resume.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		})
		.catch((error) => {
			console.error('Error fetching the file:', error);
		});
}

setInterval(() => {
	console.log('hereee-e-e-e-');

	let comet = document.querySelector('#comet').classList;
	let btnStatus = this;

	comet.add('fire');

	setTimeout(function () {
		comet.remove('fire');
	}, 700);
}, 8000);
