import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCalendar from 'react-add-to-calendar';

class MyCalendar extends Component {
    
    render() {
        const Providers = [ { apple: 'iCal' }, { google: 'Google' }];
        return (
            <div className="addToCal">
               <AddToCalendar event={this.props.event} listItems={Providers} buttonLabel="Add To Calendar"/> 
            </div>
            
        );
    };
}

MyCalendar.propTypes = {
    event: PropTypes.object.isRequired,
};

export default MyCalendar;