import axios from "axios";
const queryString = require("query-string");

const client_ID = "385a5bb97f6f4f679cb3410b0c8cc791";
const client_secret = "0f5d387b464d470caa303b2f69444864";
const scope =
  "user-read-private user-read-email user-library-read " +
  "user-library-modify playlist-modify-public";
var state = "h46i7S0ey5lr";

const getAuthCode = () => {
  window.location.replace(
    "https://accounts.spotify.com/authorize" +
      queryString.stringify({
        client_ID,
        response_type: "code",
        redirect_uri: "http://localhost:3003/",
        scope: scope,
        state,
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
