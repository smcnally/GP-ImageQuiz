import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from './api/quizQuestions';
import personalityResults from './api/personalityResults.json';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',

      // tally each personality choice
      // TODO initialize this at load time from the quizQuestions.js
      answersCount: {
        //  Group 2
        Indica: 0,
        Sativa: 0,
        Hybrid: 0,
        Bluebird: 0,
        Palmetto: 0,
        GreenMountain: 0,
        //  Group 1
        Deteriorated: 0,
        Improved: 0,
        Same: 0,
        Improving: 0,
        High: 0,
        Magical: 0,
        Charming: 0,
        Quotastic: 0,
        Low: 0,
        Average: 0,
        Quotifying: 0
      },
      result: '',
      personality: ''
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount() {
    const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: shuffledAnswerOptions[0]
    });
  }

  shuffleArray(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  // this is currently passed through to AnswerOption

  // TODO don't pass an event, pass the actual answer(s)
  // so that this file needn't know how the AnswerOption is implemented
  // Also TODO - to handle something being DESELECTED, only call this
  //    when the user's finished the question
  // Also TODO - allow multiple, plus value to be passed with the 
  //    Type (e.g. foo=3,bar=1)
  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

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
   * 
   * @param {String} answer - the "personality type" selected
   * 
   * TODO accept a hash or string, 
   * e.g. "Hybrid" or {Hybrid:2} or {Hybrid:1,Sativa:3}
   */
  setUserAnswer(answer) {
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer
    });
  }

  // transitions to displaying the next question
  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
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
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  // render the result page
  // TODO why not pass the result and bio to the Result component
  // and let it sort out what to display?
  // TODO lacking some error checking
  renderResult() {
    return (
      <div>
        <Result quizResult={this.state.result}
        resultBio={personalityResults[this.state.result].bio} 
        resultBioStrains={personalityResults[this.state.result].strains}
        resultBioSuccessImg={personalityResults[this.state.result].successImg}
        resultBioSponsorImg={personalityResults[this.state.result].sponsorImg}
        resultBioSponsorURL={personalityResults[this.state.result].sponsorURL}
resultBioSponsorTagline={personalityResults[this.state.result].sponsorTagline}
         />
      </div>
    );
  }

  // seems [0].intro is empty, should we hide the header when that happens?
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h4>{quizQuestions[0].intro}</h4>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
