//         HIGHER ORDER FUNCTIONS      \\
//     WE CAN PASS FUNCTIONS TO OTHER FUNCTIONS      \\

function sing() {
	console.log('twinkle, twinkle...');
	console.log('how i wonder');
}

// setInterval takes a function and a time as its parameters  \\
// setInterval(sing, 1000);


// This time we pass in an anonymous function 
// into our setInterval function
setInterval(function() {
	console.log('I am an anonymous function');
	console.log('This is awesome!');
})