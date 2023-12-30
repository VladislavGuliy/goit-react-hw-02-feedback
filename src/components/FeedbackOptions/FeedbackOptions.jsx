import React from 'react';
import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <div className={css.feedbackOptions__container}>
        {options.map(option => (
          <button
            key={option}
            className={css.feedbackOptions__button}
            type="button"
            value={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])),
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
