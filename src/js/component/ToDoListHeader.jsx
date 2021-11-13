import React from "react";

//create your first component

function ToDoListHeader() {
	return (
		<>
			<div className="row m-1 p-4">
				<div className="col">
					<div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
						<i className="fa fa-check  bg-primary text-white rounded p-2"></i>
						<u>My Todo List</u>
					</div>
				</div>
			</div>
		</>
	);
}

export default ToDoListHeader;
