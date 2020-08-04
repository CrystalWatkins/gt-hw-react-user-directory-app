import React, { Component } from "react";
// import API from "../utils/API";
import Axios from "axios";

class Home extends Component {
  state = {
    search: "",
    employees: [],
  };

  componentDidMount() {
    Axios.get("https://randomuser.me/api/?results=50").then((res) =>
      this.setState({
        employees: res.data.results,
      })
    );
    this.sortEmployeesByName();
    this.sortEmployeesByPhone();
    this.sortEmployeesByEmail();
    this.sortEmployeesByAge();
  }

  handleInputChange = (event) => {
    const value = event.currentTarget.value;
    console.log(value);
    this.setState({ search: event.currentTarget.value });
    const searchedEmployees = this.state.employees.filter((user) => {
      console.log("user", Object.values(user));
      let results = Object.values(user).join("").toLowerCase();

      return results.indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({ employees: searchedEmployees });
  };

  sortEmployeesByName = () => {
    function compare(a, b) {
      console.log(a.name.first, b.name.first);
      if (a.name.first > b.name.first) return 1;
      if (b.name.first > a.name.first) return -1;
      return 0;
    }
    const sortedEmployees = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployees,
    });
  };

  sortEmployeesByPhone = () => {
    function compare(a, b) {
      console.log(a.cell, b.cell);
      if (a.cell > b.cell) return 1;
      if (b.cell > a.cell) return -1;
      return 0;
    }
    const sortedEmployeesByPhone = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployeesByPhone,
    });
  };

  sortEmployeesByEmail = () => {
    function compare(a, b) {
      console.log(a.email, b.email);
      if (a.email > b.email) return 1;
      if (b.email > a.email) return -1;
      return 0;
    }
    const sortedEmployeesByEmail = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployeesByEmail,
    });
  };

  sortEmployeesByAge = () => {
    function compare(a, b) {
      console.log(a.dob.age, b.dob.age);
      if (a.dob.age > b.dob.age) return 1;
      if (b.dob.age > a.dob.age) return -1;
      return 0;
    }
    const sortedEmployeesByAge = this.state.employees.sort(compare);
    this.setState({
      employees: sortedEmployeesByAge,
    });
  };

  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-center bg-primary text-white">
          <h1 className="display-4">Employee Directory</h1>
          <hr className="my-4" />
          <p>
            {" "}
            Click on the heading to filter by the heading or use the search box
            to narrow your results.{" "}
          </p>
          <input
            name="search"
            type="text"
            value={this.state.search}
            onChange={this.handleInputChange}
            placeholder="search by name"
          />{" "}
        </div>
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Image</th>
              <th scope="col" onClick={this.sortEmployeesByName}>
                <button type="button" className="btn btn-outline-light">
                  {" "}
                  Name{" "}
                </button>
              </th>
              <th scope="col" onClick={this.sortEmployeesByPhone}>
                <button type="button" className="btn btn-outline-light">
                  Phone{" "}
                </button>{" "}
              </th>
              <th scope="col" onClick={this.sortEmployeesByEmail}>
                <button type="button" className="btn btn-outline-light">
                  Email{" "}
                </button>{" "}
              </th>
              <th scope="col" onClick={this.sortEmployeesByAge}>
                <button type="button" className="btn btn-outline-light">
                  Age{" "}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee) => (
              <tr key={employee.cell}>
                <td>
                  {" "}
                  <img
                    src={employee.picture.thumbnail}
                    alt="employee headshot"
                  />{" "}
                </td>
                <td>
                  {" "}
                  {employee.name.first} {employee.name.last}{" "}
                </td>
                <td>{employee.cell}</td>
                <td>{employee.email}</td>
                <td>{employee.dob.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
