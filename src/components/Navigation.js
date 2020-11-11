import React from 'react';
import { NavLink } from 'react-router-dom';
import cartImg from "../assets/cart-icon.png";

const Navigation =({cart})=> {
	// const {cart} = useContext(CartContext);
	return (
		<div className="navigation">
			<h1>The Bookstore</h1>
			{/* <NavLink to="/">Products</NavLink> */}
			<NavLink to="/cart">
				<img src={cartImg} alt=""></img>
				<span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
