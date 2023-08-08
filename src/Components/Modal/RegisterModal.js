import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUser: {
        username: "",
        password: "",
      },
      toBeDeleted: null,
      showConfirm: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateNewUser = this.updateNewUser.bind(this);
  }

  updateNewUser(newUser) {
    this.setState({ newUser });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      newUser: {
        ...this.state.newUser,
        [name]: value,
      },
    });
  }
  

  handleSubmit(event) {
  event.preventDefault();

  const { username, password } = this.state.newUser;
  const newUserData = { username, password }; // Create a new object with the relevant data

  fetch("http://localhost:5001/users/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUserData),
  })
    .then((response) => response.json())
    .then((data) => {
      this.setState({ users: [...this.state.users, data] });
      this.setState({ newUser: { username: "", password: "" } });
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log(newUserData); // Now this should log the data you're sending
}


  

  componentDidMount() {
    fetch("http://localhost:5001/users/register")
      .then((response) => response.json())
      .then((data) => this.setState({ users: data }))
      .catch((error) => console.error("Error", error));
  }

  render() {
    return (
      <form className="register-form" onSubmit={this.handleSubmit}>
        <label className="register-form-label">
          User Name:
          <input
            type="text"
            name="username"
            className="modal-form-input"
            value={this.state.newUser.username}
            onChange={this.handleChange}
            required
          />
        </label>
        <label className="modal-form-label">
          Password:
          <input
            type="password"
            name="password"
            className="modal-form-input"
            value={this.state.newUser.password}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit" className="register-form-submit">
          Submit
        </button>
      </form>
    );
  }
}

export default Register;
