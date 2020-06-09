import React, { FunctionComponent } from 'react';
import Paper from '@material-ui/core/Paper';
import { TaskItem } from './TaskItem';
import Typography from '@material-ui/core/Typography';
import { Task } from '../types';

type ColumnProps = {
  tasks: Task[];
  title: string;
};

export const Column: FunctionComponent<ColumnProps> = props => {
  const { title, tasks } = props;

  return (
    <Paper variant="outlined">
      <Typography>{title}</Typography>
      {tasks.map(item => (
        <TaskItem key={item.id} {...item} />
      ))}
    </Paper>
  );
};
