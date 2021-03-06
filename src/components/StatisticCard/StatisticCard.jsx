import React from 'react';
import PropTypes from 'prop-types';

function StatisticCard({ children }) {
  // console.log({children});
  return <section>{children}</section>;
}

export default StatisticCard;

StatisticCard.prototype = {
  children: PropTypes.node.isRequired,
};
