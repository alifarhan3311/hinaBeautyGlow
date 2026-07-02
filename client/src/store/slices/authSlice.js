import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:            null,
  token:           null,
  refreshToken:    null,
  isAuthenticated: false,
  role:            null,   // 'admin' | 'staff' | 'client'
  isLoading:       false,
  error:           null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token, refreshToken } = action.payload;
      state.user            = user;
      state.token           = token;
      state.refreshToken    = refreshToken ?? state.refreshToken;
      state.isAuthenticated = true;
      state.role            = user?.role ?? null;
      state.error           = null;
    },

    updateUser: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },

    setToken: (state, action) => {
      state.token = action.payload;
    },

    setAuthLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setAuthError: (state, action) => {
      state.error     = action.payload;
      state.isLoading = false;
    },

    logout: (state) => {
      state.user            = null;
      state.token           = null;
      state.refreshToken    = null;
      state.isAuthenticated = false;
      state.role            = null;
      state.isLoading       = false;
      state.error           = null;
    },
  },
});

export const {
  setCredentials,
  updateUser,
  setToken,
  setAuthLoading,
  setAuthError,
  logout,
} = authSlice.actions;

// ─── Selectors ───────────────────────────────────────────────────────────────
export const selectCurrentUser       = (state) => state.auth.user;
export const selectCurrentToken      = (state) => state.auth.token;
export const selectIsAuthenticated   = (state) => state.auth.isAuthenticated;
export const selectUserRole          = (state) => state.auth.role;
export const selectIsAdmin           = (state) => state.auth.role === 'admin';
export const selectAuthLoading       = (state) => state.auth.isLoading;
export const selectAuthError         = (state) => state.auth.error;

export default authSlice.reducer;
