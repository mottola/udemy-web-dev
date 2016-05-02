
// declaring an array of colors   \\
var colors = ['red', 'orange', 'yellow'];

// use push to add an index to the end of the array  \\
colors.push('indigo');
colors.push('violet');

//  looping through the array and logging each index  \\
for (var i = 0; i < colors.length; i++) {
	console.log(colors[i]);
}

// use pop to remove the last index from the array  \\
colors.pop();  // removes violet	
colors.pop();  // removes indigo 


//  looping through the array and logging each index  \\
for (var k = 0; k < colors.length; k++) {
	console.log(colors[k]);
}

// unshift will add data to the beginning of the array  \\
colors.unshift('cyan');

//  loops through the array and logs each index  \\
for (var m = 0; m < colors.length; m++) {
	console.log(colors[m]);
}

// shift will remove data from the beginning of the array \\
colors.shift();

//  loops through the array and logs each index  \\
for (var j = 0; j < colors.length; j++) {
	console.log(colors[j]);
}

// indexOf will take an argument and try to find it in the array  \\
// if found, it will return the index of where the argument was found  \\

console.log(colors.indexOf('yellow'));  // logs 2
console.log(colors.indexOf('red'));  // logs 0

// if the argumetn is not found in the array, -1 will be returned 
// (this is very useful) 

console.log(colors.indexOf('blue'));  // logs -1, because blue is not in our array

// slice is used to copy portions of an array  \\
// slice takes two arguments - the starting index and where the 
// slice should stop (not inclusive)  \\

fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];


// Takes the 
var citrus = fruits.slice(1, 3);
for (var n = 0; n < citrus.length; n++) {
	console.log(citrus[n]); // logs Orange and Lemon
}

// the fruits array is unaltered, so it still contains
// all of the original fruits. We defined a new array 
// copying only the citrus fruit varieties into it.

var nums = [1, 2, 3, 'a', 'b', 'c', 4, 5, 6];

var letters = nums.slice(3, 6);
for (var w = 0; w < letters.length; w++) {
	console.log(letters[w]); // logs a, b, c
}












