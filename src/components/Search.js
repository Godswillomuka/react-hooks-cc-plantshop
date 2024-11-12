import React from "react";

function Search({ searchTerm, setSearchTerm }) {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search" className="sr-only">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchTerm}
        onChange={handleSearchChange}
        aria-label="Search for plants"
      />
    </div>
  );
}

export default Search;