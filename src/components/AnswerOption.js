import React, { Component } from 'react';
// import PropTypes from 'prop-types';

// Display one choice within a question
// Currently expect only one option to be selected

class AnswerOption extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selected: false
    };
  }

  handleClick() {
    let el = document.getElementById(this.props.id);
    if ( el ) {
      // toggle the input checked state
      el.checked = !el.checked;
      // toggle the component state
      this.setState( previousState => {
        return { selected: !previousState.selected };
      });

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
    let questionOptionClass = "radioCustomButton";
    let isSelected = this.state.selected;
    let ulClasses = "answerOption" + (isSelected ? " answerSelected" : "");
    return (
      <li className={ulClasses} onClick={this.handleClick}>
        <div className="answerOptionContainer">
          <input
            type="checkbox"
            className={questionOptionClass}
            defaultChecked={isSelected}
            id={this.props.id}
            value={this.props.type}
          />
          <label className="radioCustomLabel" htmlFor={this.props.id}>
            {this.props.content}
          </label>
        </div>
        <div className="answerOptionImage">
          <img src={this.props.imageSrc} alt={this.props.answer} />
        </div>
      </li>
    );
  }

}

AnswerOption.propTypes = {
  type: React.PropTypes.string.isRequired,
  content: React.PropTypes.string.isRequired,
  imageSrc: React.PropTypes.string,
  answer: React.PropTypes.string.isRequired,
  onQuestionAnswered: React.PropTypes.func.isRequired
};

export default AnswerOption;
