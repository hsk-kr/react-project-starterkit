import React from 'react';
import classnames from 'classnames/bind';
import LinkCard from '../../components/LinkCard';
import styles from './styles.scss';

const cx = classnames.bind(styles);

const MainMenu = () => {
  return (
    <div className={cx('main-menu')}>
      <LinkCard
        title="DATA TABLE"
        description="Pick data and save data to databox."
        url="/data-table"
      />
      <LinkCard title="DATA BOX" description="Show data that you saved" url="/data-box" />
    </div>
  );
};

export default MainMenu;
