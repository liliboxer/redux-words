export const LOAD_ALL_WORDS = 'LOAD_ALL_WORDS';

export const loadAllWords = dictionary => ({
  type: LOAD_ALL_WORDS,
  payload: dictionary
});
