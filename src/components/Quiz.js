import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOptions from './AnswerOptions';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = { selectedItems: {} };
  }

  /**
   * handle a single option being toggled on/off
   */
  onItemSelected(id, type) {
    let selectedItems = this.state.selectedItems || {};
    if (selectedItems[id]) {
      delete(selectedItems[id]);
    } else {
      selectedItems[id] = type;
    }
    this.setState({ selectedItems });
  }

  /**
   * when the question is marked done, tabulate the changes to the answers list
   */
  handleDoneQuestion() {
    if (this.props.onQuestionAnswered) {
      let answers = {};
      let types = Object.values(this.state.selectedItems);
      types.forEach(type => {
        let list = type;
        // allow "indica" or {indica:3} or {indica:3, sativa:1}
        if (typeof type === "string") {
          list = {};
          list[type] = 1;
        }
        Object.entries(list).forEach(([key, value]) => {
          answers[key] ? answers[key] += value : answers[key] = value;
        });
      });
      this.setState({ selectedItems: {} });
      this.props.onQuestionAnswered(answers);
    }
  }

  render() {
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
        <div key={this.props.questionId}>
          <QuestionCount
            counter={this.props.questionId}
            total={this.props.questionTotal}
          />
          <Question {...this.props} doneWithQuestion={this.handleDoneQuestion.bind(this)}/>
          <AnswerOptions
            {...this.props}
            onItemSelected={this.onItemSelected.bind(this)}
            doneWithQuestion={this.handleDoneQuestion.bind(this)}/>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onQuestionAnswered: PropTypes.func.isRequired
};

export default Quiz;
