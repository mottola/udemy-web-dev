
var movieDB = [
	{
		movie: '"Pulp Fiction"',
		rating: '5 stars',
		hasWatched: true
    },
    {
    	movie: '"Interstellar"',
		rating: '5 stars',
		hasWatched: true
    },
    {
    	movie: '"Frozen"',
		rating: '4.5 stars',
		hasWatched: false
    }
]

function showData(obj) {
	var result = "You have ";
	if (obj.hasWatched) {
		result += 'watched ';
	}else {;
		result += 'not watched '
	}
	result += obj.movie;
	result += ' - ' + obj.rating;
	console.log(result);
	return result;
}

movieDB.forEach(showData);