export const user_login = (username, pwd) => {
    console.log("user logged in", username)
    return {
        type: "login",
        username
    }
}