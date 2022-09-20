import Todos from "./Component/Todos/Todos";
import Form from "./Component/formInput/Form";


import styles from './App.module.css';
import { useEffect, useState } from "react";
const App = () => {
// title, description, startDate, endDate, deleteHandler
  const todosInitial = () => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    return todos;
  }



  const [todos, setTodos] = useState(todosInitial);

  useEffect(() => { 
    let todoStore = JSON.stringify(todos);
    localStorage.setItem("todos", todoStore);
  }, [todos]);

  const deleteHandler = (id) => {
    let filterData = todos.filter((todo, index) => {
      if (index !== id) {
        return todo;
      } });
    setTodos(filterData);
  }

  const addHandler = (todo) => {
    setTodos((prev) => [...prev, todo]);
  }

  
  return (
    <div className={styles.container}>
      <Todos todos={todos} deleteHandler={deleteHandler} />
      <Form addHandler={ addHandler} />
    </div>
  );
}

export default App;
