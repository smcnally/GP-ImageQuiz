import React, { Component } from 'react';
import AnswerOption from './AnswerOption';

/**
 * outputs a list of AnswerOption components, one for each option
 * 
 * this is better than the old map, we can allocate ids to each item
 * Each option has 3 attributes:
 * - content (text)
 * - imageSrc (background image)
 * - type (personality type to match)
 * 
 * To allow duplicate types, the id is generated sequentially
 */
class AnswerOptions extends Component {

  render() {
    let id = 0;
    if (!this.props.answerOptions) {
      return null;
    }
    const list = this.props.answerOptions.map(option => {
      id++;
      let domId = 'answer' + id;
      return (
        <AnswerOption 
          key={option.content}
          id={domId}
          onItemSelected={this.props.onItemSelected}
          {...option}
          {...this.props}
        />
      );
    });
    return (
      <ul className="answerOptions">
        {list}
      </ul>
    );
  }
}

export default AnswerOptions;