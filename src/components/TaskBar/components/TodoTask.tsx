import React from 'react'
import { ITask } from "../Interfaces"
import styles from "../TaskBar.module.css";
import { TodoTask } from './TodoTask';

interface Props {
  task: ITask;
  todoTask: boolean;
}

export const TodoTask = ({ task }: Props) => {
  const todoTask = task.filter((tasks) => task.name != "")

  return (
    {todoTask  ? (
      <>
        <div className={styles.task}>
            {task.name}
        </div>
      </>
    ) : (
      <div>
          <Clipboard className={styles.taskicon} size={70} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize tarefas a fazer</p>
        </div>
    )}
  )
}
