 import React  from 'react';
import { Route } from 'react-router-dom';
import { connect } from "react-redux";
// Components
import Navigation from './components/Navigation';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import {addItem, removeItem} from './actions'


function App(props) {
	// const [products] = useState(data);
	// const [cart, setCart] = useState([]);

	// const addItem = item => {
	// 	setCart([...cart, item])
	// };
	// console.log(cart)
	// const removeItem = item => {
	// 	setCart([...cart.filter((obj) => obj.id !== item)])
		
	// }

	return (
		<div className="App">
			{/* <Products props = {products, addItem}/>
			<ShoppingCart props= {{cart, removeItem}} />
			<Navigation  /> */}

			{/* Routes */}
			<Navigation  cart={props.cart}/> 
			<Route exact path="/">
				<ProductList products={props.products} addItem={props.addItem} />
			</Route>

			<Route path="/cart">
				<ShoppingCart  cart= {props.cart} removeItem={props.removeItem} />
			</Route>			
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
	products: state.products,
	cart: state.cart
  }
};

export default connect(mapStateToProps, {addItem, removeItem})(App);

