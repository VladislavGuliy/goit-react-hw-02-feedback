import React from 'react';
import Section from '../Section';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Notification from '../Notification';

import css from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = event => {
    this.setState(prevState => {
      return {
        [event]: prevState[event] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (value, amount) => value + amount,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={css.feedback__container}>
        <h1 className={`${css.feedback__title} ${css.visually__hidden}`}>
          Customer reviews of Cafe Expresso
        </h1>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
