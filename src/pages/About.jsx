// import React, { Component } from "react";
// import API from "../utils/API";
// import SearchForm from "../components/SearchForm";
// // import SearchResults from "../components/SearchResults";
// import Container from "../components/Container";
// import Card from "../components/Card"

// class About extends Component {
//   state = {
//     search: "",
//     users: [],
//     results: [],
//     error: ""
//   }

//   componentDidMount() {
//     API.getRandomUser()
//     .then((res) => this.setState({user: this.data.results }))
//     .catch((err) => console.log(err))
//   }

//   // componentDidMount() {
//   //   API.getSearchedUser()
//   //     .then(res => this.setState({ users: res.data.results.name}))
//   //     .catch(err => console.log(err));
//   // }
//   // handleInputChange = event => {
//   //   this.setState({ search: event.target.value });
//   // };

//   // handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   API.getSearchedUser(this.state.search)
//   //     .then(res => {
//   //       if (res.data.status === "error") {
//   //         throw new Error(res.data.message);
//   //       }
//   //       this.setState({ results: res.data.results.name, error: "" });
//   //     })
//   //     .catch(err => this.setState({ error: err.message }));
//   // };

//   render() 
//   {
//    const userList = this.state.user.map(results => (<Card value = {user} ></Card>))
//     return (
//       <div>
//         <Container style={{ minHeight: "80%" }}>
//           <h1 className="text-center">Search By User!</h1>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             users={this.state.users}
//           />
//           {/* <SearchResults results={this.state.results} /> */}
//        <ul className = "list-group search-results">
//          <li>

//          </li>
//           </ul>
//         </Container>
//       </div>
//     );
//   }
// }

// export default About;
