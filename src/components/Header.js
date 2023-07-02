import React from 'react';

const Header = ({ setDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() => setDarkMode((previousVal) => !previousVal)}
				className='save'
			>
				Toggle Mode
			</button>
		</div>
	);
};

export default Header;
