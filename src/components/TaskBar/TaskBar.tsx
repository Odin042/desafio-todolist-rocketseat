import React from "react";
import { Clipboard, PlusCircle } from "phosphor-react";

import styles from "./TaskBar.module.css";
    

export const TaskBar = () => {
  const[NewTask, setNewTask] = React.useState([
    "Isso é uma task nova"]);
  const[countTask, setCountTask] = React.useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <PlusCircle />
        </button>
      </div>
      <div className={styles.taskheader}>
        <p className={styles.taskname}>Tarefas Criadas</p>
        <p className={styles.taskfinish}> Concluidas </p>
      </div>
      <div className={styles.taskempty}>
        <Clipboard className={styles.taskicon} size={70} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize tarefas a fazer</p>
      </div>

      
    </div>
  );
};
