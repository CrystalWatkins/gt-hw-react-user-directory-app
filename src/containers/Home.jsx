import React, { Component } from "react";
// import API from "../utils/API";
import Axios from "axios";

class Home extends Component {
  state = {
    search: "",
    employees: [],
    filterEmployees: [],
    // error: ""
  };

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=10").then((res) =>

      this.setState({
        employees: res.data.results,
        sortEmployees: res.data.results,
      })
    );
    this.sortEmployees();
  }

  handleInputChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({search: event.currentTarget.value})
  };

  handleSearch  = () => {
    console.log(this.state.search)
    Axios.get("https://randomuser.me/api/?name=" + this.state.search).then((response) => {
      console.log(response)
      this.setState({employees: response.data.results})
    })
  }

  sortEmployees= () => {
    function compare(a, b) {
      console.log(a.name.first, b.name.first);
      if (a.name.first > b.name.first) return 1;
      if (b.name.first > a.name.first) return -1;
      return 0;
    }
    const sortedEmployees = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployees
    })
  }

  render() {
      return (
        <div>
          <div className="jumbotron jumbotron-fluid text-center bg-primary text-white">
            <h1 className="display-4">Employee Directory</h1>
            <hr className="my-4" />
            <p>
              Click on the heading to filter by the heading or use the search box
              to narrow your results.
            </p>
            <input
              name="search"
              type="text"
              value={this.state.search}
              onChange={this.handleInputChange}
              placeholder="search by name"
            ></input>
             <button type="button" className="btn btn-dark" onClick={this.handleSearch}>Search</button>
          </div>
          <table className="table table-striped">
            <thead className="thead-dark">
            <tr>
              <th scope="col">
              {/* <button type="button" className="btn btn-outline-light">  */}
                Image
                {/* </button> */}
                </th>
              <th scope="col" onClick = {this.sortEmployees}>
                <button type="button" className="btn btn-outline-light"> 
                Name
                </button>
                </th>
              <th scope="col">
              {/* <button type="button" className="btn btn-outline-light">  */}
              Phone
              {/* </button> */}
              </th>
              <th scope="col"> 
              {/* <button type="button" className="btn btn-outline-light">  */}
              Email  
              {/* </button> */}
              </th>
              <th scope="col">
              {/* <button type="button" className="btn btn-outline-light">  */}
              Age 
              {/* </button> */}
              </th>
            </tr>
            </thead>
            <tbody>{this.state.employees.map((employee) => (
        <tr key={employee.cell}>
          <td>
            <img src={employee.picture.thumbnail} alt="employee headshot" />
          </td>
          <td>
          {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.cell}</td>
          <td>{employee.email}</td>
          <td>{employee.dob.age}</td>
        </tr>
      ))}</tbody>
          </table>
        </div>
      );
  }
}

export default Home;
