import { useSelector , useDispatch } from "react-redux";
import {deleteTask} from '../features/tasks/tasksSlice'
import {Link} from 'react-router-dom'
const TasksList = () => {
  const tasksState = useSelector((state) => state.tasks);
  const dispatch = useDispatch()
  const handleDelete = (id) =>{
    dispatch(deleteTask(id))
  }
  return (
    <div>
      <div>
        <header>
          <h1>Task {tasksState.length}</h1>
          <Link to={'/create-task'}>Create Task</Link>
        </header>
        {tasksState.map((e) => (
            <div key={e.id}>
                <h3 >{e.title}</h3>
                <p>{e.description}</p>
                <button onClick={()=>handleDelete(e.id)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default TasksList;
