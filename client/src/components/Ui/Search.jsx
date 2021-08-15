import React from 'react';
import Icon from './Icon';

const Search = ({ placeholder, value, onChangeValue }) => {
	return (
		<div className="grid search">
			<Icon icon="search" />
			<input
				type="search"
				className="search__input"
				placeholder={placeholder}
				value={value}
				onChange={(e) => onChangeValue(e.target.value)}
			/>
		</div>
	);
};

export default Search;
