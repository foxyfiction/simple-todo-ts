import { BoardState, Action, Status } from './types';
import { Task } from '../types';
import {
  PUT_TASKS,
  REMOVE_TASK,
  CREATE_TASK,
  CHANGE_STATUS
} from './constants';

type Reducer = (state: BoardState, payload?: any) => BoardState;

type ReducerMapper = { [key: string]: Reducer };

const reduceFuncMapper: ReducerMapper = {
  [PUT_TASKS]: (
    state: BoardState,
    payload: {
      todo: Task[];
      inProgress: Task[];
      done: Task[];
    }
  ) => ({
    ...state,
    todo: [...state.todo, ...payload.todo],
    inProgress: [...state.inProgress, ...payload.inProgress],
    done: [...state.done, ...payload.done]
  }),
  [REMOVE_TASK]: (state: BoardState, payload: number) => {
    const newState = {
      todo: state.todo.filter(item => item.id !== payload),
      inProgress: state.inProgress.filter(item => item.id !== payload),
      done: state.done.filter(item => item.id !== payload)
    };

    return newState;
  },
  [CREATE_TASK]: (
    state: BoardState,
    payload: { id: number; title: string }
  ) => ({
    ...state,
    todo: [...state.todo, payload]
  }),
  [CHANGE_STATUS]: (
    state: BoardState,
    payload: { id: number; status: Status }
  ) => state
};

const defaultReducerFunc: Reducer = state => state;

export const reducer = (state: BoardState, action: Action) => {
  const { type, payload } = action;
  const reducerFunc: Reducer = reduceFuncMapper[type] || defaultReducerFunc;

  return reducerFunc(state, payload);
};
