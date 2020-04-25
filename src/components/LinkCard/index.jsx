import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const LinkCard = ({ title, description, url }) => {
  return (
    <div className={cx('card')}>
      <h1>{title}</h1>
      <p>{description}</p>
      <a href={url}>To {url}</a>
    </div>
  );
};

LinkCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default LinkCard;
