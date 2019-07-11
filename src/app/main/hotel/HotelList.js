import React, {useEffect} from 'react';
import {FusePageSimple} from '@fuse';
import withReducer from 'app/store/withReducer';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import reducer from './store/reducers';
import  Hotel  from './Hotel';
import SidebarContent from './SidebarContent';
import Info from './Info';

const useStyles = makeStyles(theme => ({
    container: {
    paddingRight: 15,
    paddingLeft: 15,

    /* Et on centre */
    marginRight: 15,
    marginLeft: 15
      },

  }));
function HotelList(props)
{
    const classes = useStyles();
    const dispatch = useDispatch();
    const hotels = useSelector(({hotelsApp}) => hotelsApp.hotels.data);
    console.log(hotels)
    useEffect(() => {
        dispatch(Actions.getHotels());
    }, [dispatch]);


    function handleClick(item)
    {
       // props.history.push('/administration/profiles/' + item.id );
    }

    return (
        <div className={classes.container}>
        <FusePageSimple
        classes={{
            contentWrapper     : "p-0 sm:p-24 pb-80 sm:pb-80 h-full",
            rightSidebar       : "w-512 border-0",
            header             : "min-h-72 h-72 sm:h-136 sm:min-h-136", 
        }}
        
        content={
            <div>
                    <div  className="-striped -highlight h-full sm:rounded-16 overflow-hidden">
                    {hotels.map((item) => (
                        <Hotel id={item.id}  key={item.id} image={require(`../../static/${item.image}.jpg`)} 
                            title={item.title} 
                            titleText={item.title} 
                            text= {item.text}
                            prix= {item.prix}
                            />
                        ))}
                    </div>
                    <div>
                    
                    </div>
            </div>
        }
        rightSidebarContent={
            <SidebarContent/>
        }
        innerScroll 
        />
        <Info />
    </div>
)}

export default withReducer('hotelsApp', reducer)(HotelList);
