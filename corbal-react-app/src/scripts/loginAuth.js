//import axios from "axios";
import {fetchUser} from '../store/user-slice';


/**
 * Calls the backend to authenticate user and returns
 * error (with reason) or succces (with user info)
 * @param {String} email the email
 * @param {String} password the password
 */
const loginAuthentication = (email, password) => {
  /**
   * This is where I would call the api
   */
  const rand = Math.floor(Math.random() * 4);
  if (rand === 1) {
    //simulate error
    return {
      status: "error",
      error: "Invalid Login",
      code: 101,
    };
  }

  //dummy data
  return {
    status: "Sucess",
    email: email,
    userID: 101,
    username: "CorbalUser",
    firstName: "Kendrick",
    lastName: "lamar",
    age: 32,
    genre: "Hip Hop",
    city: "Boston",
    phone: "(111) 222-3333",
  };
};

export default loginAuthentication;
