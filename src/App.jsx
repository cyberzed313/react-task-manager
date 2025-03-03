import './App.css'
import { useState } from 'react';
import Task from './components/Task';

function App() {

  // manual sample tasks
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Build a Task Manager app" },
    { id: 2, title: "Learn Node.js", description: "Build an app" },
  ]);

  // state for form inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  
  // state for the task being edited
  const [editingTask, setEditingTask] = useState(null);

  // Function to add a new Task
  const addTask = () => {
    if (!title.trim() || !description.trim()) return; // prevent empty tasks

    const newTask = {
      id: tasks.length + 1, // Simple ID generation
      title,
      description,
    };

    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
  };

  // Function to delete a task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks); // Update state with the new list
  };

  // Function to edit a task
  const editTask = (task) => {
    setEditingTask(task); // Set the task to be edited
    setTitle(task.title); // Populate form with current task data
    setDescription(task.description);
  };

  // Function to save the edited task
  const saveTask = () => {
    if (!title.trim() || !description.trim()) return;

    const updatedTasks = tasks.map((task) =>
      task.id === editingTask.id
        ? { ...task, title, description } // Update the task with new data
        : task
    );
    
    setTasks(updatedTasks); // Update the state
    setTitle(""); // Clear form
    setDescription("");
    setEditingTask(null); // Reset editing mode
  };

  return (
    <div className='text-center p-10'>
      <h1 className='text-3xl font-bold'>Task Manager</h1>

      {/* Add or Edit task form */}
      <div className="flex flex-col items-center space-y-3 mb-5">
        <input
          className='p-2 border rounded w-80'
          type="text"
          placeholder='Task title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className='p-2 border rounded w-80'
          type="text"
          placeholder='Task description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button
          className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700'
          onClick={editingTask ? saveTask : addTask}
        >
          {editingTask ? "Save Task" : "Add Task"}
        </button>
      </div>

      {/* Task List */}
      <div className='mt-5 space-y-4'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask} // Pass the editTask function
          />
        ))}
      </div>
    </div>
  );
}

export default App;
