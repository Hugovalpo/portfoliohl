import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>Coded By PixelAgile - {new Date().getFullYear()} -  V 1.0</div>
    </div>
    
  )
}

export default Footer