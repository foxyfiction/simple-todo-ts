import React, { FunctionComponent } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

type TaskProps = {
  id: number;
  title: string;
};

export const TaskItem: FunctionComponent<TaskProps> = props => {
  const { title } = props;

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="body2" component="p">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
