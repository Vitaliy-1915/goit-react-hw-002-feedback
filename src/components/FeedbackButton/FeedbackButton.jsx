import React from 'react';

function FeedbackButton(props) {
  // console.log(props);
  const { options, onIncrement } = props;
  const buttons = Object.keys(options);
  // console.log(Object.keys(options));
  return (
    <div>
      {buttons.map(button => (
        <button key={button} type="button" onClick={() => onIncrement(button)}>
          {button}
        </button>
      ))}
    </div>
  );
}

export default FeedbackButton;
