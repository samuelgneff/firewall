import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import School from '@material-ui/icons/School';
import { withStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// styles
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


  //console.log(styles);
function NavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to ="/">
            <IconButton style = {{color: '#ffffff'}} aria-label="Menu">

            </IconButton>
          </Link>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Fifth Partners
          </Typography>
          {/*<Button color="inherit">Login</Button>*/}
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);
