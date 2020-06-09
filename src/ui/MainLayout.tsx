import React, { ReactNode, FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  content: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(11)
  }
}));

type MainLayoutProps = {
  menu: ReactNode;
};

export const MainLayout: FunctionComponent<MainLayoutProps> = ({
  menu,
  children
}) => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Box className={classes.content}>{children}</Box>
      {menu}
    </Container>
  );
};
