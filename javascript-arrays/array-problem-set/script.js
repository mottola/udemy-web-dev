// Write a function that takes in an array 
// and prints it out in reverse
console.log('connected');

// My Function
function printReverse(arr) {
	for (var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}		
}

printReverse(['aussie', 'husky', 'chow-chow', 'rotweiler', 'mutt']);
printReverse(['a', 'b', 'c', 'd']);

// Write a function which takes an array as an 
// argument and returns true if all elements in
// the array are identical

// My Function
function isUniform(arr) {
	var test = arr[0];
	// we don't need to start at zero because we are
	// comparing everthing after arr[0] to itself, 
	// so we start at var i = 1
	for (var i = 1; i < arr.length; i++) {
		if (test !== arr[i]) {
			console.log('false');
			return false;
		}
	}
	console.log('true');
	return true;
}
isUniform([1, 1, 1, 1]);
isUniform([2, 1, 1, 1]);
isUniform(['a', 'b', 'p']);
isUniform(['b', 'b', 'b']);

//  Write a function that accepts an array of numbers
//  and returns the sum of all numbers in the array

function sumArray(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	console.log(sum);
}

sumArray([1, 2, 3]); // 6
sumArray([10, 3, 10 , 4]); // 27
sumArray([-5, 100]); // 95

// Colt' Solution Using a forEach
function coltsSumArray(arr) {
	var sum = 0;
	arr.forEach(function(element) {
		sum += element;
	});
	console.log(sum);
	return sum;
}
coltsSumArray([1, 2, 3]); // 6
coltsSumArray([10, 3, 10 , 4]); // 27
coltsSumArray([-5, 100]); // 95


// Write a function max() that accepts an array of 
// numbers and returns the maximum number in the array

function max(arr) {
	var maxNum = 0;
	for (var i = 0; i < arr.length; i++) {
		if (maxNum < arr[i]) {
			maxNum = arr[i];
		}
	}
	console.log(maxNum);
}

max([1, 2, 3]); // 3
max([10, 3, 10, 4]); // 10
max([-5, 100]); // 100

// Colt's solution

// Colt's solution is more efficient because it sets
// the max number equal to the number occupying index 0
// in the array passed in. So Colt's solution requires
// one less step than my solution! 
function coltsMax(arr) {
	var max = arr[0];
	for (var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		} 
	}
	console.log(max);
}
coltsMax([1, 2, 3]); // 3
coltsMax([10, 3, 10, 4]); // 10
coltsMax([-5, 100]); // 100


//   OPTIONAL EXERCISE   \\

//  BETTER UNDERSTANDING OF FOR EACH  \\


















