import React, { Component } from 'react';
import AnswerOption from './AnswerOption';

/**
 * outputs a list of AnswerOption components, one for each option
 * 
 * this is better than the old map, we can allocate ids to each item
 * Each option has 3 attributes:
 * - content (text)
 * - imageSrc (background image)
 * - soundSrc (optional sfx to play when selected, for multi)
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
    const defaultSoundSrc = this.props.multiAnswerSoundSrc || null;
    const list = this.props.answerOptions.map(option => {
      id++;
      let domId = 'answer' + id;
      return (
        <AnswerOption 
          key={option.content}
          id={domId}
          answerSoundSrc={option.soundSrc || defaultSoundSrc}
          onItemSelected={this.props.onItemSelected}
          {...option}
          {...this.props}
        />
      );
    });

    let classes = "answerOptions";
    if (this.props.format) {
      classes += " " + this.props.format
    }
    return (
      <ul className={classes}>
        {list}
      </ul>
    );
  }
}

export default AnswerOptions;