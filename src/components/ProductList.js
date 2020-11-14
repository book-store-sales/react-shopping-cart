import React, {useState} from 'react';


// Components
import Product from './Product';


const ProductList =({products, addItem}) => {
<<<<<<< HEAD
	const[data, setData] = useState(products)
	const [search, setSearch] = useState(' ');
	const [sort, setSortBy] = useState('')
=======
	const [search, setSearch] = useState('');
>>>>>>> f6e81d6b964752583cceb08c25930ec5ab4785dc
	const onChange = (e) => {
		const {  value, type } = e.target;
		( type === "text") ? setSearch( value ) : setSortBy(value);
		console.log(sort)
		if (sort === "A-Z"){
			setData(products.sort((a, b) => a.title.localeCompare(b.title)))
		} else if (sort === "priceLowHigh"){
			setData(products.sort((a, b) => a.price - b.price))
		} else if (sort === "priceHighLow"){
			setData(products.sort((a, b) => b.price - a.price))
		}
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
			<label for="order">Sort By:</label>
			&nbsp;
			<select name="order" onChange={onChange}  >
			<option value="A-Z">A-Z</option>
			<option value="priceHighLow">Price (High to Low)</option>
			<option value="priceLowHigh">Price (Low to High)</option>
			</select>
		</div>
		<div className="products-container">
			{data.filter((item) => item.title.toLowerCase().includes(makeLowerCase(search)))
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
