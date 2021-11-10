import React, { useState } from "react";

//create your first component

export const ToDoListInput = () => {
	const [inputValue, setInputValue] = useState("");
	const html = inputValue;

	const validateInput = () => {
		if (inputValue === "") alert("The input cannot be empty");
		else return html;
	};

	return (
		<>
			<div className="row m-1 p-3">
				<div className="col col-11 mx-auto">
					<div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
						<div className="col">
							<input
								onChange={e => setInputValue(e.target.value)}
								value={inputValue}
								type="text"
								className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
								placeholder="What need to be done?"
							/>
						</div>

						<div className="col-auto px-0 mx-0 mr-2">
							<button
								onClick={validateInput}
								type="button"
								className="btn btn-primary">
								Add
							</button>
						</div>
					</div>
				</div>
			</div>

			<ul>{inputValue}</ul>
		</>
	);
};
