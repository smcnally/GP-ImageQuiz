import React from 'react';
// import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
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
      <div className="result-container">
        <p className="result-answer">
          Your Cannabis Industry IQ is <strong>{props.quizResult}</strong>!
        </p>
         <p />
         <img src={props.resultBioSuccessImg} alt="ExtrovertingSuccess" />
        <p className="result-bio">
          {props.resultBio}
          </p><p className="result-bio">
         <p />          
          <ul>
          <li>
          <a href="https://extroverting.com/2017/06/04/marketing-business-and-retail-opportunities/" target="_blank">Marketing, Retail, & Business</a>
          </li>
          <li>
          <a href="https://extroverting.com/2017/06/04/computer-data-science-opportunities-in-california/" target="_blank">Computer & Data Science</a>
          </li>
          </ul>
        </p>
        <p className="result-sponsor">[Sponsor]</p>
        <a href={props.resultBioSponsorURL} target="_blank">
       <img src={props.resultBioSponsorImg} alt="sponsor" />
       </a>
       <p className="result-sponsor">
       {props.resultBioSponsorTagline}
       </p>
        </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
