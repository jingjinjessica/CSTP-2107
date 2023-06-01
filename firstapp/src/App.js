// Class Based
import React from 'react';

import constants from './constant';

class App extends React.Component{
  render(){
    return(
      <div>
        {/* You can inject a variable*/}
        {constants.collegeName}
        Hi Jessica!
      </div>
    )
  }
}

export class MyClass extends React.Component{
  render(){
    return(
      <div>
        My Class Html
      </div>
    )
  }
}
export default App;
//Fuction Based
