import React from 'react';

const ProductPrice = ({ price, discount }) => {
	const formatPrice = (price) => {
		const formatter = new Intl.NumberFormat('nb-NO', {
			style: 'currency',
			currency: 'NOK',
		});
		return formatter.format(price);
	};

	const discountPrice = (price, discountPercent) => {
		const newPrice = price - (price * discountPercent) / 100;
		return formatPrice(newPrice);
	};

	return (
		<h4 className="product-price">
			{discount !== 0 ? (
				<>
					<span className="product-price__before">Before: {formatPrice(price)}</span>
					{discountPrice(price, discount)}
				</>
			) : (
				formatPrice(price)
			)}
		</h4>
	);
};

export default ProductPrice;
