import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import { Form, FormGroup, Label, Input } from "reactstrap";
class ContactForm extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = this.state;
    let templateParams = {
      from_name: email,
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
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="formBasicEmail">
            <Label className="text-muted">Email address</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              className="text-primary"
              onChange={this.handleChange.bind(this, "email")}
              placeholder="Enter email"
            />
          </FormGroup>
          <FormGroup controlId="formBasicName">
            <Label className="text-muted">Name</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              className="form-control"
              onChange={this.handleChange.bind(this, "name")}
              placeholder="Name"
            />
          </FormGroup>
          <FormGroup controlId="formBasicMessage">
            <Label className="text-muted">Message</Label>
            <Input
              type="textarea"
              name="message"
              className="form-control"
              value={this.state.message}
              onChange={this.handleChange.bind(this, "message")}
            />
          </FormGroup>
          <button className="button btn btn-danger">Submit</button>
        </Form>
      </div>
    );
  }
}
export default ContactForm;
