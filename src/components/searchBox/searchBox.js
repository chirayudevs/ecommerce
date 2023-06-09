import React from 'react';

const SearchBox = ({searchHandler}) => {

  const handleSearchInput = (e) => {
    searchHandler(e.target.value);
  }

  return (
    <form>
      <input
        type="text"
        placeholder="search..."
        onChange={handleSearchInput}
      />
    </form>
  )
};

export default SearchBox;
