import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import * as Actions from './store/actions';
import {useDispatch} from 'react-redux';
const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 851,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

 function HotelCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div>
    <Card className={classes.card}>
        <CardMedia
        className={classes.cover}
        image={props.image}
        title={props.title}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {props.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
          {props.text}
          </Typography>
          <Typography variant="h6" color="primary">
          {props.prix} prix/nuit
          </Typography>
        </CardContent>
        <div className={classes.controls}>
        <Button size="small"  color="primary"
          onClick={ev => dispatch(Actions.ajouterNuits(props.id))}>
          Ajouter au panier
        </Button>
        </div>
      </div>
      
    </Card>
    <br />
    
    </div>
  );
}
HotelCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  titleText: PropTypes.string,
  text: PropTypes.string,
  prix: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
};
export default HotelCard;

