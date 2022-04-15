import {
    createSlice
} from '@reduxjs/toolkit';

import {
    endPoint
} from '../config'

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: {
            id: -1,
            username: "",
            password: "",
            spotify_uri: "",
            is_artist: false,
            firstName: "Test firstname",
            lastName: "Test lastname",
            age: 25,
            location : "Boston, MA",
            email : "artist@example.com",
            phone: "12345689"
          }
    },
    reducers: {
        login(state, action) {
            state.user = action.payload.user;
        }
    }
});

export const userActions = userSlice.actions;

export const fetchUser = (email, password) => {
    return async (dispatch) => {

        //GET Request
        const getUserRequest = async () => {
            const response = await fetch(
                `${endPoint}/users`
            );
            if (!response.ok) {
                throw new Error('Getting user data failed.');
            }
            return await response.json();

        };

        try {
            const data = await getUserRequest();
            const user = data.filter((user) =>
                user.username === email && user.password === password
            )[0];

            dispatch(
                userActions.login({
                    user: user
                })
            );
        } catch (error) {
            console.log("There was an error fetching users data");
        }
    };
};


export default userSlice;