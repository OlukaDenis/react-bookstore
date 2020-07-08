const Actions = (() => {
  const CREATE_BOOK = 'CREATE_BOOK';
  const REMOVE_BOOK = 'REMOVE_BOOK';

  const createBook = book => ({
    type: CREATE_BOOK,
    book,
  });

  const removeBook = book => ({
    type: REMOVE_BOOK,
    payload: book,
  });

  return {
    createBook,
    removeBook,
    CREATE_BOOK,
    REMOVE_BOOK,
  };
})();

export default Actions;
