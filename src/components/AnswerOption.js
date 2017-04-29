import React from 'react';
// import PropTypes from 'prop-types';

function AnswerOption(props) {

  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={props.answerType}>
        {props.answerContent}
        <p /><img src={props.answerImageSrc} alt={props.answer} height="60%" width="60%" />
      </label>
    </li>
  );

}

AnswerOption.propTypes = {
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answerImageSrc: React.PropTypes.string,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
