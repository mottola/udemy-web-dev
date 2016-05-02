// addEventListener(type, functionToCall)  \\

var button = document.querySelector("input");
var paragraph = document.querySelector("p");
var h1 = document.querySelector("h1");


button.addEventListener("click", function(){
	paragraph.textContent = "SOMEONE CLICKED THE BUTTON!";
});

h1.addEventListener("click", function() {
	// the changes will take place in order \\
	alert('h1 was clicked!');
	h1.style.background = 'orange';
});

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
	lis[i].addEventListener("click", function(){
		this.style.color = "pink";
	});
}