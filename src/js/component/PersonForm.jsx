import React, { useState, useEffect } from "react";
import { getList, createTask, changeList } from "../Api/api"

import "../../styles/PersonForm.css";

const PersonForm = () => {
	const [tasks, setTasks] = useState([]);
	const [changeTask, setChangeTask] = useState({
		label: "",
		done: false,
	});

	const addTask = (changeTask) => {
		const auxTask = [...tasks, changeTask];
		setTasks(auxTask);
		setChangeTask({ label: "" });
		createTask(auxTask);
	};



	const deleteTask = (index) => {
		const auxTask = tasks.filter((nameTask, auxIndex) => {
			if (index !== auxIndex) return nameTask;
		});
		setTasks(auxTask);
		changeList(auxTask);
	};

	const saveNameTask = (e) => {
		if (
			(changeTask &&
				changeTask.label.length > 0 &&
				e.code === "NumpadEnter") ||
			(changeTask && changeTask.label.length > 0 && e.code === "Enter")
		) {
			addTask(changeTask);
		}
	};

	const getAllTasks = () => {
		getList()
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setTasks(data);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	useEffect(() => {
		getAllTasks();
	}, []);

	return (
		<>
			<h1 className="principal">4Geeks Academy</h1>
			<div className="text-center">
				<h1>todo</h1>
				<input
					type="text"
					className="tarea-input"
					placeholder="Enter new task here"
					onChange={(e) => {
						setChangeTask({
							label: e.target.value,
							done: false,
						});
					}}
					onKeyPress={saveNameTask}
					value={changeTask.label}
				/>


				{tasks.map((changeTask, index) =>
				(
					<>
						<div className="el">
							<div key={index} className="tarea-texto">
								<h3>{changeTask.label}</h3>
							</div>
							<div className="botonera">
								<button
									onClick={() => {
										deleteTask(index);
									}}
									className="boton">
									X
								</button>
							</div>
						</div>
					</>
				))}
			</div>
			<span>© By Javier Arques Tortosa</span>
		</>
	);
};

export default PersonForm;