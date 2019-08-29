import React from 'react';
import SearchWords from '../containers/words/SearchWords';
import TopWords from '../containers/words/TopWords';
import PropTypes from 'prop-types';

function Searchable({ match, history }) {
  return (
    <>
      <SearchWords history={history}/>
      <TopWords count={match.params.count}/>
    </>
  );
}

Searchable.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Searchable;
