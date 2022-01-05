import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import MyCalendar from './MyCalendar';

function Result(props) {
  // 200327 - dont render empty props: Sponsor, Relateds, scoreLabel, successImage, sponsorTag
  let scoreLabel = props.scoreLabel;
  let successImg = props.successImg;
  let bio = props.bio;
  let strains = props.strains;
  let relatedURLLabel0 = props.relatedURLLabel0;
  let relatedURLLabel1 = props.relatedURLLabel1;
  let relatedURLLabel2 = props.relatedURLLabel2;
  let relatedURLLabel3 = props.relatedURLLabel3;
  let sponsorship = props.sponsorURL;

  if (scoreLabel) {
    scoreLabel = <p className="result-answer" dangerouslySetInnerHTML={{__html: props.scoreLabel}} />;
  } else {
    scoreLabel = '';
  }
  if (successImg) {
    successImg = <img className="" src={props.successImg} alt="Success" />;
  } else {
    successImg = '';
  }
  if (bio) {
    bio = <p className="result-bio" dangerouslySetInnerHTML={{__html: props.bio}} />;
  } else {
    bio = '';
  }
  if (strains) {
    strains = <p className="result-bio" dangerouslySetInnerHTML={{__html: props.strains}} />;
  } else {
    strains = '';
  }
  if (relatedURLLabel0) {
    relatedURLLabel0 = <h4><a href={props.relatedURL0} target="_blank">{props.relatedURLLabel0}</a></h4>;
  } else {
    relatedURLLabel0 = '';
  }
  if (relatedURLLabel1) {
    relatedURLLabel1 = <h4><a href={props.relatedURL1} target="_blank">{props.relatedURLLabel1}</a></h4>;
  } else {
    relatedURLLabel1 = '';
  }
  if (relatedURLLabel2) {
    relatedURLLabel2 = <h4><a href={props.relatedURL2} target="_blank">{props.relatedURLLabel2}</a></h4>;
  } else {
    relatedURLLabel2 = '';
  }
  if (relatedURLLabel3) {
    relatedURLLabel3 = <h4><a href={props.relatedURL3} target="_blank">{props.relatedURLLabel3}</a></h4>;
  } else {
    relatedURLLabel3 = '';
  }
  if (sponsorship) {
    sponsorship = <p className="result-sponsor"><a href={props.sponsorURL} target="_blank"><img src={props.sponsorImg} alt="sponsor" /></a><p className="result-sponsor" dangerouslySetInnerHTML={{__html: props.sponsorTagline}} /></p>;
  } else {
    sponsorship = '';
  }

  let Calendar;
  if(props.successCalendar !== 0 && props.successCalendar !== "0" && typeof props.successCalendar !== "undefined"){
    let currDate = new Date();
    let tomorrowDate = new Date(currDate.setDate(currDate.getDate() + 1)); 
    let startDate = tomorrowDate.setHours(3, 0, 0, 0);
    let endDate = tomorrowDate.setHours(3, 15, 0, 0);
    let event = {
      title: props.scoreLabel.replace(/(<([^>]+)>)/ig,""),
      description: props.bio +'\n'+ props.strains + " " + 
      props.relatedURLLabel1 + ", " + props.relatedURLLabel2 + ", " + props.relatedURLLabel3,
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
      className="container result constrain-300x600"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div className="result-container">
        {scoreLabel}
        <p>
        {successImg}
        </p>
        {bio}
        {strains}
        {relatedURLLabel0}
        {relatedURLLabel1}
        {relatedURLLabel2}
        {relatedURLLabel3}
        {sponsorship}
        {Calendar}
      </div>
    </ReactCSSTransitionGroup>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
