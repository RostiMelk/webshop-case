import React from 'react';
import classNames from 'classnames';
import Icon from '../Ui/Icon';

const NavbarItem = ({ children, label, link, icon, notification }) => {
	const NavbarItemClasses = classNames('navbar-item', {
		'navbar-item--has-icon': icon,
		'navbar-item--has-text': label || children,
	});

	return (
		<a href={link} className={NavbarItemClasses} target="_self">
			{notification && notification > 0 && (
				<span className="navbar-item__notification">{notification}</span>
			)}
			{icon && <Icon icon={icon} />}
			{label ? label : children}
		</a>
	);
};

export default NavbarItem;
