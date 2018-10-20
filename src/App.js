import React, { Component } from 'react';
import quizQuestions from './api/quizQuestions';
import personalityResults from './api/personalityResults.json';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { playSound } from './helpers'; // helper not component
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      imageSrc: null,
      soundSrc: null,
      multiAnswerSoundSrc: null,
      answerOptions: [],
      answer: '',
      multi: null,
      format: "default",
      answersCount: {},
      result: '',
      personality: ''
    };

    this.handleQuestionAnswered = this.handleQuestionAnswered.bind(this);
  }

  componentWillMount() {
    // shuffle the answer options for each question
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));

    // tabulate possible answers
    let answersCount = this.tabulateAnswers(quizQuestions);
    this.setState({
      question: quizQuestions[0].question,
      imageSrc: quizQuestions[0].imageSrc || null,
      soundSrc: quizQuestions[0].soundSrc || null,
      multiAnswerSoundSrc: quizQuestions[0].multiAnswerSoundSrc || null,
      multi: quizQuestions[0].multi || false,
      format: quizQuestions[0].format || "answerDefault",
      answersCount: answersCount,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  /**
   * tally all the possible answer "type" attributes
   * 
   * @param {object} questions 
   * @returns {object} answers, eg {Indica: 0, Sativa: 0}
   */
  tabulateAnswers(questions) {
    let answers = {};
    for (var qid in questions) {
      if (!questions[qid].answers) {
        continue;
      }
      questions[qid].answers.forEach(answer => {
        if (!answer.type) {
          return;
        }
        let type = answer.type;
        if (typeof type === "string") {
          answers[type] = 0;
        } else {
          Object.entries(type).forEach(([key, value]) => answers[key] = 0);
        }
      });
    }
    return answers;
  }

  // Don't shuffle answerOptions - either this OR the next
  shuffleArray(array) {
    var currentIndex = array.length;
    while (0 !== currentIndex) {
      currentIndex -= 1;
    }
    return array;
  };

  // Shuffle answerOptions - either this OR the previous
/**  
 *  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      // randomIndex = Math.floor(Math.random() * currentIndex);
      // Don't shuffle - 
      randomIndex = Math.floor(Math.random() * currentIndex);

      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  */  

  /**
   * handler for a question being answered
   * 
   * receives a list of types and a count, e.g. {Hybrid:2,Sativa:1}
   * backward compatible - takes just a type (string) e.g. "Hybrid"
   * 
   * tabulates the answers into the App state.answersCount
   * this is currently called in AnswerOption or Quiz, depending on
   * whether the multi prop is set
   */

  handleQuestionAnswered(answers) {
    // handle the case where a string was supplied
    if (typeof answers === "string") {
      let key = answers;
      answers = {};
      answers[key] = 1;
    }
    if (this.state.soundSrc) {
      playSound(this.state.soundSrc);
    }
    this.setUserAnswer(answers);

    // if no more questions, show result
    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  /**
   * update the set of answers
   * 
   * Tally the number of each personality (answerType) selected
   * App.state.answersCount is a map of all the types / counts
   * This updates the state for one question (possibly multiple options)
   * 
   * @param {Object} answers - a map of Type and frequency for the current Q
   */
  setUserAnswer(answers) {
    let updatedAnswersCount = this.state.answersCount;
    for (var answer in answers) {
      let oldCount = this.state.answersCount[answer] || 0;
      let count = answers[answer] + oldCount;
      updatedAnswersCount[answer] = count;
    }

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  // transitions to displaying the next question
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    const defaultSoundSrc = quizQuestions[0].soundSrc || null;
    const defaultMultiSoundSrc = quizQuestions[0].multiAnswerSoundSrc || null;

    this.setState({
      counter: counter,
      questionId: questionId,
      multi: quizQuestions[counter].multi || false,
      format: quizQuestions[counter].format || "answerDefault",
      question: quizQuestions[counter].question,
      imageSrc: quizQuestions[counter].imageSrc || null,
      soundSrc: quizQuestions[counter].soundSrc || defaultSoundSrc,
      multiAnswerSoundSrc: quizQuestions[counter].multiAnswerSoundSrc || defaultMultiSoundSrc,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });

    // position new Q at top
    window.scrollTo(0, 0);
  }

  // compose the personality results for the final screen
  // and return the top result(s)
  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  // sets state.result to be the key of the top personality e.g. 'Indica'
  setResults(result) {
    if (result.length === 1) {
      this.setState({
        result: result[0]
      });
    } else {
      // redundant, do we need to set multiple?
      this.setState({
        result: result[0]
      });
    }
  }

  // TODO this is not used anywhere
  setPersonality() {
    this.setState({
      personality: 'Indica'
    });
  }

  // render a question (Quiz)
  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer || ""}
        answerOptions={this.state.answerOptions}
        multiAnswerSoundSrc={this.state.multiAnswerSoundSrc}
        questionId={this.state.questionId}
        question={this.state.question}
        questionImg={this.state.imageSrc}
        multi={this.state.multi}
        format={this.state.format}
        questionTotal={quizQuestions.length}
        onQuestionAnswered={this.handleQuestionAnswered}
      />
    );
  }

  // render the result page
  renderResult() {
    // simply pass the relevant info as props
    const questionProps = quizQuestions[0];
    const resultProps = personalityResults[this.state.result];

    return (
      <div>
        <Result quizResult={this.state.result}
          {...resultProps}
          {...questionProps}
         />
      </div>
    );
  }

  // seems [0].intro is empty, should we hide the header when that happens?
  // use constrain-300x600 or unconstrained as a class next to App
  render() {
    // if iframe, use constrained class
    let constrainClass = "unconstrained";
    if (window !== top) {
      constrainClass = "constrain-300x600";
    }
    return (
      <div className={"App " + constrainClass}>
        <div className="App-header">
          <h4 dangerouslySetInnerHTML={{__html: quizQuestions[0].intro}} />
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;