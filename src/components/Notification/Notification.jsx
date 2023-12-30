import React from 'react';
import PropTypes from 'prop-types';

import css from './Notification.module.css';

class Notification extends React.Component {
  render() {
    const { message } = this.props;
    return <p className={css.notification__message}>{message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
