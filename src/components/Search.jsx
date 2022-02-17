import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Typography, Button, Container, TextField } from '@material-ui/core';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles({
  field: {
    marginTop: 0,
    marginBottom: 20,
    display: 'block',
  },
});

function Search({ setBooksData }) {
  const books = useSelector(state => state.books);

  const classes = useStyles();
  const [search, setSearch] = useState('');

  const fatchDate = async search => {
    try {
      const { data } = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCPRdmMwdKNYW6uNNHQRSEOZpEKdRa8uUQ`
      );
      const booksData = data.items;
      const modifyBooksData = booksData.map(book => ({
        ...book,
        favorite: false,
      }));

      if (books.length > 0) {
        modifyBooksData.forEach(modifyBook => {
          books.map(book => {
            if (book.google_id === modifyBook.id) {
              modifyBook.favorite = true;
            }
          });
        });
      }
      console.log(modifyBooksData);
      localStorage.setItem('Books', JSON.stringify(modifyBooksData));
      setBooksData(modifyBooksData);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    fatchDate(search);
  };

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        gutterBottom
        color='textSecondary'
      >
        Explore your favorites books
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={e => setSearch(e.target.value)}
          className={classes.field}
          label='Search'
          variant='outlined'
          fullWidth
          required
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Search;
