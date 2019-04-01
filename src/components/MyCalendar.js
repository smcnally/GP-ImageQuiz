import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCalendar from 'react-add-to-calendar';
import 'react-add-to-calendar/dist/react-add-to-calendar.min.css';

class MyCalendar extends Component {
    
    render() {
        const Providers = [ { apple: 'iCal' }, { google: 'Google' }];
        return (
            <div className="addToCal">
               <AddToCalendar event={this.props.event} listItems={Providers} buttonLabel={this.props.label}/> 
            </div>
            
        );
    };
}

MyCalendar.propTypes = {
    event: PropTypes.object.isRequired,
};

export default MyCalendar;