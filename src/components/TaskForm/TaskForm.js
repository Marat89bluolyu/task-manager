import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const renderTextField = ({ input, label, ...custom }) => (
  <TextField placeholder={label} {...input} {...custom} />
);

const TaskForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} style={{ margin: 30 }}>
      <div>
        <Field name="taskName" component={renderTextField} label="Task Name" />
      </div>
      <div>
        <Field
          name="description"
          component={renderTextField}
          label="Description"
        />
      </div>
      <div>
        <Field
          name="plannedTime"
          component={renderTextField}
          placeholder="Planned Time"
          type="number"
          label="plannedTime"
        />
      </div>
      <div>
        <Field
          name="completedTime"
          component={renderTextField}
          type="number"
          placeholder="Completed Time"
          label="completedTime"
        />
      </div>
      <div style={{marginTop:10}}>
        <label htmlFor="completedStatus">Completed Status</label>
        <Field name="completedStatus" component="select">
          <option />
          <option value="Todo">Todo</option>
          <option value="In Progress">In Progress</option>
          <option value="Ready">Ready</option>
        </Field>
      </div>
      <div style={{marginTop:10}}>
        <label htmlFor="createdAt">Created At</label>
        <Field name="createdAt" component="input" type="date" />
      </div>
      <div style={{marginTop:10}}>
        <label htmlFor="priority">Priority</label>
        <Field name="priority" component="select">
          <option />
          <option value="High">High</option>
          <option value="Middle">Middle</option>
          <option value="Low">Low</option>
        </Field>
      </div>
      <Button type="submit" variant="raised" color="primary"  style={{marginTop:10}}>
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "TaskForm",
  enableReinitialize: true
})(TaskForm);
