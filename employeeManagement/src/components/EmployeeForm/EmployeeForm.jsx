import React from 'react'
import styles from './EmployForm.module.css'

export default function EmployeeForm() {
  return (
    <form>
        <div className={styles.formaControl}>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Enter Name'/>
        </div>

        <div className={styles.formaControl}>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter email'/>
        </div>

        <div className={styles.formaControl}>
            <label htmlFor='date'>Date</label>
            <input type='date' />
        </div>

      


    </form>
  )
}
