import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchForm from '../../words/SearchForm';
import { getSearchTerm } from '../../../selectors/wordSelectors';
import { updateSearchTerm } from '../../../actions/wordActions';


class SearchWordsContainer extends Component {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object
  }

  componentDidMount() {
  }

  render() {
    return (
      <>
        <SearchForm {...this.props}/>
      </>
    );
  }
}

const mapStateToProps = state =>({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    props.history.push(`/?searchTerm=${target.value}`);
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchWordsContainer);
