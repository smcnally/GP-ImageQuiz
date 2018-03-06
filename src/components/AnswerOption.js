import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

  /**
   * capture the extraneous label click event
   * 
   * See https://stackoverflow.com/questions/38957978/react-i-cant-stop-propagation-of-a-label-click-within-a-table
   * Yeah non-obvious :-(
   *
   * @param {event} e 
   */
  stopBubble(e) {  
    if (e && e.stopPropagation) { 
      e.stopPropagation();
    } else {
      window.event.cancelBubble = true;
    }
  }  

  /**
   * handle the user clicking within the AnswerOption
   * 
   * a click toggles the checked attribute for the input and the
   * selected state for this component instance
   * 
   * A click also reports the state change up the chain
   * If the question is multi, report the change to onItemSelected
   * Else treat the change as onQuestionAnswered
   *
   * @param {event} event 
   */
  handleClick(event) {
    this.stopBubble(event);
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
    return false;
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
          <label className="radioCustomLabel" htmlFor={this.props.id} onClick={this.stopBubble.bind(this)}>
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
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object]).isRequired,
  content: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  answer: PropTypes.string.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired
};

export default AnswerOption;
