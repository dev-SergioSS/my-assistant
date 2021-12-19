//  // --------------------------- WEBP ---------------------------

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support === true) {
		document.querySelector('html').classList.add('webp');
	} else {
		document.querySelector('html').classList.add('no-webp');
	}
});

// ---------------------------MOBILE MENU---------------------------


const iconMenu = document.querySelector(".menu__icon");
const menuList = document.querySelector(".menu__list");
const menuLink = document.querySelectorAll(".menu__link");

if (iconMenu != null) {
	iconMenu.addEventListener('click', function () {
		iconMenu.classList.toggle("active");
		menuList.classList.toggle("active");
		lockBody("lock");
	});
};

for (link of menuLink) {
	link.addEventListener('click', () => {
		iconMenu.classList.remove("active");
		menuList.classList.remove("active");
		lockBody("unlock");
	})
}

function lockBody(action) {

	// function need for 1)mobile menu 2) popup

	const body = document.querySelector('body')

	if (action == "lock") {
		body.classList.toggle('lock')
	}
	else if (action == "unlock") {
		body.classList.remove('lock')
	}
}