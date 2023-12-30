import React from 'react';
import PropTypes from 'prop-types';

import css from './Statistics.module.css';

class Statistics extends React.Component {
  render() {
    const { good, neutral, bad } = this.props;
    return (
      <ul className={css.list}>
        <li className={css.list__item}>Good: {good}</li>
        <li className={css.list__item}>Neutral: {neutral}</li>
        <li className={css.list__item}>Bad: {bad}</li>
      </ul>
    );
  }
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};

export default Statistics;
