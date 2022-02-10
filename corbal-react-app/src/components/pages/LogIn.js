import "./App.css";
import react from "react";

function LogIn() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CORBAL APP</h1>
      </header>
      <div className="body-container">
        <div className="login-container">
          <form className="label-form-container">
            <p> username: </p>
            <input
              type="email"
              placeholder="Enter your username"
              className="login-input"
            />
          </form>
          <form className="label-form-container">
            <p> password: </p>
            <input
              type="password"
              placeholder="Enter your password"
              className="login-input"
            />
          </form>
          <button> login</button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
