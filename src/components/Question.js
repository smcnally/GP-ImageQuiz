import React from 'react';
// import PropTypes from 'prop-types';

function Question(props) {

  // TODO if props indicates the user can select multiple items we may need
  // a ">>" (done answering) button and a handler for it
  return (
    <h4 className="question">{props.content}</h4>
  );

}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
