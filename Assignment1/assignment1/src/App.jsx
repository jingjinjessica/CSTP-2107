import {useState} from "react";
import Header from "./components/Header/Header";
import './App.css'
import StudentInfo from "./components/StudentInfo/StudentInfo";
import data from './constat.json';

export default function App(){
  
  const[studentData, setStudentData] = useState(data);
  return(
    <div className="App">
      <Header/>
      <StudentInfo data={studentData}/>
    </div>
  );
}
