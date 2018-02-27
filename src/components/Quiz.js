import React from 'react';
// import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';

function Quiz(props) {

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
  function AnswerOptions(props) {
    let id = 0;
    if (!props.answerOptions) {
      return null;
    }
    const list = props.answerOptions.map(option => {
      id++;
      let domId = 'answer' + id;
      return <AnswerOption key={option.content} id={domId} {...option} {...props} />
    });
    return (
      <ul className="answerOptions">
        {list}
      </ul>
    );
  }

  return (
    <ReactCSSTransitionGroup
      className="container"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={props.questionId}>
        <QuestionCount
          counter={props.questionId}
          total={props.questionTotal}
        />
        <Question content={props.question} />
        <AnswerOptions {...props} />
      </div>
    </ReactCSSTransitionGroup>
  );
}

Quiz.propTypes = {
  answer: React.PropTypes.string.isRequired,
  imageSrc: React.PropTypes.string,
  answerOptions: React.PropTypes.array.isRequired,
  question: React.PropTypes.string.isRequired,
  questionId: React.PropTypes.number.isRequired,
  questionTotal: React.PropTypes.number.isRequired,
  onQuestionAnswered: React.PropTypes.func.isRequired
};

export default Quiz;
