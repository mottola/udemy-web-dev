// // create secret number \\
// var secretNumber = 8;

// // ask user to guess \\
// var guess = prompt('Guess a number');

// var guess = Number(guess); // makes sure guess is stored as a number

// // check guess \\
// if (guess === secretNumber) {
// 	alert('Congrats!! You guessed it!!'); // win message
// }
// else if (guess < secretNumber) {  // too low message
// 	alert('Too low! Try again!');
// }

// else { // too high message
// }	alert('Too high! Try again!');


// console log numbers -10 to 19 \\
var num = -10;
while (num <= 19) {
	console.log(num);
	num++;
}

// log even numbers between 10 and 40 \\
var num = 10;
while (num <= 40) {
	if (num % 2 === 0) {
		console.log(num);
	}
	num++;
}

// log all odd numbers between 300 and 333 \\
var num = 300;
while (num <= 333) {
	if (num % 2 == 1) {
		console.log(num);
	}
	num++;
}

// log all numbers between 5 and 50 which are \\
// divisible by 3 AND 5 \\
var num = 5;
while (num <= 50) {
	if (num % 3 === 0 && num % 5 === 0) {
		console.log(num);
	}
	num++;
}