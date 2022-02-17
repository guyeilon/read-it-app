import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Container from '@material-ui/core/Container';

import MoreVertOutlined from '@material-ui/icons/MoreVertOutlined';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 350,
  },
  media: {
    height: 250,
    width: 175,
    margin: 'auto',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  booksContainer: {
    marginTop: 30,
  },
}));

function FavBookCard({ book, handleDelete }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container className={classes.booksContainer}>
      <Card className={classes.root} elevation={3}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertOutlined />
            </IconButton>
          }
          title={book.title}
        />
        <CardMedia
          component='img'
          className={classes.media}
          image={book.image && book.image}
          title={book.title}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {expanded
              ? book.description
              : book.description && book.description.length > 250
              ? `${book.description.substring(0, 250)}...`
              : book.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton
            aria-label='delete book'
            onClick={() => handleDelete(book)}
          >
            <DeleteOutlined />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit />
      </Card>
    </Container>
  );
}

export default FavBookCard;
