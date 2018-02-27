import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Display one choice within a question
// Currently expect only one option to be selected

// TODO permit multiple options to be selected
//      and implement something for user to click to indicate they've selected
//      what they wanted and can move on

class AnswerOption extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // TODO refactor to support selecting multiple items
  // and toggling on/off
  handleClick() {
    let el = document.getElementById(this.props.id);
    if ( el ) {
      console.log(el);
      el.checked = true;

      // TODO only call when we're sure the question is done
      // theoretically check if done, or handle this elsewhere such as a Next button
      this.props.onQuestionAnswered(el.value);
    }
  }

  // TODO use a generic input or no input at all
  render() {
    return (
      <li className="answerOption">
        <div className="answerOptionContainer">
          <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            checked={this.props.type === this.props.answer}
            id={this.props.id}
            value={this.props.type}
            disabled={this.props.answer}
            onChange={this.props.onQuestionAnswered}
          />
          <label className="radioCustomLabel" htmlFor={this.props.type}>
            {this.props.content}
          </label>
        </div>
        <div className="answerOptionImage" onClick={this.handleClick}>
          <img src={this.props.imageSrc} alt={this.props.answer} height="100%" width="100%" />
        </div>
      </li>
    );
  }

/**

	170521 - Have to work on the checkboxes,
	and on App.js:71 (handleAnswerSelected) 
	to break out the calc scores part from the move to the next q part


    return (
    <li className="answerOption">
      <input
        type="checkbox"
        className="hidden radio-label"
        className="button-label"
        name="checkboxGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}        
      />
      <label className="button-label" htmlFor={props.answerType}>
        {props.answerContent}
        <p /><img src={props.answerImageSrc} alt={props.answer} height="60%" width="60%" />
      </label>
    </li>
  );
  **/

  
}

AnswerOption.propTypes = {
  type: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  imageSrc: React.PropTypes.string,
  answer: React.PropTypes.string.isRequired,
  onQuestionAnswered: React.PropTypes.func.isRequired
};

export default AnswerOption;
