import React from "react";
import { Clipboard, Circle, CheckCircle, Trash } from "phosphor-react";

import styles from "./TaskBar.module.css";

export const TaskBar = () => {
  const [newTask, setNewTask] = React.useState("");
  const [listTask, setListTask] = React.useState([""]);
  const [countTask, setCountTask] = React.useState(0);
  const [checked, setChecked] = React.useState(false);

  const handleNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTask) {
      return alert("Insira um nome para a tarefa");
    }

    setListTask([...listTask, newTask]);
    setNewTask("");
  };

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    setNewTask(inputValue);
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          onChange={handleInput}
        />
        <button onClick={() => handleNewTask}>Criar</button>
      </div>
      <div className={styles.taskheader}>
        <p className={styles.taskcreates}>Tarefas Criadas</p>
        <p className={styles.taskfinish}> Concluidas </p>
      </div>
      {listTask ? (
        listTask.map((task, index) => (
          <div className={styles.task} key={index}>
            <div className={styles.taskname}>
              <input type="checkbox" onChange={() => setChecked(!checked)} />
              <p>{task}</p>
            </div>
          </div>
        ))
      ) : (
        <div>
          <Clipboard className={styles.taskicon} size={70} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize tarefas a fazer</p>
        </div>
      )}
    </div>
  );
};
