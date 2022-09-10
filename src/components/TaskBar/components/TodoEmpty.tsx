import React from 'react'
import {Clipboard} from 'phosphor-react'

import styles from "../TaskBar.module.css";

export const TodoEmpty = () => {
  return (
    <div className={styles.taskempty}>
          <Clipboard className={styles.taskicon} size={70} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize tarefas a fazer</p>
    </div>
  )
}
