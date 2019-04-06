import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MyCalendar from './MyCalendar';

function Result(props) {
  let Calendar;
  if(props.successCalendar !== 0 && props.successCalendar !== "0" && typeof props.successCalendar !== "undefined"){
    let currDate = new Date();
    let tomorrowDate = new Date(currDate.setDate(currDate.getDate() + 1)); 
    let startDate = tomorrowDate.setHours(3, 0, 0, 0);
    let endDate = tomorrowDate.setHours(3, 15, 0, 0);
    let event = {
      title: props.scoreLabel.replace(/(<([^>]+)>)/ig,""),
      description: props.bio,
      location: 'Everywhere',
      startTime: startDate,
      endTime: endDate
    }
    Calendar = <MyCalendar event={event} label={props.calendarLabel}/>
  }else{
    Calendar = '';
  }

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="constrain-300x600 result-container">
        {/**
        <p className="result-answer" dangerouslySetInnerHTML={{__html: props.scoreLabel}} />
        <p>
         <img className="constrain-300x600" src={props.successImg} alt="Success" />
        </p>
        */}
        <p className="result-bio" dangerouslySetInnerHTML={{__html: props.bio}} />
        <p className="result-bio" dangerouslySetInnerHTML={{__html: props.strains}} />
        <h4>
          <a href={props.relatedURL0} target="_blank">{props.relatedURLLabel0}</a>
        </h4>
        <h4>
          <a href={props.relatedURL1} target="_blank">{props.relatedURLLabel1}</a>
        </h4>
        <h4>
          <a href={props.relatedURL2} target="_blank">{props.relatedURLLabel2}</a>
        </h4>
        <h4>
          <a href={props.relatedURL3} target="_blank">{props.relatedURLLabel3}</a>
        </h4>
        {/**
        <p className="result-sponsor">[Sponsor]</p>
        */}
        <p className="result-sponsor">
          <a href={props.sponsorURL} target="_blank">
            <img src={props.sponsorImg} alt="sponsor" />
          </a>
        </p>
        <p className="result-sponsor" dangerouslySetInnerHTML={{__html: props.sponsorTagline}} />
        
        {Calendar}

      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
