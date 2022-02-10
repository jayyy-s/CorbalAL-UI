import "./App.css";
import react from "react";
import * as LoginActions from "../../actions/user_login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import store from "../../store";
//import { Link } from "react-router-dom";

class LogIn extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("submitted");
    console.log(store);
    console.log(event);
    store.dispatch(LoginActions.user_login(event.target.value));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>CORBAL APP</h1>
        </header>
        <div className="body-container">
          <div className="login-container">
            {/* <form
              className="label-form-container"
              onSubmit={this.handleSubmit}
              target="./"
            > */}
            <p> username: </p>
            <input
              type="email"
              placeholder="Enter your username"
              className="login-input"
            />
            <p> password: </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
            />
            <input type="submit" value="login" onClick={this.handleSubmit} />
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    username: state.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
  };
}

export default LogIn;
//export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
