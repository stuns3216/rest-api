import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addContact = () => {
      // console.log(this.state)
    axios
      .post("http://localhost:3001/Add", this.state)
      .then(() =>
        this.setState({
          name: "",
          phone: "",
          email: ""
        })
      )
      .catch(err => console.log(err));
      alert("The contact was created with success");

  };
  
  render() {
    return (
      <div>
        <div>
          <p>Contact Name</p>
          <input type="text" name="name" onChange={this.handleChange} />
          <p>Contact Téléphone</p>
          <input type="Number" name="phone" onChange={this.handleChange} />
          <p>Contact Email</p>
          <input type="text" name="email" onChange={this.handleChange} />
        </div>
        <Link to={`/`}>
          <button onClick={this.addContact}>Add Contact</button>
          
        </Link>
      </div>
    );
  }
}

export default Add;
