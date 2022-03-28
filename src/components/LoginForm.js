import React, { Component } from "react";
import loginFormValidation from "../utils/loginFormValidation";
import ButtonTag from "./ButtonTag";
import PasswordField from "./PasswordField";
import UserIdField from "./UserIdField";
import Error from "./Error";
class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      password: "",
      isLoggedIn: false,
      error: false,
      errorMessage: "fgjk",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    let value = e.target.value;
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      (e) => {
        console.log(value);
      }
    );
  }
  handleClick(e) {
    e.preventDefault();
    const { success, message } = loginFormValidation(
      this.state.userId,
      this.state.password
    );
    console.log(message);
    if (!success) {
      this.setState({
        error: true,
        errorMessage: message,
      });
    } else {
      console.log("Clicked");
      this.setState({ isLoggedIn: true, errorMessage: "" });
    }
  }
  render() {
    let userIdValue = this.state.userId;
    let passwordValue = this.state.password;
    return (
      <React.Fragment>
        <form>
          <UserIdField value={userIdValue} onChange={this.handleChange} />

          <PasswordField value={passwordValue} onChange={this.handleChange} />

          <ButtonTag
            type="submit"
            name="Login"
            id="Login"
            onClick={this.handleClick}
          />

          {this.state.error && <Error message={this.state.errorMessage} />}
        </form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
