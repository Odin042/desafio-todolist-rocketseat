import React from "react";

import styles from "./TaskBar.module.css";

export const TaskBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <input type="text" placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </div>
      <div className={styles.taskheader}>
        <p>Tarefas Criadas</p>
        <p> Concluidas </p>
      </div>
      <div className={styles.taskempty}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize tarefas a fazer</p>
      </div>

      
    </div>
  );
};
