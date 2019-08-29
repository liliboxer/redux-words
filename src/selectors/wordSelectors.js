export const getWords = state => state.words.dictionary;

export const getFirstWords = (state, num = 1000) => {
  return getWords(state).slice(0, num);
};

export const getSearchTerm = state => state.words.searchTerm;

export const getTopWordsByTerm = (state, count = 1000) => {
  const searchTerm = getSearchTerm(state);
  return getWords(state).filter(word => {
    return word.includes(searchTerm);
  }).slice(0, count);
};
