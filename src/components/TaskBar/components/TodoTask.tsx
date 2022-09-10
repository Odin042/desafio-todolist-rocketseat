import React from 'react'
import { ITask } from "../Interfaces"
import styles from "../TaskBar.module.css";


interface Props {
  task: ITask;
}

export const TodoTask = ({ task }: Props) => {
  
  return (
       <div className={styles.task}>
            {task.name}
        </div>
   
  )
}
