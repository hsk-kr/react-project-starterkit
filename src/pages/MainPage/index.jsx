import React from 'react';
import classnames from 'classnames/bind';
import MainMenu from '../../containers/MainMenu';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const MainPage = () => {
  return (
    <div className={cx('page')}>
      <h1>PageA</h1>
      <hr />
      <MainMenu />
    </div>
  );
};

export default MainPage;
