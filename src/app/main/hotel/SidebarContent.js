import React, {useEffect} from 'react';
import {Button, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import  Panier  from './Panier';
import * as Actions from './store/actions';

const useStyles = makeStyles(theme => ({
    listItem: {
        color              : 'inherit!important',
        textDecoration     : 'none!important',
        height             : 40,
        width              : 'calc(100% - 20px)',
        maxWidth           : 300,
        borderRadius       : '0 20px 20px 0',
        paddingLeft        : 24,
        paddingRight       : 12,
        '&.active'         : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText + '!important',
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {
            marginRight: 16
        }
    }
}));



function SidebarContent(props)
{
    const hotels = useSelector(({hotelsApp}) => hotelsApp.hotels.panier);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getPanier());
    }, [dispatch]);

    return (
        <div className="p-0 lg:p-24 lg:pr-4">
               
            <FuseAnimate animation="transition.slideRightIn" delay={200}>
                <Paper className="rounded-0 shadow-none lg:rounded-8 lg:shadow-1">
                <h2>Panier</h2>
                    <div  className="-striped -highlight h-full sm:rounded-16 overflow-hidden">
                    {hotels.map((item) => (
                        <Panier key={item.id} image={require(`../../static/${item.image}.jpg`)} 
                            prix= {item.prix} nbrNuits={item.nbrNuits}
                            />
                        ))}
                    </div>
                    
                <h2>Total: { hotels.reduce((total, client) => { return total + client.total}, 0)}</h2>
                <br/>
                <br />{hotels.reduce((total, client) => { return total + client.total}, 0)>0 ? ( 
                    <Button size="small"  color="primary"
                    onClick={ev => dispatch(Actions.openNewInfoDialog())}>
                    Commander
                </Button>
                ): ""}
                
                </Paper>
            </FuseAnimate>
        </div>
    );
}

export default SidebarContent;
