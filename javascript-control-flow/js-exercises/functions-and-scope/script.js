// Functions let us wrap code into reusable packages \\

//		doSomething()  - function invocation - calls function
//		doSomething  - does not invoke, but gives value of function

// Functions help us write dry, non-repetetive code

// Functions are like machines, they take and input, do something with it
// and produce and output  \\


// Writes the function  \\
function singSong() {
    console.log('Twinkle, twinkle, little star');
    console.log('How I wonder what you are!');
    console.log('Up above the world so high,');
    console.log('Like a diamond in the sky.');
}


// Invokes the function \\
singSong();

//			 THE RETURN KEYWORD          \\

// The return keyword allows us to capture the value \\
// The function terminates at the return call  \\

// Function taking an argument  \\
function square(num) {
    console.log(num * num);
    return (num * num);
}

// Invokes the function three times, each with a different parameter  \\
square(10); // 100
square(5); // 25
square(4); // 16

// Creates function which takes an argument  \\
function sayHello(name) {
	console.log('Hello there, ' + name + '!');
	return (name);
}

// Invokes function with parameters  \\
sayHello('Rick');
sayHello('Anna');


// Creates a function taking two arguments  \\
function area (length, width) {
	console.log(length * width);
	return (length * width);
}

// Invokes function passing in two parameters  \\
area(4, 2);
area(6, 6);


// Creates a function that takes in a string  \\
function capitalize(str) {
	// capitalizes first letter and adds to it the rest of the string  \\
	console.log(str.charAt(0).toUpperCase() + str.slice(1));
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// declares a string city, then declares the capital 
// of said string to the result of running it through the capitalize function
var city = 'paris';
var capital = capitalize(city);

// This is a function expression  \\
var capitalize = function(str) {
	console.log(str.charAt(0).toUpperCase() + str.slice(1));
	return (str.charAt(0).toUpperCase() + str.slice(1));
}

// calls our capitalize function with parameter 'boulder'  \\
capitalize('boulder');

//		PROBLEM SETS      \\

function isEven(num) {
	console.log(num % 2 === 0);
	return num % 2 === 0;

}

isEven(4);  // true
isEven(21); // false
isEven(68); // true
isEven(333); // false

function factorial (num) {
	var result = 1;
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	console.log(result);
	return result;
}

factorial(5)  // 120
factorial(2)  // 2
factorial(10) // 3628800
factorial(0)  // 1

function kebabToSnake(str) {
	// replace all dashes with underscores
		var newStr = str.replace(/-/g , "_");
		console.log(newStr);
		return newStr;
}
kebabToSnake('hello-world');
kebabToSnake('dogs-are-awesome');
kebabToSnake('blah');


//    INTRO TO JAVASCRIPT SCOPE    \\

function doMath() {
	//  x only exists inside of this function  \\
	var x = 40;
	console.log(x);
}
doMath();

// y is global, so any function can access it  \\
var y = 99;

function doMoreMath(){
	// this changes our global y \\
	y = 100;
	console.log(y);
}
doMoreMath();


var phrase = 'hi there!';

function doSomething() {
	// in this case we REDEFINE phrase, so we do not
	// have any affect on the global phrase, and our
	// new phrase within the function exists only in our 
	//function
	var phrase = 'goodbye';
	console.log(phrase);
}

doSomething();







