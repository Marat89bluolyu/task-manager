import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getId } from "../../redux/modules/idTask/actions";

import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

class Task extends Component {
  render() {
    const {
      classes,
      taskName,
      description,
      createdAt,
      priority,
      plannedTime,
      completedTime,
      completedStatus,
      getId,
      id
    } = this.props;

    const handleSubmit = e => {
      e.preventDefault();
      getId(id);
    };

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <Typography
              className={classes.title}
              variant="headline"
              component="h2"
            >
              Name: {taskName}
            </Typography>
            <Typography>Description: {description}</Typography>
            <Typography className={classes.pos}>
              Created At: {createdAt}
            </Typography>

            <Typography className={classes.pos}>
              Priority: {priority}
            </Typography>

            <Typography className={classes.pos}>
              Planned Time: {plannedTime}
            </Typography>

            <Typography className={classes.pos}>
              Completed Time: {completedTime}
            </Typography>

            <Typography className={classes.pos}>
              Completed status: {completedStatus}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              key={id}
              onClick={handleSubmit}
              variant="raised"
              color="primary"
            >
              Edit Task
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    getId: payload => {
      dispatch(getId(payload));
    }
  };
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(Task);
