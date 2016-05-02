var todos = ['Buy new puppy']; // declares empty array

var input = prompt('What would you like to do?'); //prompts user


// everything in the while loop will iterate until the user 
// types 'quit'
while (input !== 'quit') {
    // handle input
    if (input === 'list') {
        listToDos();
} else if (input === 'new') {
    addToDo();
} else if (input === 'delete') {
    deleteToDo();
}
input = prompt('What would you like to do?');
}
console.log('You have quit the app. Have a great day!');

function listToDos() {
    console.log('********');
    todos.forEach(function(todo, index) { // todo is the item, index is the index of that item
            console.log(index + ': ' + todo);
        });
    }

    function addToDo() {
        var newToDo = prompt('Enter new todo');
        todos.push(newToDo);
        console.log('Added todo');
    }

    function deleteToDo() {
        // ask for index of todo to be deleted
        var index = prompt('Enter index of todo to delete.');
        // delete that todo using .splice()
        todos.splice(index, 1); // finds the index provided
        // by the user and deletes only that index
        console.log('Deleted todo');
    }
