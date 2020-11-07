import React, { Component } from "react";
import * as emailjs from "emailjs-com";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_name: email,
      name: name,
      to_name: "milind.sahay123@gmail.com",
      message: message,
    };
    emailjs.send(
      "service_teu4ne8",
      "template_n2w2oz6",
      templateParams,
      "user_efJN7enmJk405IpYPSraM"
    );
    this.resetForm();
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label className="text-muted">Email address</label>
            <input
              type="email"
              value={this.state.email}
              className="form-control"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              className="form-control"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label className="text-muted">Message</label>
            <input
              type="textarea"
              name="message"
              className="form-control"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </div>
          <button className="button btn btn-danger">Submit</button>
        </form>
      </div>
    );
  }
}
export default ContactForm;
