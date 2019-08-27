import words from '../fixtures/words.json';

const initialState = {
  dictionary: [...words]
};

export default function wordsReducer(state = initialState, action) {
  return state;
}
