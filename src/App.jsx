import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import TasksForm from "./components/TasksForm";
import TasksList from "./components/TasksList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksList/>}/>
          <Route path="/create-task" element={<TasksForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
