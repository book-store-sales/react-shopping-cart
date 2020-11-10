import React from 'react';


// Components
import Product from './Product';


const ProductList =({products, addItem}) => {
	// const { products, addItem };
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
				 
			))}
		</div>
	);
};

export default ProductList;
