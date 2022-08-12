import './styles.css';

import {Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// const tarea = new Todo('aprender javaScript');
// todoList.nuevoTodo( tarea );
// console.log(todoList);
// crearTodoHtml ( tarea );

// localStorage.setItem('mi-key', 'ABC1234');
// setTimeout(() => {
//     localStorage.removeItem('mi-key');
// }, 1500);

// todoList.todos.forEach(todo => crearTodoHtml(todo));
todoList.todos.forEach(crearTodoHtml); // esta linea es lo mismo que la de arriba pero se simplifica al ser el mismo elemento

const newTodo = new Todo('apreder javaScript');
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();

 console.log('todos', todoList.todos);