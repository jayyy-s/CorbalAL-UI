export const user_login = (username) => {
  console.log("user logged in", username);
  return {
    type: "login",
    payload: {
      username,
    },
  };
};
