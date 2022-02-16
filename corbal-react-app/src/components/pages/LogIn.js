import "../css/login.css";
import react from "react";
import * as LoginActions from "../../actions/user_login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//import store from "../../store";
//import { Link } from "react-router-dom";

class LogIn extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log(event);
    this.props.actions.user_login(event.target.value);
    console.log(this.props.username);
  }

  render() {
    return (
      <div className="login">
        <form className="login_form">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <button
            type="submit"
            className="submit_btn"
            onClick={(e) => {
              e.preventDefault(); //prevents reload
              this.props.actions.user_login(this.state.email);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    login: state.login.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  };
}

//export default LogIn;
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
