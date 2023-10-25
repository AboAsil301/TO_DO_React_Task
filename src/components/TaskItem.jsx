// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, markAsDone, deleteTask }) => {
  const handleDone = () => {
    markAsDone(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <li>
      <span
        style={{
          textDecoration: task.done ? 'line-through' : 'none',
        }}
      >
        {task.text}
      </span>
      <button onClick={handleDone}>Mark as Done</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
