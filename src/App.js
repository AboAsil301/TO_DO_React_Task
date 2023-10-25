// src/App.js
import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const markAsDone = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" align="center" gutterBottom>
        To-Do App
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (taskText.trim() !== '') {
            addTask(taskText);
          }
        }}
      >
        <TextField
          fullWidth
          label="Enter a task..."
          variant="outlined"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
      <ListGroup className="mt-3">
        {tasks.map((task) => (
          <ListGroupItem
            key={task.id}
            className="d-flex justify-content-between align-items-center"
            style={{
              textDecoration: task.done ? 'line-through' : 'none',
            }}
          >
            {task.text}
            <div>
              <Button
                variant="contained"
                color="success"
                onClick={() => markAsDone(task.id)}
                className="me-2"
              >
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button
                variant="contained"
                color="danger"
                onClick={() => deleteTask(task.id)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </Container>
  );
}

export default App;
