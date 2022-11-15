import { useDispatch, useSelector } from 'react-redux';
import { add, subtract } from '../../features/cart/cartSlice';
import { RootState } from '../../app/store';

export const PageBooks = () => {
	const dispatch = useDispatch();
	const selectCart= (state: RootState) => state.cart;
	const { count } = useSelector(selectCart);

	return (
		<div className="page_books">
			<div>{count}</div>
			<button onClick={() => dispatch(add())}>Add</button>
			<button onClick={() => dispatch(subtract())}>Subtract</button>
		</div>
	);
};
