import "../css/login.css";
import React from "react";
import { getAuthCode } from "../../scripts/spotifyAuthorization";
import {
  useNavigate
} from "react-router-dom";
import { useState,useEffect} from "react";
import { useSelector,useDispatch} from 'react-redux';
import { fetchUser} from '../../store/user-slice';

// login script
import loginAuthentication from "../../scripts/loginAuth";

/**
 * Dummy login page to login as an artist or curator.
 * Used only for development purposes.
 * 
 * If using data from db.json enter the following to login as an artist
 * email : artist@example.com
 * password: 1234
 * 
 * If using data from db.json enter the following to login as an curator
 * email : curator@example.com
 * password: 1234
 *  
 * @param {object} props 
 * @returns 
 */
function LogIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  let navigate = useNavigate();


  /**
   * This hook runs everytime the user changes.
   */
  useEffect(() => {
    if (user && user.id !== -1) {
      if (user.role=== "artist")
        navigate("/artist/home");
      else if(user.role === "curator"){
        navigate("/curator/home");
      }
    }
  }, [user])


  /**
   * Responds to login button
   * @param {Event} e Submission Event
   */
  const loginButton = (e) => {
    e.preventDefault(); //prevents reload
    dispatch(fetchUser(email, password))
  };

  return (  <div className="login-main-container">
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
      {error && <p className="error_msg">{errorMsg}</p>}
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
</div>);
  }

  export default LogIn;
