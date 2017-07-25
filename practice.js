// makeSandwichWith _____
// 	Get one slice of bread.
// 	Add _____.
// 	Put a slice of bread.

// function makeSandwichWith(filling) {
// 	Get one slice of bread;
// 	Add filling;
// 	Put a slice of bread;
// }

// makeSandwichWith _ham_
// makeSandwichWith('ham')
// console.log('My Todos:', todos)

var todos = ['item 1', 'item 2', 'item 3'];

//It should have a function to display the todos:
function displayTodos() {
	console.log('My Todos:', todos);
}

//It should have a function to add a todo:
function addTodo(todo) {
	todos.push(todo);
	displayTodos();
}

//It should have a function to change todos:
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

//It should have a function to delete todos.
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

