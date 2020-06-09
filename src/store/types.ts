import { Dispatch } from 'react';
import { Task } from '../types';

export enum Status {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export type BoardState = {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
};

export type Action = {
  type: string;
  payload?: any;
  meta?: any;
};

export type StoreContextValue = [BoardState, Dispatch<Action>];
