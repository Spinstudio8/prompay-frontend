import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

function decodeJwt(jwt) {
  try {
    const decoded = jwtDecode(jwt);
    return decoded;
  } catch (ex) {
    return null;
  }
}

const initialState = {
  userInfo: {},
  token: null,
  tokenPayload: {},
  verificationEmail: null,
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      console.log(action.payload);
      state.token = action.payload;
      state.tokenPayload = decodeJwt(action.payload);
    },
    setLogout: (state, action) => {
      state.userInfo = null;
      state.token = null;
      state.tokenPayload = null;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload.user;
    },
    setUsers: (state, action) => {
      state.users = action.payload.users;
    },
    setVerificationEmail: (state, action) => {
      state.verificationEmail = action.payload;
    },
    removeVerificationEmail: (state, action) => {
      state.verificationEmail = null;
    },
  },
});

export const {
  setLogin,
  setLogout,
  setUser,
  setUsers,
  setVerificationEmail,
  removeVerificationEmail,
} = userSlice.actions;

export default userSlice.reducer;
