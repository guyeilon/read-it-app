import axios from 'axios';

const url = 'https://readit-app-proj.herokuapp.com/books';

export const fetchBooks = () => axios.get(url);
export const saveFavBook = newBook => axios.post(url, newBook);
export const deleteBook = id => axios.delete(`${url}/${id}`);
export const likePost = id => axios.patch(`${url}/${id}/likePost`);
