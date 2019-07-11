import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import HotelList from '../hotel/HotelList'

const styles = theme => ({
    layoutRoot: {}
});

class Home extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                
                content={
                    <div className="p-24">
                        <br/>
                        <HotelList />
                    </div>
                }
            />
        )
    }
}

export default withStyles(styles, {withTheme: true})(Home);