import './App.css';
import React, { Component } from 'react';
import StatisticCard from './components/StatisticCard/StatisticCard';
import StatisticTitle from './components/StatisticTitle/StatisticTitle';
import FeedbackButton from './components/FeedbackButton/FeedbackButton';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = feedBack => {
    // console.log(feedBack);
    this.setState(prevState => ({
      [feedBack]: prevState[feedBack] + 1,
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
      <div className="App">
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

export default App;
