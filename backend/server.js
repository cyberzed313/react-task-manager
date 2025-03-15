const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

//Middleware 
app.use(cors());
app.use(express.json()); //To parse json requests


// Sample task list (temporary in-memory data)
let tasks = [
  { id: 1, title: "Learn React", description: "Build a Task Manager app" },
  { id: 2, title: "Learn Node.js", description: "Build an API" },
];

//Test route
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;

  //validate the input
  if (!title || !description) {
    return res.status(400).json({ message: "Title and Description are required." });
  }

  //Create new task
  const newTask = {
    id: tasks.length + 1,
    title,
    description,
  };


  tasks.push(newTask); // Add to tasks array
  res.status(201).json(newTask); // Send response
});


//Start the Server

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});