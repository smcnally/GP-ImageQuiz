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

  handleClick() {
    let el = document.getElementById(this.props.id);
    if ( el ) {
      el.checked = !el.checked;

      if (!this.props.multi) {
        // if user can only pick one item, answered
        this.props.onQuestionAnswered(this.props.type);
      } else {
        // otherwise keep tabs on which items are selected
        this.props.onItemSelected(this.props.id, this.props.type);
      }
    }
  }

  render() {
    // TODO change classes based on question mode/type (radio, check, etc)
    let questionOptionClass = "radioCustomButton";
    return (
      <li className="answerOption" onClick={this.handleClick}>
        <div className="answerOptionContainer">
          <input
            type="checkbox"
            className={questionOptionClass}
            defaultChecked={this.props.type === this.props.answer}
            id={this.props.id}
            value={this.props.type}
          />
          <label className="radioCustomLabel" htmlFor={this.props.id}>
            {this.props.content}
          </label>
        </div>
        <div className="answerOptionImage">
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
