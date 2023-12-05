const todosField = document.querySelector("#todoField");
const ul = document.querySelector("ul");
let todos = [];

document.querySelector('#registrationForm').addEventListener("submit", function(event) {
    console.log("submitting the form");
    event.preventDefault();
    const input = document.querySelector('input[type="text"]');
    const todo = input.value
    todos.push(todo);
    input.value = '';

    let template = todos.map((todo,) =>
    `
    <li>${todo}
    `);

    ul.innerHTML = template.join('');
});