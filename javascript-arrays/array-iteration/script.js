// LOOPING THROUGH ARRAYS  \\

//  YOU CAN USE A FOR LOOP OR A FOR EACH LOOP  \\
// A FOR EACH LOOP IS NEWER AND LESS VERBOSE  \\
//        arr.forEach(someFunction)     \\
//  forEach takes a function with an argument, usually anonymous  \\

 			//    FOR EACH EXAMPLE    \\
 var colors = ['red', 'orange', 'yellow', 'green'];

//  This does the same thing as a for loop  \\
 colors.forEach(function(color) {
 	console.log(color);
 });

 function printColor(color) {
 	console.log('********');
 	console.log(color);
 }

// Now we can just use the function created above
// and pass that into our forEach method. 

// Below, we take each index of the colors array 
// and apply the function printColor to them
 colors.forEach(printColor); // logs each color in our array




