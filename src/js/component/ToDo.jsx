import React, { useState, useRef } from "react";

//create your first component

function ToDo({ todos, completeTodo, removeTodo, props }) {
	const [isShownHoverContent, setIsShownHoverContent] = useState(false);

	return todos.map(todo => (
		<div
			className="d-flex"
			key={todo.id}
			onMouseEnter={() => setIsShownHoverContent(true)}
			onMouseLeave={() => setIsShownHoverContent(false)}>
			<div className="p-2 w-100" onClick={() => completeTodo(todo.id)}>
				<ul
					className={
						todo.isComplete
							? "list-group list-group-flush complete"
							: "list-group list-group-flush"
					}>
					<li className="list-group-item">{todo.text}</li>
				</ul>
			</div>

			<div>
				<i
					onClick={() => removeTodo(todo.id)}
					className={
						isShownHoverContent
							? "fas fa-times p-2 flex-shrink-1 "
							: "fas fa-times p-2 flex-shrink-1 hide"
					}></i>
			</div>
		</div>
	));
}

export default ToDo;
