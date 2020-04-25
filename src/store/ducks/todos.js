import axios from 'axios';
import apis from '../../config/apis';

const { GET_TODOS_API } = apis;

// Actions
const FETCH_TODOS_LOADING = 'FETCH_TODOS';
const FETCH_TODOS_COMPLETE = 'FETCH_TODOS_COMPLETE';
const FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR';

// Reducer
const initialState = {
  todos: [],
  loading: false,
  errMsg: '',
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_TODOS_LOADING:
      return {
        loading: true,
        todos: [],
        errMsg: '',
      };
    case FETCH_TODOS_COMPLETE:
      return {
        loading: false,
        todos: action.todos,
        errMsg: '',
      };
    case FETCH_TODOS_ERROR:
      return {
        loading: false,
        todos: [],
        errMsg: action.errMsg,
      };
    default:
      return state;
  }
}

// Action Creators
export function fetchTodosLoading() {
  return { type: FETCH_TODOS_LOADING };
}

export function fetchTodosComplete(todos) {
  return { type: FETCH_TODOS_COMPLETE, todos };
}

export function fetchTodosError(errMsg) {
  return { type: FETCH_TODOS_ERROR, errMsg };
}

// Thunks
export const fetchTodos = () => async (dispatch) => {
  dispatch(fetchTodosLoading());

  try {
    const apiRes = await axios.get(GET_TODOS_API);
    if (apiRes.status !== 200) {
      throw new Error(`Status code isn't 200: ${apiRes.status}`);
    }

    dispatch(fetchTodosComplete(apiRes.data));
  } catch (e) {
    dispatch(fetchTodosError(e));
  }
};
