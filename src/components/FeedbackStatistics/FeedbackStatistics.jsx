import React, { Component } from 'react';
import StatisticCard from '../StatisticCard/StatisticCard';
import StatisticTitle from '../StatisticTitle/StatisticTitle';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import Statistics from '../Statistics/Statistics';

export class FeedbackStatistics extends Component {
  render() {
    return (
      <>
        <StatisticCard>
          <StatisticTitle title="Please leave feedback" />
          <FeedbackButton />
          <StatisticTitle title="Statistics" />
          <Statistics />
        </StatisticCard>
      </>
    );
  }
}

export default FeedbackStatistics;
