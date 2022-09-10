import React, { ChangeEvent } from "react";
import { Clipboard, Circle, CheckCircle, Trash } from "phosphor-react";
import { ITask } from "./interfaces";

import styles from "./TaskBar.module.css";
import { TodoTask } from "./components/TodoTask";

export const TaskBar = () => {
  const [task, setTask] = React.useState<string>("");
  const [todoList, setTodoList] = React.useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTask(event.target.value);
  };

  const handleAddTask = (): void => {
    if(!task) return
    const newTask = { name: task };
    setTodoList([...todoList, newTask]);
    if(task === ""){
      alert("Digite um valor valido")
    }
    setTask("")
    console.log(todoList)
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input
          type="text"
          value={task}
          placeholder="Adicione uma nova tarefa"
          onChange={handleChange}
        />
        <button onClick={handleAddTask}>Criar</button>
      </div>
      <div className={styles.taskheader}>
        <p className={styles.taskcreates}>Tarefas Criadas</p>
        <p className={styles.taskfinish}> Concluidas </p>
      </div>
      <div className={styles.taskContainer}>
           {todoList.map((task: ITask, key: number) => {
                  return <TodoTask key={key} task={task}  />
        })}
      </div>
    </div>
  );
};
