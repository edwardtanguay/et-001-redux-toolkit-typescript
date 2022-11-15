import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	count: 0
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		add: (state) => {
			state.count += 1;
		},
		subtract: (state) => {
			state.count -= 1;
		}
	}
});

export const { add, subtract } = cartSlice.actions;
export default cartSlice.reducer;