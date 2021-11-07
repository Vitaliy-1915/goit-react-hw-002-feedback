import React, { Component } from 'react';
import StatisticCard from '../StatisticCard/StatisticCard';
import StatisticTitle from '../StatisticTitle/StatisticTitle';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export class FeedbackStatistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = btnOnClick => {
    this.setState(prevState => ({
      [btnOnClick]: prevState[btnOnClick] + 1,
    }));
  };

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad;

  countPositiveFeedbackPercentage = (good, neutral, bad) =>
    Math.round((good * 100) / this.countTotalFeedback(good, neutral, bad));

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      neutral,
      bad,
    );

    return (
      <div>
        <StatisticCard>
          <StatisticTitle title="Please leave feedback" />
          <FeedbackButton
            options={this.state}
            onIncrement={this.handleIncrement}
          />
          <StatisticTitle title="Statistics" />
          {this.countTotalFeedback(good, neutral, bad) > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </StatisticCard>
      </div>
    );
  }
}

export default FeedbackStatistics;
