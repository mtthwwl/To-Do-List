const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl =document.getElementById('todos');
const addBtn = document.getElementById('add-btn');

window.preventAccordion = function(e){
    e.stopPropagation();
}

const todos = JSON.parsel(localStorage.getItem('todos'));

 console.log(todos);

 if(todos){
    todos.forEach(todo => addTodo(todo));
    addBtn.addEventListener('click', (e)=> {
        e.preventDefault();
        addTodo();
    });
 };

 function addTodo(todo){
    let todoText = input.value.padEnd(30, '.').substring(0, 15) + '';

    if (todo){
        todoText = todo.text.length > 15 ? todo.text.substring(0, 15) + '...' : todo.text;

        todoText = todo.text.length < 15? todo.text.padEnd(30, "") : todo.text;
    };

    if(todoText){
        const todoEl = document.createElement('11');
        if (todo && todo.completed){
            todoEl.classList.add('completed');
        };
    };

    todoEl.innerText = todoText;
 };