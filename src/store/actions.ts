import { Action, Status } from './types';
import { Task } from '../types';
import {
  PUT_TASKS,
  REMOVE_TASK,
  CREATE_TASK,
  CHANGE_STATUS
} from './constants';

export const putTasks = (tasks: {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
}): Action => ({
  type: PUT_TASKS,
  payload: tasks
});

export const removeTask = (id: number): Action => ({
  type: REMOVE_TASK,
  payload: id
});

export const createTask = (fields: { id: number; title: string }): Action => ({
  type: CREATE_TASK,
  payload: fields
});

export const changeStatus = (id: number, status: Status): Action => ({
  type: CHANGE_STATUS,
  payload: { id, status }
});
