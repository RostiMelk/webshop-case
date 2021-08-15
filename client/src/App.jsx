import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Navbar, ProductsSlider, Products, Search } from './components';
import { useDebouncedEffect, useLocalStorage } from './hooks';
import './assets/scss/main.scss';

const App = () => {
	const [page, setPage] = useState(1);
	const [search, setSearch] = useState('');
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [totalQuantity, setTotalQuantity] = useLocalStorage('cart', []);
	const [cart, setCart] = useLocalStorage('cart', []);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const params = { _page: page, _limit: 20, q: search };
			const response = await axios.get('http://localhost:8080/products', { params });
			const newProductsArray = products.concat(response.data);
			setProducts(newProductsArray);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	const resetProducts = () => {
		setPage(1);
		setProducts([]);
	};

	const handleLoadMore = () => {
		if (loading) return;
		if (
			window.innerHeight + document.documentElement.scrollTop !==
			document.scrollingElement.scrollHeight
		)
			return;
		const nextPage = page + 1;
		setPage(nextPage);
		fetchProducts();
	};

	const handleAddToCart = (id) => {
		let newCart = cart;
		const index = cart.findIndex((obj) => obj.id === id);
		if (index > -1) {
			newCart[index].quantity = cart[index].quantity + 1;
		} else {
			newCart.push({ id, quantity: 1 });
		}
		setCart(newCart);
	};

	const getTotalItemsInCart = () => {
		return cart.reduce((total, item) => item.quantity + total, 0);
	};

	/**
	 * Initial product load
	 */
	useEffect(() => {
		fetchProducts();
	}, []);

	/**
	 * Handle search
	 * Debounce the requests
	 */
	useDebouncedEffect(
		() => {
			resetProducts();
			fetchProducts();
		},
		[search],
		500
	);

	/**
	 * Handle Load more
	 */
	useEffect(() => {
		window.addEventListener('scroll', handleLoadMore);
		return () => {
			window.removeEventListener('scroll', handleLoadMore);
		};
	}, [loading]);

	return (
		<>
			<Navbar totalInCart={() => getTotalItemsInCart()} />
			<ProductsSlider handleAddToCart={handleAddToCart} />

			<div className="products-wrapper">
				<Search
					placeholder="Search through our products ..."
					value={search}
					onChangeValue={setSearch}
				/>
				<Products
					products={products}
					loading={loading}
					handleAddToCart={handleAddToCart}
				/>
			</div>
		</>
	);
};

export default App;
