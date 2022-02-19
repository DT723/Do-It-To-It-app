'use strict';
/////Practice and Exercises
// const todoApp = document.getElementById("todo-header");
// const title = document.querySelector("#title");
// const firstListItem = document.querySelector(".todos");
// console.log(firstListItem);

// title.textContent = "My To Do Tracker";

// const listItem = document.querySelector(".todos");
// listItem.textContent = "Wake Up";

//removeChild() - removes a child node from the DOM
// const removeList = document.querySelector("ul");
// removeList.removeChild(removeList.firstChild);
// console.log(removeList);

// const removeList = document.querySelector("li");
// while (removeList.firstChild) {
//   removeList.removeChild(removeList.firstChild);
// }

//createElement() - creates the HTML element specified by tagName
// const todo = document.createElement("li");
// const todo2 = document.createElement("li");
// const todo3 = document.createElement("li");
// todo.textContent = "Go to sleep";
// todo2.textContent = "Eat Breakfast";
// todo3.textContent = "Get Dressed";

// const todosList = document.querySelector("ul");

//firstChild() - read-only property retrun the nodes first child in the tree

//appendChild() - add a node to the end of thelist of children of a specified parent node
// todosList.appendChild(todo);
// todosList.appendChild(todo2);
// todosList.appendChild(todo3);

/////ADD Event Listener
// const button = document.getElementById("clear");
// button.addEventListener("click", function () {
//   console.log("u have clicked the button");
// });

///Forms
// const formField = document.querySelector("form");
// const input = document.getElementById("user-todo");

// formField.addEventListener("submit", function (e) {
//   e.preventDefault();
//   console.log(input.value);
// });

///////////////////////////
////////////TODO APP - without local storage
//////////////////////////
//Step 1 -> create variables `form`, `todosList`, `button`, `input` to target the form, unordered list, button and input.
// const form = document.querySelector('form');
// const todoList = document.querySelector('ul');
// const button = document.querySelector('button');
// const input = document.getElementById('user-todo');

// Step 2 -> attach an event listener to the `form` variable with `addEventListener`
// to capture the user input on the `submit` event.
// Make sure to run `preventDefault()` on the event when the form is submitted.
// Call a `todoMaker` function which we will create in step three and pass to it
// the `input` variable and target the value the user has provide with `input.value`.
// Finally, set the `input.value` to an empty string.

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   todoMaker(input.value);
//   input.value = '';
//   // console.log(input.value);
// });

// Step 3 -> create a todoMaker function that creates 'li' elements with the text user provides
// from their form and appends it to the 'ul'.

// const todoMaker = function (text) {
//   const todo = document.createElement('li');
//   todo.textContent = text;
//   todoList.appendChild(todo);
// };

// Step 4 -> attach an event listener to the `clear all` button listening for
// a user click.
// In the function use a while loop checking to see whether there
// is an li element as a child of the `ul` tag. In the code block use the
// removeChild() DOM method to removed that `li` using the firstChild property.

// button.addEventListener('click', function () {
//   while (todoList.firstChild) {
//     todoList.removeChild(todoList.firstChild);
//   }
// });

///////////Using local storage exercises

// localStorage.setItem('todos', 'take out trash');
// console.log(localStorage);

// localStorage.setItem('doNotDo', 'sleep in');
// console.log(localStorage);

// localStorage.getItem('todos');
// console.log(localStorage);

// localStorage.getItem('doNotDo');
// console.log(localStorage);

// localStorage.removeItem('doNotdo');
// console.log(localStorage);

// localStorage.clear();
// console.log(localStorage);

///////////////////////////
////////////TODO APP - With Local Storage
//////////////////////////

//create variables `form`, `todosList`, `button`, `input` to target the form, unordered list, button and input.

const form = document.querySelector('form');
const todoList = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.getElementById('user-todo');

// Declare variable `todosArray` to hold our todos.
// We want to ask if there are already `todos` in localStorage. If so, then we will get
// those `todos` using JSON.parse. If local storage does not have any `todos` then we will
// set our `todosArray` to an empty array.

// const todosArray = [];

// We want to as if there are already 'todos' in localStorage. If so, then we will get those 'todos'
//using JSON parse. If local storage does not have any 'todos' then we will set our 'todosArray' to and empty array.

const todosArray = localStorage.getItem('todos')
  ? JSON.parse(localStorage.getItem('todos'))
  : [];

// use localStorage setItem() method to set `todos` to a string with `JSON.stringify()`
// JSON.stringify() if used because localStorage works with strings. This is how
// we sent data to localStorage.
localStorage.setItem('todos', JSON.stringify(todosArray));

// Declare a variable `storage` that contains all the information in localStorage.
// We will assign to `storage` JSON.parse() method that converts strings from local
// storage into data we can access with JavaScript.
// When receiving data from a web server, the data is always a string.
//Parse the data with JSON.parse(), and the data becomes a JavaScript object.
const storage = JSON.parse(localStorage.getItem('todos'));

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // push onto `todosArray` the `input.value`
  todosArray.push(input.value);
  // on localStorage now use `setItem()` for the key `'todos'` the value
  // of the todosArray as a string with the `JSON.stringify()` method.
  localStorage.setItem('todos', JSON.stringify(todosArray));
  todoMaker(input.value);
  input.value = '';
});

//create a todoMaker function that creates 'li' elements with the text user provides
// from their form and appends it to the 'ul'.

const todoMaker = function (text) {
  const todo = document.createElement('li');
  todo.textContent = text;
  todoList.appendChild(todo);
};

button.addEventListener('click', function () {
  //clear local storage witht eh 'clear()' method
  localStorage.clear();
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
});
console.log(localStorage);
