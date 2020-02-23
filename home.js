import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      id: 0,
      updatedContact:{}
    };
  }


  // componentDidMount() {
  //   axios.get("http://localhost:3001/contacts").then(res => {
  //     const contact = res.data;
  //     console.log("contact",contact)
  //     this.setState({ contact });
  //   },()=>   console.log("state",this.state));
 
  // };

  // componentDidMount(){
  //   this.displayContact()
  //   console.log(this.state.contact)

  // }

 

  render() {
    return (
      <div>
        <h1>Contact App</h1>
        <Link to={`/`}>
          <button>Contact List</button>
        </Link>
        <Link to={`/Add`}>
          <button>Add Contact</button>
        </Link>
        <h1>this is the contact page</h1>
      </div>
    );
  }
}

export default Home;
