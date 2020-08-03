import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Filter extends Component {
  state = {
    image: "",
    match: false,
    matchCount: 0
  };

  // When the component mounts, load the next user to be displayed
  componentDidMount() {
    this.loadNextUser();
  }

  loadNextUser = () => {
    API.getRandomUser()
      .then(res =>
        this.setState({
          image: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Random Office Worker Here</h1>
        {/* <Card image={this.state.picture.medium} /> */}
        <h1 className="text-center">
          Hello
          {/* Gender: {this.state.gender}
          First Name: {this.state.name.first}
          Last name: {this.state.name.last}
          Eamil: this.state.email
          Phone: {this.state.phone.cell} */}
        </h1>
      </div>
    );
  }
}

export default Filter;
