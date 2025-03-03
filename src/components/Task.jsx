// components/Task.jsx

function Task({ task, deleteTask, editTask }) {
  return (
    <div className="flex justify-between items-center border p-4 rounded shadow-md">
      <div>
        <h2 className="font-bold">{task.title}</h2>
        <p>{task.description}</p>
      </div>
      <div className="space-x-2">
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700"
          onClick={() => editTask(task)} // Trigger editTask on click
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-700"
          onClick={() => deleteTask(task.id)} // Delete the task
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
