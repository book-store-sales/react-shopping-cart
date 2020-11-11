import React, {useState} from 'react';


// Components
import Product from './Product';


const ProductList =({products, addItem}) => {
	const [search, setSearch] = useState('');
	const onChange = (e) => {
		setSearch( e.target.value );
	  };
	function makeLowerCase(value) {
		return value.toString().toLowerCase();
	  };
	return (
		<>
		<div className="searchbar">
			<label>Search:</label>
			&nbsp;
			<input type="text" name="search" value={search} onChange={onChange}/>
			&nbsp;
			&nbsp;
			&nbsp;
			<label for="cars">Sort By:</label>
			&nbsp;
			<select name="cars" >
			<option value="A-Z">A-Z</option>
			<option value="priceHighLow">Price (High to Low)</option>
			<option value="priceLowHigh">Price (Low to High)</option>
			</select>
		</div>
		<div className="products-container">
			{products.filter((item) => item.title.toLowerCase().includes(makeLowerCase(search)))
					 .map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
				 
			))}
		</div>
		</>
	);
};

export default ProductList;
