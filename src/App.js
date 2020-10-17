import React, { Component } from 'react';
import Header from "./components/header";
import Search from "./components/search";
import Table from "./components/table";
import employees from "./employees"
import './app.css';


class App extends Component {
  state = {
    search: "",
    results: "",
    employees,
    searchEmployee: ''
  };


handleInputChange = (e) => {
console.log(e.target.value);
this.state({searchEmployee: e.target.value})
}



//render app
render() { 
  return ( 
    <div>
      <Header />
      <p>{this.state.search}</p>
      <Search search={this.state.search}
      handleInputChange = {this.handleInputChange}/>
      <div className="container">
        <div className="row">
          <table className="table">
            <thread>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thread>
            <tbody>
              {this.state.employees.map(employee => (
                <tr>
                  <Table 
                  id={employee.id}
                  img={employee.image}
                  name={employee.name}
                  phone={employee.phone}
                  email={employee.email}
                  />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>  
)
  }
}


export default App;
