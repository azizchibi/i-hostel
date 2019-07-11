import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

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
    width: 120,
  },
  font : {
    fontSize: 13,
  }

}));

 function Panier(props) {
  const classes = useStyles();

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
          
          <Typography  className={classes.font} variant="h6" color="primary">
          <div>{props.prix} prix/nuit</div>
          <div> nombre de nuits : {props.nbrNuits} </div>
          <div>Total : {props.nbrNuits * props.prix } </div>
          </Typography>
         
        </CardContent>
      </div>
      
    </Card>
    <br />
    
    </div>
  );
}
Panier.propTypes = {
  image: PropTypes.string,
  nbrNuits: PropTypes.number,
  prix: PropTypes.number.isRequired
};
export default Panier;

