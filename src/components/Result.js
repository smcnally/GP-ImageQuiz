import React from 'react';
// import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import quizQuestions from '../api/quizQuestions';

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
          Your <strong>{quizQuestions[0].scoreLabel}</strong> is <strong>{props.quizResult}</strong>!
        </p>
         <p />
         <img src={props.resultBioSuccessImg} alt="Extroverting Success" />
        <p className="result-bio">
          {props.resultBio}
         <p /><p className="result-bio">
          {props.resultBioStrains}
        </p>
          <ul>
          <li>
          <a href={quizQuestions[0].relatedURL0} target="_blank">{quizQuestions[0].relatedURLLabel0}</a>
          </li>
          <li>
          <a href={quizQuestions[0].relatedURL1} target="_blank">{quizQuestions[0].relatedURLLabel1}</a>
          </li>
          <li>
          <a href={quizQuestions[0].relatedURL2} target="_blank">{quizQuestions[0].relatedURLLabel2}</a>
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
