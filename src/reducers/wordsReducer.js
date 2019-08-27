import { LOAD_ALL_WORDS } from '../actions/wordActions';

const initialState = {
  dictionary: []
};

export default function wordsReducer(state = initialState, action) {
  switch(action.type) {
    case LOAD_ALL_WORDS:
      return { ...state, dictionary: [...state.dictionary, action.payload] };
    default:
      return state;
  }
}
