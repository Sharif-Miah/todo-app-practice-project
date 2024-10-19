import { useState } from "react";
import { initialTasks } from "../../data/data";
import TaskAction from "../TaskAction/TaskAction";
import TaskList from "../TaskList/TaskList";

const TaskBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  //   handler here

  const getNextId = (data) => {
    const nextId = data.reduce((prev, current) => {
      prev && prev.id > data.id ? prev.id : current.id;
    });

    return nextId + 1;
  };

  const handleAddTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: getNextId(tasks),
        text: text,
        done: true,
      },
    ]);
  };

  //   change handler

  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });

    setTasks(nextTask);
  };

  //   Delete handler

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold">Todo List</h1>
      <div className="border-2 p-10 w-3/4 mx-auto">
        <TaskAction onTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDelete={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default TaskBoard;
