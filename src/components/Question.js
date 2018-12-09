import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Question extends Component {

  render() {
    // if the user can select multiple items display a next button
    let nextPrompt = this.props.multi || null;
    let questionImg = this.props.questionImg || null;
    let nextButton = null;
    let nextInstructions = null;
    let optionalImage = null;
    let questionClasses = "question";
    let logoImage = null;

    if (nextPrompt) {
      questionClasses += " multiQuestion";
      nextButton = (
        <button 
          className="nextButton"
          onClick={this.props.doneWithQuestion}>
          {nextPrompt}
        </button>
      );
      nextInstructions = (
        <span className="nextInstructions">
          Select one or more
        </span>
      )
    }

    if (questionImg) {
      questionClasses += " imgQuestion";
      optionalImage = (
        <img alt="" src={questionImg}/>
      )
    }

    return (
      <h4 id="questionh4" className={questionClasses}>
        <span>{this.props.question}</span>
        {nextInstructions}
        {optionalImage}
        {nextButton}
        {logoImage}
      </h4>
    );
  }

}

Question.propTypes = {
  question: PropTypes.string.isRequired
};

export default Question;
