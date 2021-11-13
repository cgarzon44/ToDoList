import React, { useState } from "react";
import ToDo from "./ToDo.jsx";
import ToDoForm from "./ToDoForm.jsx";
import ToDoCounter from "./ToDoCounter.jsx";
import ToDoListHeader from "./ToDoListHeader.jsx";

//create your first component

function ToDoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		if (!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}
		const newTodos = [todo, ...todos];

		setTodos(newTodos);
	};

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete;
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const removeTodo = id => {
		const removeArr = todos.filter(todo => todo.id !== id);

		setTodos(removeArr);
	};

	return (
		<div className="custom-container row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
			<ToDoListHeader />
			<ToDoForm onSubmit={addTodo} />
			<ToDoCounter todos={todos} />
			<ToDo
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
			/>
		</div>
	);
}

export default ToDoList;
