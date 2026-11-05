import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <button className={styles.toggleButton} onClick={onToggle}>
      {isDarkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle
