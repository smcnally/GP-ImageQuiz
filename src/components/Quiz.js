import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOptions from './AnswerOptions';
import Swipe from 'react-easy-swipe';

class Quiz extends Component {
  constructor(props) {
    super(props);

    this.onSwipeMove = this.onSwipeMove.bind(this);
    this.onSwipeEnd = this.onSwipeEnd.bind(this);

    this.state = {
      selectedItems: {},
      swiped: ''
    };
  }

  componentWillMount() {
    this.setState({ swiped: '' });
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

  onSwipeStart(event) {
    console.log('Start swiping...', event);
  }

  onSwipeMove(position, event) {
    console.log(`Moved ${position.x} pixels horizontally`, event);
    console.log(`Moved ${position.y} pixels vertically`, event);

    let state = this.state || {};
    let dir = state.swiped || '';
    if ( position.x < -20 ) {
      dir = 'left';
    }
    if ( position.x > 20 ) {
      dir = 'right';
    }
    if (dir) {
      console.log(dir);
      this.setState({ swiped: dir });
    }
  }

  onSwipeEnd(event) {
    console.log('End swiping...', event);
    let state = this.state || {};
    let swiped = state.swiped;
    if ( !swiped ) {
      return false;
    }
    console.log('swipe finished');
    console.log(swiped);
    this.setState({ swiped: '' });
    // trigger the correct click
    // pretending we clicked the 2nd or 2st option, then assume it's not multi
    if ('right' === swiped) {
      this.onItemSelected('answer2',this.props.answerOptions[1].type);
      this.handleDoneQuestion();
    } else if ('left' === swiped) {
      this.onItemSelected('answer1',this.props.answerOptions[0].type);
      this.handleDoneQuestion();
    }
  }

  render() {
    return (
      <ReactCSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}ß
        transitionAppear
        transitionAppearTimeout={500}
      >
        <Swipe
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}>
            <div key={this.props.questionId}>
              <QuestionCount
                counter={this.props.questionId}
                total={this.props.questionTotal}
              />
              <Question appHeaderTypeColor={this.props.appHeaderTypeColor} appHeaderBgColor={this.props.appHeaderBgColor} appHeaderLogo={this.props.appHeaderLogo} {...this.props} doneWithQuestion={this.handleDoneQuestion.bind(this)}/>
              <AnswerOptions
                {...this.props}
                onItemSelected={this.onItemSelected.bind(this)}
                doneWithQuestion={this.handleDoneQuestion.bind(this)}
              />
            </div>
          </Swipe>
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
  onQuestionAnswered: PropTypes.func.isRequired,
  appHeaderTypeColor: React.PropTypes.string,
  appHeaderBgColor: React.PropTypes.string,
  appHeaderLogo: React.PropTypes.string
};

export default Quiz;
