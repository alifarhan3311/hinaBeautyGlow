import { createSlice } from '@reduxjs/toolkit';

// ─── Initial State ────────────────────────────────────────────────────────────
const initialState = {
  // Multi-step booking form data
  step: 1, // 1: service, 2: date/time, 3: details, 4: confirm

  selectedService:  null,   // { id, name, duration, price, category }
  selectedPackage:  null,   // { id, name, price }
  selectedDate:     null,   // ISO date string 'YYYY-MM-DD'
  selectedTime:     null,   // '10:00 AM'
  selectedStaff:    null,   // { id, name }

  // Guest / client details
  clientDetails: {
    firstName:   '',
    lastName:    '',
    email:       '',
    phone:       '',
    notes:       '',
  },

  // Confirmation
  confirmedBooking: null,
  bookingStatus:    'idle', // 'idle' | 'loading' | 'success' | 'error'
  bookingError:     null,

  // Available slots fetched from API
  availableSlots:   [],
  slotsLoading:     false,
};

// ─── Slice ────────────────────────────────────────────────────────────────────
const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload;
    },

    nextStep: (state) => {
      if (state.step < 4) state.step += 1;
    },

    prevStep: (state) => {
      if (state.step > 1) state.step -= 1;
    },

    selectService: (state, action) => {
      state.selectedService = action.payload;
      state.selectedDate    = null;
      state.selectedTime    = null;
      state.availableSlots  = [];
    },

    selectPackage: (state, action) => {
      state.selectedPackage = action.payload;
    },

    selectDate: (state, action) => {
      state.selectedDate   = action.payload;
      state.selectedTime   = null;
    },

    selectTime: (state, action) => {
      state.selectedTime = action.payload;
    },

    selectStaff: (state, action) => {
      state.selectedStaff = action.payload;
    },

    updateClientDetails: (state, action) => {
      state.clientDetails = { ...state.clientDetails, ...action.payload };
    },

    setAvailableSlots: (state, action) => {
      state.availableSlots = action.payload;
      state.slotsLoading   = false;
    },

    setSlotsLoading: (state, action) => {
      state.slotsLoading = action.payload;
    },

    setBookingStatus: (state, action) => {
      state.bookingStatus = action.payload;
    },

    setBookingError: (state, action) => {
      state.bookingError  = action.payload;
      state.bookingStatus = 'error';
    },

    setConfirmedBooking: (state, action) => {
      state.confirmedBooking = action.payload;
      state.bookingStatus    = 'success';
    },

    resetBooking: () => initialState,
  },
});

export const {
  setStep,
  nextStep,
  prevStep,
  selectService,
  selectPackage,
  selectDate,
  selectTime,
  selectStaff,
  updateClientDetails,
  setAvailableSlots,
  setSlotsLoading,
  setBookingStatus,
  setBookingError,
  setConfirmedBooking,
  resetBooking,
} = appointmentSlice.actions;

// ─── Selectors ────────────────────────────────────────────────────────────────
export const selectBookingStep       = (state) => state.appointment.step;
export const selectBookingService    = (state) => state.appointment.selectedService;
export const selectBookingPackage    = (state) => state.appointment.selectedPackage;
export const selectBookingDate       = (state) => state.appointment.selectedDate;
export const selectBookingTime       = (state) => state.appointment.selectedTime;
export const selectBookingStaff      = (state) => state.appointment.selectedStaff;
export const selectClientDetails     = (state) => state.appointment.clientDetails;
export const selectAvailableSlots    = (state) => state.appointment.availableSlots;
export const selectSlotsLoading      = (state) => state.appointment.slotsLoading;
export const selectBookingStatus     = (state) => state.appointment.bookingStatus;
export const selectBookingError      = (state) => state.appointment.bookingError;
export const selectConfirmedBooking  = (state) => state.appointment.confirmedBooking;

export default appointmentSlice.reducer;
