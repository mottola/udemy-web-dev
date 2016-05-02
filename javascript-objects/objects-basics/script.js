//  OBJECTS  \\

// Suppose we wanted to model a single person
// and information about them. This would be a 
// perfect time to use an object over an array


// This declares the object person
var person = {
	// below are three key: value pairs which make 
	// up our person object
	name: 'Cindy', 
	age: 32,
	city: 'Missoula'
};
// unlike arrays, objects have no order, the items within an 
// object are simply stored inside of it in key: value pairs

// bracket notation
console.log(person['name']);

// dot notation
console.log(person.name);

// updating an object's information
person['age'] += 1;  // or person.age += 1;
person.city = 'Boulder';  // or person['city'] = 'Boulder';

//   SITUATIONS WHERE YOU CAN'T USE DOT NOTATION  \\

// THE PROPERTY STARTS WITH A NUMBER \\
// someObject.1blah  // INVALID
// someObject['1blah'] // VALID

// THE PROPERTY CONTAINS SPACES  \\
// someObject.fav color   // INVALID
// someObject['fav color']  // VALID

// YOU CAN LOOK UP A VARIABLE WITH BRACKET NOTATION  \\
// var str = 'name';
// someObject.str  // doesn't look for 'name', but propery
// someObject[str] // evaluates string and looks for  'name'

//    CREATING OBJECTS    \\

// make an empty object and then add to it
var person = {}
person.name = 'Rick';
person.age = 29;
person.city = 'Boulder';

// all at once
var person = {
	name: 'Rick',
	age: 29,
	city: 'Boulder'
};

// another way
var person = new Object();
person.name = 'Rick';
person.age = 29;
person.city = 'Boulder';

// Arrays are just special objects where the keys are numbers


//    OBJECTS WITHIN ARRAYS OR ARRAYS WITHIN OBJECTS    \\

// Obects within an array
// An array of posts where each post is an object \\
var posts = [
	{
		title: 'Cats are mediocre',
		author: 'Colt',
		// this key contains an array
		comments: ['Awesome post', 'terrible post']
	},
	{
		title: "cats are actually awesome",
		author: "Cat Luvr",
		//this key contains an array
		comments: ['<3', "Go to hell I hate you"]
	}
]

console.log(posts.length);
console.log(posts[0].title); // gives title of object at index 0 of array

// accesses index 1 of main array, and then accesses the index 1
// of the comments array object
console.log(posts[1].comments[1]);







