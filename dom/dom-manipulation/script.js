var h1 = document.querySelector('h1');

// h1.style.color = 'yellow';
// h1.style.border = '5px solid pink';

h1.classList.toggle('big');


//   textContent   \\

var tag = document.querySelector('p');
var p = document.getElementByTagName('p')[0];

tag.textContent = 'blah blah blah';