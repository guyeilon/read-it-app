import { FETCH_ALL, SAVE, UPDATE, DELETE } from '../constants/actionTypes';
import * as api from '../api';

// Action Creators

export const getBooks = () => async dispatch => {
  try {
    const { data } = await api.fetchBooks();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const saveFavBook = book => async dispatch => {
  try {
    const { data } = await api.saveFavBook(book);
    console.log(data);
    dispatch({ type: SAVE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteBook = id => async dispatch => {
  try {
    await api.deleteBook(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
