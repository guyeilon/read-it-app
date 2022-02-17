import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, Paper, Container } from '@material-ui/core';

import BookCard from '../components/BookCard';
import Search from '../components/Search';

import { saveFavBook } from '../actions/books';
import Masonry from 'react-masonry-css';

export default function Books() {
  const _isMounted = useRef(false);

  const [booksData, setBooksData] = useState(
    localStorage.getItem('Books')
      ? JSON.parse(localStorage.getItem('Books'))
      : []
  );

  const [favBookData, setfavBookData] = useState({
    title: '',
    description: '',
    authors: '',
    image: '',
    google_id: '',
    favorite: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
    if (_isMounted.current) {
      dispatch(saveFavBook(favBookData));
      console.log(favBookData);
    }
  }, [favBookData]);

  useEffect(() => {
    _isMounted.current = true;

    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleAddToFavorites = async book => {
    const favBook = book;
    favBook.favorite = true;

    setfavBookData({
      title: favBook.volumeInfo.title,
      description: favBook.volumeInfo.description,
      authors: favBook.volumeInfo.authors,
      image: favBook.volumeInfo.imageLinks
        ? favBook.volumeInfo.imageLinks.thumbnail
        : null,
      google_id: favBook.id,
      favorite: favBook.favorite,
    });
    console.log(booksData);
    localStorage.setItem('Books', JSON.stringify(booksData));
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Search setBooksData={setBooksData} />
      <Masonry
        breakpointCols={breakpoints}
        className='my-masonry-grid'
        columnClassName='my-masonry-grid_column'
      >
        {booksData &&
          booksData.map(book => (
            <div item key={book.id}>
              <BookCard
                book={book}
                handleAddToFavorites={handleAddToFavorites}
              />
            </div>
          ))}
      </Masonry>
    </Container>
  );
}
