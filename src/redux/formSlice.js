import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  email: "",
  phone: "",
  plan: 'Advanced',
  price:"",
  isYearly: false,
  addOns: {},
  confirmed:false
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
      const {plan , price} = action.payload ;
      state.plan = plan;
      state.price = price

    },
    setIsYearly: (state, action) => {
      state.isYearly = action.payload;
    },
    toggleAddOn: (state, action) => {
      const { name, price } = action.payload;
      if (state.addOns[name]) {
        // If the add-on is already selected, remove it
        delete state.addOns[name];
      } else {
        // Otherwise, add it
        state.addOns[name] = price;
      }
    },
    setConfirmed : (state, action) =>{
      state.confirmed = action.payload
    }
  },
});

export const { setFormData, resetFormData , setPlan, setIsYearly ,toggleAddOn ,setConfirmed } = formSlice.actions;
export default formSlice.reducer;