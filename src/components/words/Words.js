import React from 'react';
import PropTypes from 'prop-types';

function Words({ words }) {
  const wordsList = words.map((word, i) => (
    <li key={i}>
      <h4>{word}</h4>
    </li>
  ));
  return <ul>{wordsList}</ul>;
}

Words.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Words;
