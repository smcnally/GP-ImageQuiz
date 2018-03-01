import React, { Component } from 'react';
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
      questions[qid].answers.map(answer => answers[answer.type] = 0);
    }
    return answers;
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

    this.setState({
        counter: counter,
        questionId: questionId,
        multi: quizQuestions[counter].multi || false,
        format: quizQuestions[counter].format || "answerDefault",
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
        answer={this.state.answer || ""}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        multi={this.state.multi}
        format={this.state.format}
        questionTotal={quizQuestions.length}
        onQuestionAnswered={this.handleQuestionAnswered}
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
