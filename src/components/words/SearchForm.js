import React from 'react';
import PropTypes from 'prop-types';

function SearchForm({ searchTerm, handleChange }) {
  return (
    <input type="text" value={searchTerm} onChange={handleChange} name={'searchTerm'} placeholder="search for a word"></input>
  );
}

SearchForm.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default SearchForm;
