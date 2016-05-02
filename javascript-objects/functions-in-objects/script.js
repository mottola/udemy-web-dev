// now we can't do any other speak functions
function speak() {
	return "WOOF!";
}


// instead we will add the speak as a method in an object

var dogSpace = {};
var catSpace = {};

// adds a key of speak with a function as its value to the dogSpace
// object. 
dogSpace.speak = function(){
	console.log('WOOF!');
	return "WOOF!";
}

// adds a key of speak with a function as its value to the catSpace
// object
catSpace.speak = function() {
	console.log('MEOW!');
	return "MEOW!";
}

// now we can use the speak function with as
// many objects as we like

dogSpace.speak();

catSpace.speak();

//		THE KEYWORD THIS     \\

var comments = {};

comments.data = ['Good Job!', 'Bye', 'Lame'];


// this is tricky, but by writing this inside of a function
// this will refer to the object that the funciton is defined in.
comments.print = function() {
	this.data.forEach(function(element) {
		console.log(element);
	});
}
comments.print();