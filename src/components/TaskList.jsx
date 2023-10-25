// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, markAsDone, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          markAsDone={markAsDone}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
