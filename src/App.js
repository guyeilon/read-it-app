import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import FavBooks from './pages/FavBooks';

import { createTheme, ThemeProvider } from '@material-ui/core';
import Layout from './components/Layout';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

function App() {
  const [currentId, setCurrentId] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ToastContainer />
        <Layout>
          <Routes>
            <Route
              path='/'
              exact
              element={
                <Books currentId={currentId} setCurrentId={setCurrentId} />
              }
            />
            <Route
              path='/favoritesBooks'
              element={
                <FavBooks currentId={currentId} setCurrentId={setCurrentId} />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
