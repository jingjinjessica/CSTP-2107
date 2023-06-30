
import React from 'react';
import './App.css'

class App extends React.Component{
  constructor(props){
    console.log("Calles in  constructor");
    super(props);
    this.state = {
      studentName:"David",
      studentId:"001"
    }
  }
  componentDidMount(){
    console.log("Called in comonent Did Mount");

  }
  handleNameChange(){
    this.state={
      studentName:"Amy",
      studentId:"002"
    }
  }

  render(){
    console.log("called in render");
    return (
      <div>
        <ul>
          <li>
            {this.state.studentName}
          </li>
          <li>
            {this.state.studentId}
          </li>
        </ul>
        <button onClick={()=> this.handleNameChange()/}
      </div>
    )
  }
}

export default App
