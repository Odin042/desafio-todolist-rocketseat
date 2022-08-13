import React from 'react'

import Logo from '../../assets/Logo.svg'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <div >
      <header className={styles.header}>
        <img src={Logo} alt="react"  />
      </header>
    </div>
    
  )
}
