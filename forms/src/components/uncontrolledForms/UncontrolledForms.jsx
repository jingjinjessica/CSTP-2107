import React, { useRef, useState, useEffect } from 'react'
import styles from './UnControlledForms.module.css'

export default function UncontrolledForms() {
  
    const [userInfo, setUserInfo] = useState({});
    const [ isFormSubmitted, setFormSubmitted] = useState(false);
    // const [name,setName] = useState('');
    // const [email,setEmail] = useState('');
    // const [password,setPassword] = useState('');
    // const [userData, setUserData] = useState({});

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect(() => {
        console.log("Application Loading");
        return () => {
            console.log("Component is Destroyed")
        }
    },[isFormSubmitted]);

    useEffect(() => {
        console.log("Application Ascasseess")
    })

    const handleSubmitForm = (event) => {
        event.preventDefault();
        console.log (nameRef.current.value);
        setUserInfo({
            name: nameRef.current.value,
            email:emailRef.current.vale,
            password:passwordRef.current.value
        })
        setFormSubmitted((prevState) => !prevState);
    }

  return (
   <form  className={styles.formContainer} onSubmit={handleSubmitForm}> 
    <h1>Signup Form</h1>
    <div className= {styles.formControl}>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} required type="text" placeholder='Enter Name' />
    </div>
    <div className= {styles.formControl}>
        <label htmlFor="name">Email</label>
        <input ref={emailRef} required type="email" placeholder='Enter Email' />
    </div>
    <div className= {styles.formControl}>
        <label htmlFor="name">Password</label>
        <input ref={passwordRef} required type="password" placeholder='Enter password' />
    </div>
    <button className={styles.button}>Submit</button>
    
   </form>
  )
}
