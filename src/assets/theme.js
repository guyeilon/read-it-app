import { createTheme } from '@mui/material/styles';

const overrides = {
  MuiSvgIcon: {
    root: {
      'body[dir=rtl] &': {
        transform: 'scaleX(-1)',
      },
    },
  },
};

const theme = createTheme({
  breakpoints: {
    sm: 600,
  },
});

const ltrTheme = createTheme({ direction: 'ltr' });
const rtlTheme = createTheme({ direction: 'rtl', overrides });

export { ltrTheme, rtlTheme, theme };
