import React from 'react';
// import { MdSearch } from 'react-icons/md';

const Search = ({ setSearchText }) => {
	return (
		<div className='search'>
			<span className='search-icons'><i className="fa-solid fa-magnifying-glass"></i></span>
			<input
				onChange={(event) =>
					setSearchText(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
