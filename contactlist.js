import React, { Component } from "react";
import UpdatedComponent from "./loader";
import { Link } from "react-router-dom";
import axios from "axios";

class Contactlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      loading: true
    };
  }

  getContacts = () => {
    axios.get("http://localhost:3001/contacts").then(
      res => {
        const contact = res.data;
        // console.log("contact", contact);
        this.setState({ contact });
      },
      () => console.log("state", this.state)
    );
  };

  sleep = milliseconds => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  };

  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds);
    this.setState({
      loading: false
    });
  };

  componentDidMount() {
    this.wait(2000);
    this.getContacts();
  }

  deleteContact = id => {
    axios.delete(`http://localhost:3001/delete/${id}`).then(res => {
      this.getContacts();
      // console.log(res);
      // console.log(res.data);
    });
    // alert("The contact was deleted with success");
  };

  render() {
    // if (this.state.loading) return <UpdatedComponent />;
    return (
      <ul className="list">
        {this.state.contact.map((contact, i) => (
          <div className="contact" key={i}>
            <li>{contact.name}</li>
            <li>{contact.phone}</li>
            <li>{contact.email}</li>
            <div>
              <Link to={`/Edit`}>
                <button  onClick={()=>this.props.editContact(contact._id)}>Update</button>
              </Link>
              <Link to={`/`}>
                <button onClick={() => this.deleteContact(contact._id)}>
                  Delete
                </button>
              </Link>
            </div>
          </div>
        ))}
      </ul>
    );
  }
}
export default UpdatedComponent(Contactlist);
