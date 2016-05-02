//   Select   \\
var h1 = document.querySelector('h1');
var body = document.querySelector('body');
var isBlue = false; // boolean to check against

// interval that checks if background is blue and makes
// changes accordinly
setInterval(function() {  // Manipulate  \\
	if (isBlue) {
		body.style.background = 'white';
	} else {
		body.style.background = '#1A72CD';
	}
	isBlue = !isBlue;
}, 1000); // every second

//   Manipulate  \\
h1.style.color = 'pink';