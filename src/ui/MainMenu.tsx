import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  mainMenu: {
    top: 'auto',
    bottom: 0
  },
  addButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}));

export const MainMenu: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.mainMenu}>
      <Toolbar>
        <Fab className={classes.addButton}>
          <AddIcon />
        </Fab>
      </Toolbar>
    </AppBar>
  );
};
