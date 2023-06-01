import React from 'react'
import { useState } from 'react';
import styles from  './ControlledForms.module.css'

export default function ControlledForms() {
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');

    const [userData, setUserData] = useState({});

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log (userData);
    }
  return (
   <form  className={styles.formContainer} onSubmit={handleSubmitForm}> 
    <h1>Signup Form</h1>
    <div className= {styles.formControl}>
        <label htmlFor="name">Name</label>
        <input onChange={(event) => setUserData({...userData, name:event.target.value})} value={userData.name} required type="text" placeholder='Enter Name' />
    </div>
    <div className= {styles.formControl}>
        <label htmlFor="name">Email</label>
        <input onChange={(event) => setUserData({...userData, email:event.target.value})} required type="email" placeholder='Enter Email' value={userData.email}/>
    </div>
    <div className= {styles.formControl}>
        <label htmlFor="name">Password</label>
        <input onChange={(event) => setUserData({...userData, password:event.target.value})} required type="password" placeholder='Enter password' value={userData.password}/>
    </div>
    <button className={styles.button}>Submit</button>
    
   </form>
  )
}
