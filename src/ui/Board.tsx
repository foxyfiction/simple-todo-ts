import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import { Column } from './Column';
import { Task } from '../types';

type BoardProps = {
  todo: Task[];
  inProgress: Task[];
  done: Task[];
};

export const Board: FunctionComponent<BoardProps> = ({
  todo,
  inProgress,
  done
}) => (
  <Grid container spacing={4}>
    <Grid item xs={4}>
      <Column title="To do" tasks={todo} />
    </Grid>
    <Grid item xs={4}>
      <Column title="In Progress" tasks={inProgress} />
    </Grid>
    <Grid item xs={4}>
      <Column title="Done" tasks={done} />
    </Grid>
  </Grid>
);
