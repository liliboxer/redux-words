import { connect } from 'react-redux';
import SearchForm from '../../words/SearchForm';
import { getSearchTerm } from '../../../selectors/wordSelectors';
import { updateSearchTerm } from '../../../actions/wordActions';

const mapStateToProps = state =>({
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateSearchTerm(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
