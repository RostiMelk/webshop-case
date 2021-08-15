import React, { usestate, useEffect } from 'react';
import ProductPrice from './ProductPrice';
import Button from '../Ui/Button';

const Product = ({ id, name, image, description, price, discount, handleAddToCart }) => {
	const trimDescription = (text) => {
		const max = 70;
		if (text.length <= max) return text;
		const trimmedText = text.substring(0, max) + '...';
		return trimmedText;
	};

	const onAddToCart = (e) => {
		e.preventDefault();
		handleAddToCart(id);
	};

	return (
		<article className="product">
			<a href="" className="product__inner" title={name}>
				<div>
					{image && (
						<img
							src={image}
							className="product__image"
							alt={`Product image for: ${name}`}
						/>
					)}
					<h3 className="product__name">{name}</h3>
					<p className="product__description">{trimDescription(description)}</p>
				</div>
				<div className="product__footer">
					<ProductPrice price={price} discount={discount} />
					<Button icon="add_shopping_cart" onClick={(e) => onAddToCart(e)}></Button>
				</div>
			</a>
			{discount !== 0 ? <span className="product__discount">-{discount}%</span> : ''}
		</article>
	);
};

export default Product;
