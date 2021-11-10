import React from "react";
import { ToDoListHeader } from "./ToDoListHeader.jsx";
import { ToDoListForm } from "./ToDoListForm.jsx";
//create your first component
const Home = () => {
	return (
		<>
			<ToDoListHeader />
			<ToDoListForm />
		</>
	);
};

export default Home;
