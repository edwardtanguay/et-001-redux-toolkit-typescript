import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IState {
	cartItems: any[]
}

const initialState: IState = {
	cartItems: []
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addCartItem: (state, action: PayloadAction<any>) => {
			state.cartItems.push(action.payload);
		}
	}
});

export const { addCartItem } = cartSlice.actions;
export default cartSlice.reducer;