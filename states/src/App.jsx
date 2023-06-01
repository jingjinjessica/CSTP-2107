
import { useState } from "react";

import Header from "./components/Header/Header";
import StudentInfo from './components/StudentInfo/StudentInfo';
import './App.css';
import data from './constant.json';


export default function App(){
    const studentData  = useState(data);

    return(
        <div className="App">
            <Header />
            
            <StudentInfo data={studentData} />
        </div>
    );
}