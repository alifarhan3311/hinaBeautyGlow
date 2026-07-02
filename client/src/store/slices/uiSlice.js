import { createSlice } from '@reduxjs/toolkit';

// ─── Helpers ─────────────────────────────────────────────────────────────────
const loadDarkMode = () => {
  try {
    const stored = localStorage.getItem('hbg:darkMode');
    if (stored !== null) return JSON.parse(stored);
  } catch {
    // ignore
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const applyDarkMode = (enabled) => {
  if (enabled) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// ─── State ───────────────────────────────────────────────────────────────────
const initialState = {
  darkMode:    loadDarkMode(),
  sidebarOpen: false,

  // Toast notifications array
  toasts: [],
  // [ { id, type: 'success'|'error'|'info'|'warning', message, duration } ]

  // Modal states
  modals: {
    bookingConfirm: false,
    authModal:      false,
    imageViewer:    false,
    imageViewerSrc: null,
  },

  // Global loading overlay
  globalLoading: false,
};

// Apply dark mode on load
applyDarkMode(initialState.darkMode);

// ─── Slice ───────────────────────────────────────────────────────────────────
let toastCounter = 0;

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem('hbg:darkMode', JSON.stringify(state.darkMode));
      applyDarkMode(state.darkMode);
    },

    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
      localStorage.setItem('hbg:darkMode', JSON.stringify(state.darkMode));
      applyDarkMode(state.darkMode);
    },

    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },

    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },

    addToast: (state, action) => {
      const { type = 'info', message, duration = 4000 } = action.payload;
      state.toasts.push({
        id:      ++toastCounter,
        type,
        message,
        duration,
      });
    },

    removeToast: (state, action) => {
      state.toasts = state.toasts.filter((t) => t.id !== action.payload);
    },

    clearToasts: (state) => {
      state.toasts = [];
    },

    openModal: (state, action) => {
      const { name, data } = action.payload;
      if (name in state.modals) {
        state.modals[name] = true;
        if (name === 'imageViewer' && data) {
          state.modals.imageViewerSrc = data;
        }
      }
    },

    closeModal: (state, action) => {
      const name = action.payload;
      if (name in state.modals) {
        state.modals[name] = false;
        if (name === 'imageViewer') {
          state.modals.imageViewerSrc = null;
        }
      }
    },

    closeAllModals: (state) => {
      Object.keys(state.modals).forEach((key) => {
        if (typeof state.modals[key] === 'boolean') {
          state.modals[key] = false;
        }
      });
      state.modals.imageViewerSrc = null;
    },

    setGlobalLoading: (state, action) => {
      state.globalLoading = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  setDarkMode,
  toggleSidebar,
  setSidebarOpen,
  addToast,
  removeToast,
  clearToasts,
  openModal,
  closeModal,
  closeAllModals,
  setGlobalLoading,
} = uiSlice.actions;

// ─── Selectors ───────────────────────────────────────────────────────────────
export const selectDarkMode     = (state) => state.ui.darkMode;
export const selectSidebarOpen  = (state) => state.ui.sidebarOpen;
export const selectToasts       = (state) => state.ui.toasts;
export const selectModals       = (state) => state.ui.modals;
export const selectGlobalLoading= (state) => state.ui.globalLoading;

export default uiSlice.reducer;
