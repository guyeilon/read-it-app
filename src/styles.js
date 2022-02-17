import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  appBar: {
    '&&': {
      borderRadius: 15,
      margin: '30px 0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  heading: {
    color: '#f50057',
    margin: 0,
  },
  subtitle: {
    marginTop: 0,
  },
  image: {
    marginLeft: '15px',
  },
  container: {
    '&&': {
      flexGrow: 1,
      // width: '100vw',
      height: '100vh',
      spacing: 0,
      justify: 'space-around',
    },
  },
}));
