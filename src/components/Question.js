import React from 'react';
// import PropTypes from 'prop-types';

function Question(props) {

  // if the user can select multiple items display a next button
  let nextPrompt = props.multi || null;
  const NextButton = (
    nextPrompt ? 
      <button 
        className="nextButton"
        onClick={props.doneWithQuestion}>
        {nextPrompt}
      </button>
    : null
  )

  return (
    <h4 className="question">
      {props.question}
      {NextButton}
    </h4>
  );

}

Question.propTypes = {
  question: React.PropTypes.string.isRequired
};

export default Question;
