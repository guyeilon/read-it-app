import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid, Paper, Container, Typography } from '@material-ui/core';

import FavBookCard from '../components/FavBookCard';
import { getBooks } from '../actions/books';
import { deleteBook } from '../actions/books';

export default function FavBooks() {
  const dispatch = useDispatch();

  const [savedBooks, setSavedBook] = useState([]);
  const books = useSelector(state => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleDelete = book => {
    const unfavBookId = book.google_id;
    console.log(book);
    const items = JSON.parse(localStorage.getItem('Books'));
    const newItems = items.map(item =>
      item.id === unfavBookId ? { ...item, favorite: false } : item
    );
    localStorage.setItem('Books', JSON.stringify(newItems));

    console.log(items);
    dispatch(deleteBook(book._id));
  };

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
      >
        Your favorites books
      </Typography>
      <Grid container spacing={3}>
        {books.map(book => (
          <Grid item key={book._id} xs={12} md={6} lg={4}>
            <FavBookCard book={book} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
