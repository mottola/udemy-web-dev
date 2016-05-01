var customerAge = prompt('How old are you?');

if (customerAge < 0) {
	alert('That is not possible...');
}
else if (customerAge == 21) {
	alert('Happy 21st Birthday!!');
	alert('Your age is odd!');
}
else if ((customerAge % 2) !== 0) {
	alert('Your age is odd!');
}
else {
	alert('You are ' + customerAge + ' years old.');
}