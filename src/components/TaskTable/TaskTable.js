import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TaskColumn from "../TaskColumn/TaskColumn";
import Task from "../Task/Task";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { compose } from "redux";

const styles = theme => ({
  table: {
    backgroundColor: "transparent"
  }
});

class TaskTable extends Component {
  render() {
    const { tasks } = this.props;
    
    return (
      <div>
        <Grid container spacing={24}>
          <TaskColumn>
            {tasks.map(task => <Task key={task.id} {...task} />)}
          </TaskColumn>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => state;

export default compose(withStyles(styles), connect(mapStateToProps, null))(
  TaskTable
);
