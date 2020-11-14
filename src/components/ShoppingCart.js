import React from 'react';
import { NavLink } from 'react-router-dom';
// Components
import Item from './ShoppingCartItem';


const ShoppingCart = ({cart, removeItem})=> {
	// const {cart, removeItem} = useContext(CartContext);
	const getCartTotal = () => {
		return cart.reduce((acc, value) => {
			return acc + value.price;
		}, 0).toFixed(2);
	};

	return (
		<div className="shopping-cart">
			{cart.map(item => (
				<Item key={item.id} {...item}  removeItem={removeItem} />
				
			))}

			<div className="shopping-cart__checkout">
				<p>Total: ${getCartTotal()}</p>
				<NavLink to="/checkout"><button>Checkout</button></NavLink>
			</div>
		</div>
	);
};

export default ShoppingCart;
