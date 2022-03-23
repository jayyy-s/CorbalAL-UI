import "../css/login.css";
import React from "react";
import * as LoginActions from "../../actions/user_login";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAuthCode } from "../../scripts/spotifyAuthorization";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  const loginButton = (e) => {
    e.preventDefault(); //prevents reload
    props.actions.user_login(email);
    const path = "/artist/home";
    navigate(path);
  };

  return (
    <div className="login-main-container">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Navbar</span>
          <button
            className="btn btn-success"
            onClick={() => {
              getAuthCode();
            }}
          >
            SPOTIFY
          </button>
        </div>
      </nav>
      <div className="login">
        <form className="login_form">
          <h1>Login</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="submit_btn"
            onClick={(e) => {
              loginButton(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
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
