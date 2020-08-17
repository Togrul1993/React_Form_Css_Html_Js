import React, { Component } from 'react';
import Users from './component/Users';
import AddUser from './component/AddUser';
import './App.css';


class App extends Component {

  render() {
    return (
      <div>
        <AddUser />
        <hr></hr>
        <div className="container-fluid">
          
          <Users />
        
        </div>
        <br></br>
       
      </div>
    )
  }
}
export default App;