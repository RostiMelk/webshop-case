import React from 'react';
import Product from './Product';
import Loading from '../Ui/Loading';

const Products = ({ products, loading, handleAddToCart }) => {
	return (
		<main className="products">
			<div className="grid products__grid">
				{products.map((product, index) => (
					<Product
						key={`product-${index}`}
						id={product.id}
						name={product.name}
						image={product.defaultImage}
						description={product.description}
						price={product.price}
						discount={product.discount}
						handleAddToCart={handleAddToCart}
					/>
				))}
			</div>
			{loading && <Loading />}
		</main>
	);
};

export default Products;
