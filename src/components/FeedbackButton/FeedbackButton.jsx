import React from 'react';
import PropTypes from 'prop-types';
import s from '../FeedbackButton/FeedbackButton.module.css';

function FeedbackButton(props) {
  // console.log(props);
  const { options, onIncrement } = props;
  const buttons = Object.keys(options);
  // console.log(Object.keys(options));
  return (
    <div className={s.buttons}>
      {buttons.map(button => (
        <button key={button} type="button" onClick={() => onIncrement(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default FeedbackButton;

FeedbackButton.propTypes = {
  options: PropTypes.object.isRequired,
  onIncrement: PropTypes.func.isRequired,
};
