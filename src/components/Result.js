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
          You are primarily interested in <strong>{props.quizResult}</strong> products.
        </p>
         <p /><img src="https://meanbusiness.com/shepherd/src/svg/gifs/ColoredSmoke.gif" height="100" width="100%" alt="hmbldt" />
        <p className="result-bio">
          {props.resultBio}
          </p><p className="result-bio">
          <strong>{props.quizResult}</strong> strains include: {props.resultBioStrains}
        </p>
        <p className="result-sponsor">[Sponsor]</p>
        <img src="https://meanbusiness.com/files/2017/05/Palmetto-Harmony-half-product-shoot-e1494724317825.jpg" />
        </div>
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
