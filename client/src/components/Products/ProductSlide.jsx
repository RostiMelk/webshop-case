import React from 'react';
import Product from './Product';

const ProductSlide = ({
	duration,
	id,
	name,
	image,
	description,
	price,
	discount,
	handleAddToCart,
}) => {
	return (
		<div
			className="product-slide"
			style={{
				backgroundImage: `url("${image}")`,
				animationDuration: `${duration}ms`,
			}}
		>
			<Product
				id={id}
				name={name}
				description={description}
				price={price}
				discount={discount}
				handleAddToCart={handleAddToCart}
			/>
		</div>
	);
};

export default ProductSlide;
