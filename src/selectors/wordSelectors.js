export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, num = 1000) => {
  return getWords(state).slice(0, num);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getTopWordsByTerm = (state, count) => {
  const searchTerm = getSearchTerm(state);
  return getFirstWords(state, count).filter(word => {
    return word.includes(searchTerm);
  });
};
