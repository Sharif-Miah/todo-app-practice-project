/* eslint-disable react/prop-types */
import { useState } from "react";

const TaskAction = ({ onTask }) => {
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add your task"
        value={text}
        onChange={handleChangeText}
        className="w-80 py-2 px-16 border-2 border-black mr-4 font-bold rounded"
      />
      <button
        onClick={() => {
          setText("");
          onTask(text);
        }}
        className="py-2 px-8 bg-blue-500 text-white font-semibold rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default TaskAction;
