import React from 'react';
import NavbarItem from './NavbarItem';

const Navbar = ({ totalInCart }) => {
	return (
		<header className="navbar">
			<div className="grid navbar__inner">
				<h1 className="navbar__logo">Totally Legit Webshop</h1>
				<nav className="navbar__nav">
					<NavbarItem label="Login" icon="person" />
					<NavbarItem label="Cart" icon="shopping_cart" notification={totalInCart()} />
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
