import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Edit extends React.Component {
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

  getOne = id => {
    // console.log("data", id);
    axios.get(`http://localhost:3001/${id}`).then(res => {
      this.setState({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone
      });
    });
  };

  componentDidMount() {
    this.getOne(this.props.contactId);
  }

  editContact = () => {
    console.log(this.state);
    axios
      .put("http://localhost:3001/edit", this.state)
      .then(() => console.log("object"))
      .catch(err => console.log(err));
    alert("The contact was created with success");
  };

  render() {
    //   console.log(this.state)
    return (
      <div>
        <div>
          <p>Contact Name</p>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <p>Contact Téléphone</p>
          <input
            type="Number"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <p>Contact Email</p>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <Link to={`/`}>
          <button onClick={this.editContact}>Save Contact</button>
        </Link>
      </div>
    );
  }
}

export default Edit;
