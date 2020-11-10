import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { connect } from "react-redux";
// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';


function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		setCart([...cart, item])
	};
	console.log(cart)
	const removeItem = item => {
		setCart([...cart.filter((obj) => obj.id !== item)])
		
	}

	return (
		<div className="App">
			<Products props = {{products, addItem}}/>
			<ShoppingCart props= {{cart, removeItem}} />
			<Navigation  />

			{/* Routes */}
			<Route exact path="/">
				<Products />
			</Route>

			<Route path="/cart">
				<ShoppingCart  />
			</Route>			
		</div>
	);
}

const mapStateToProps = (state) => {
	console.log("App state", state);
	return state;
  };

export default connect(mapStateToProps)(App);

