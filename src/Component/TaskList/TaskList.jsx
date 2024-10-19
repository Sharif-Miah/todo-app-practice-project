/* eslint-disable react/prop-types */
import Task from "../Task/Task";

const TaskList = ({ tasks, onChangeTask, onDelete }) => {
  return (
    <div className="mt-10">
      <ul className="flex gap-2">
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onDelete={onDelete}
              onChangeTask={onChangeTask}
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default TaskList;
