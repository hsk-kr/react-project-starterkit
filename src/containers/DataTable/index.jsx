import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classnames from 'classnames/bind';
import styles from './styles.scss';
import { fetchTodos } from '../../store/ducks/todos';

const cx = classnames.bind(styles);

const DataTable = () => {
  const { loading, todos, errMsg } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (errMsg) {
    return <div>Error: {errMsg}</div>;
  }

  return (
    <div className={cx('data-table')}>
      {todos.map((todo) => (
        <div key={todo.id}>{todo.title}</div>
      ))}
    </div>
  );
};

export default DataTable;
