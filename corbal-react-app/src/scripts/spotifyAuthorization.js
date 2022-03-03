import axios from "axios";
const queryString = require("query-string");

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const client_id = "385a5bb97f6f4f679cb3410b0c8cc791";
const client_secret = "0f5d387b464d470caa303b2f69444864";
const scope =
  "user-read-private user-read-email user-library-read " +
  "user-library-modify playlist-modify-public";
var state = generateRandomString(16);

/**
 * Gets the Authcode for a given user so that you can get the acces token
 */
const getAuthCode = () => {
  window.location.replace(
    "https://accounts.spotify.com/authorize?" +
      queryString.stringify({
        response_type: "code",
        client_id: client_id,
        redirect_uri: "http://localhost:3003/",
        scope: scope,
        state: state,
      })
  );

  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log("ERROR: ", error);
  // });
};

export { getAuthCode };
