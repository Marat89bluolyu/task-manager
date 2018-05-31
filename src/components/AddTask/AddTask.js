import React, { Component } from "react";
import { connect } from "react-redux";
import TaskForm from "../TaskForm/TaskForm";
import { addTask } from "../../redux/modules/tasks/actions";

class AddTask extends Component {
  submit = values => {
    this.props.addTask(values);
  };
  render() {
    const { id, tasks } = this.props;

    const data = tasks
      .filter(task => task.id === id.id)
      .reduce((o, key) => ({ ...o, ...key }), {});

    return <TaskForm onSubmit={this.submit} initialValues={data} />;
  }
}

const mapStateToProps = state => ({
  id: state.idTask,
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => {
  return {
    addTask: payload => {
      dispatch(addTask(payload));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
