/* eslint-disable react/prop-types */

import { useState } from "react";

const Task = ({ task, onChangeTask, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);

  let textContent;

  if (isEditing) {
    textContent = (
      <>
        <input
          placeholder="Add your task"
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
          className="w-80 py-1 px-10 border-2 border-black mr-4 font-bold rounded"
        />

        <button
          onClick={() => setIsEditing(false)}
          className="py-2 px-8 bg-blue-500 text-white font-semibold rounded mr-6"
        >
          Save Task
        </button>
      </>
    );
  } else {
    textContent = (
      <>
        <span className="mr-4 text-xl font-bold">{task.text}</span>

        <button
          onClick={() => setIsEditing(true)}
          className="py-2 px-8 bg-blue-500 text-white font-semibold rounded mr-6"
        >
          Edit Task
        </button>
      </>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
        className="mr-2"
      />

      {textContent}
      <button
        onClick={() => onDelete(task.id)}
        className="py-2 px-8 bg-blue-500 text-white font-semibold rounded"
      >
        Delete
      </button>
    </li>
  );
};

export default Task;
