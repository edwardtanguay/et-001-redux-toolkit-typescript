import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/store';

export const PageBooks = () => {
	const dispatch = useDispatch();
	const selectCart = (state: RootState) => state.cart;
	const { cartItems: items } = useSelector(selectCart);

	return (
		<div className="page_books">
			<button
				onClick={() =>
					dispatch({
						type: 'cart/addCartItem',
						payload: { title: 'Node.js Cookbook', price: 23.99 },
					})
				}
			>
				Node.js Cookbook
			</button>
			<hr />
			<div>You have {items.length} in your cart.</div>
		</div>
	);
};
