//components/SearchComponent.js
import React from 'react';

function SearchComponent({ searchCourse, courseSearchUserFunction }) {
	return (
		<header className="App-header">
			<h1>مول كويك رسبونس التجاري</h1>
			<div className="search-bar">
				<input
					type="text"
					placeholder="البحث"
					value={searchCourse}
					onChange={courseSearchUserFunction}
				/>
			</div>
		</header>
	);
}

export default SearchComponent;
