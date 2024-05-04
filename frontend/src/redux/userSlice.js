// userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user
const initialState = {
  email: "",
  firstName: "",
  image: "",
  lastName: "",
  _id: "",
};

// Create a Redux slice with login and logout reducers
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      const data = action.payload.data;
      console.log("Data: ",data)
      state._id = data._id;
      state.firstName = data.firstName;
      state.lastName = data.lastName;
      state.email = data.email;
      state.image = data.image;
    },
    logoutRedux: (state) => {
      state._id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.image = "";
    },
  },
});

export const { loginRedux, logoutRedux } = userSlice.actions;
export default userSlice.reducer;
