import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class AnswerOption extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      let el = document.getElementById(this.props.answerType);
      if ( el ) {
        console.log(el);
        el.checked = true;
      }
  }

  render() {
    return (
      <li className="answerOption">
        <div className="answerOptionContainer">
          <input
            type="radio"
            className="radioCustomButton"
            name="radioGroup"
            checked={this.props.answerType === this.props.answer}
            id={this.props.answerType}
            value={this.props.answerType}
            disabled={this.props.answer}
            onChange={this.props.onAnswerSelected}
          />
          <label className="radioCustomLabel" htmlFor={this.props.answerType}>
            {this.props.answerContent}
          </label>
        </div>
        <div className="answerOptionImage" onClick={this.handleClick}>
          <img src={this.props.answerImageSrc} alt={this.props.answer} height="100%" width="100%" />
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
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answerImageSrc: React.PropTypes.string,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
