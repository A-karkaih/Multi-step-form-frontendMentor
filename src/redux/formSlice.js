import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  email: "",
  phone: "",
  plan: 'Advanced', // Add initial plan state here
  isYearly: false,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFormData: () => initialState,
    setPlan: (state, action) => {
      state.plan = action.payload;
    },
    setIsYearly: (state, action) => {
      state.isYearly = action.payload;
    },
  },
});

export const { setFormData, resetFormData , setPlan, setIsYearly } = formSlice.actions;
export default formSlice.reducer;