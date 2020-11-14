import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation =({cart})=> {
	// const {cart} = useContext(CartContext);
	return (
		<div className="navigation">
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
