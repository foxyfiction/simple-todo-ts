import React, { useEffect } from 'react';
import { Board } from '../ui/Board';
import { useStore } from '../store';
import { putTasks } from '../store/actions';

const tasks = {
  todo: [
    { id: 1, title: 'Test' },
    { id: 2, title: 'Test' },
    { id: 3, title: 'Test' },
    { id: 10, title: 'Test' },
    { id: 11, title: 'Test' },
    { id: 12, title: 'Test' },
    { id: 13, title: 'Test' },
    { id: 14, title: 'Test' },
    { id: 15, title: 'Test' },
    { id: 16, title: 'Test' },
    { id: 17, title: 'Test' },
    { id: 18, title: 'Test' },
    { id: 19, title: 'Test' },
    { id: 20, title: 'Test' },
    { id: 21, title: 'Test' }
  ],
  inProgress: [
    { id: 4, title: 'Test' },
    { id: 5, title: 'Test' },
    { id: 6, title: 'Test' }
  ],
  done: [
    { id: 7, title: 'Test' },
    { id: 8, title: 'Test' },
    { id: 9, title: 'Test' }
  ]
};

export const Dashboard = () => {
  const [state, dispatch] = useStore();
  const { todo, inProgress, done } = state;

  useEffect(() => {
    dispatch(putTasks(tasks));
  }, [dispatch]);

  return <Board todo={todo} inProgress={inProgress} done={done} />;
};
