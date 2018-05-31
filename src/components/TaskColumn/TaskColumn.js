import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  textCenter: {
    textAlign: "center"
  }
});

class TaskColumn extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs>
        <Paper>
          <Typography className={classes.textCenter}>Task List</Typography>
          {this.props.children}
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskColumn);
