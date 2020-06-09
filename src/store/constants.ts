import { Status } from './types';

export const STATUSES: Status[] = [
  Status.DONE,
  Status.IN_PROGRESS,
  Status.DONE
];

export const PUT_TASKS = '@tasks/PUT_TASKS';
export const REMOVE_TASK = '@tasks/REMOVE';
export const CREATE_TASK = '@tasks/CREATE';
export const CHANGE_STATUS = '@tasks/CHANGE_STATUS';
