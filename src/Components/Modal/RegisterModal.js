import { Component } from "react";

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
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.updateNewUser = this.updateNewUser.bind(this)
    }

    updateNewUser(newUser) {
        this.setState({ newUser });
      }

    handleChange(event) {
        this.setState({newUser: {...this.state.newUser, [event.target.name]: event.target.value}});
      } 

      handleSubmit(newUserData) {
        fetch("http://localhost:5001/users/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUserData),
        })
        .then(response => response.json())
        .then(data => {
          this.setState({users: [...this.state.users, data]});
          this.setState({newUser: {username: "", password: ""}});
        })
        .catch((error) => {
          console.error("Error:", error);
        })
    }

        componentDidMount() {
            fetch("http://localhost:5001/users/register")
            .then(response => response.json())
            .then(data => this.setState({users:data}))
            .catch(error => console.error("Error", error))
          }


render() {

    return (
        // <div className="register-form-container"></div>
            <form className="register-form" onSubmit={this.handleSubmit}>
                <label className="register-form-label">
                    User Name:
                    <input type="text" name="username" className="modal-form-input" value={this.state.username} onChange={this.handleChange} required />
                </label>
                 <label className="modal-form-label">
                    Password:
                    <input type="text" name="password" className="modal-form-input" value={this.state.password} onChange={this.handleChange} required />
                </label>
                <button type="submit" className="register-form-submit">Submit</button>
                {/* <button onClick={} className="register-close-button">Close</button> */}
            </form>
        // </div>
    )

};
}

export default Register;
