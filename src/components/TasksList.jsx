import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/tasksSlice";
import { Link } from "react-router-dom";
const TasksList = () => {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };
  return (
    <div className="w-4/6 ">
      <header className="flex justify-between item-center py-4">
        <h1>Task {tasksState.length}</h1>
        <Link
          to={"/create-task"}
          className="bg-indigo-600 px-2 py-1 tound-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasksState.map((e) => (
          <div key={e.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{e.title}</h3>
              <div className="flex gap-x-2">
                <Link to={`/edit-task/${e.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
                <button
                  onClick={() => handleDelete(e.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md self-center"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
