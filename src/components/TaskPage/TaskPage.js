import React, { Component } from "react";
import AddTask from "../AddTask/AddTask";
import TaskTable from "../TaskTable/TaskTable";

export default class TaskPage extends Component {
  render() {
    return (
      <div>
        <AddTask />
        <TaskTable />
      </div>
    );
  }
}
