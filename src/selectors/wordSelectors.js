export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, num = 1000) => {
  return getWords(state).slice(0, num);
};