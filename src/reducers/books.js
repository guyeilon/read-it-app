import { FETCH_ALL, SAVE, DELETE } from '../constants/actionTypes';
import { toast } from 'react-toastify';

export default (books = [], action) => {
  switch (action.type) {
    case DELETE:
      toast.success('Succesfully deleted...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return books.filter(book => book._id !== action.payload);
    case FETCH_ALL:
      return action.payload;

    case SAVE:
      toast.success('Succesfully added...', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      return [...books, action.payload];
    default:
      return books;
  }
};
