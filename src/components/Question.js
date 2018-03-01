import React from 'react';
// import PropTypes from 'prop-types';

function Question(props) {

  // if the user can select multiple items display a next button
  let nextPrompt = props.multi || null;
  let nextButton = null;

  if (nextPrompt) {
    nextButton = (
      <button 
        className="nextButton"
        onClick={props.doneWithQuestion}>
        {nextPrompt}
      </button>
    );
  }

  return (
    <h4 className="question">
      <span>{props.question}</span>
      {nextButton}
    </h4>
  );

}

Question.propTypes = {
  question: React.PropTypes.string.isRequired
};

export default Question;
