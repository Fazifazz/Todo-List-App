import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTudo] = useState("");
  const handleDelete = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={todo}
          onChange={(event) => setTudo(event.target.value)}
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setTodos([...todos, { id: Date.now(), text: todo, status: false }])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {todos.map((obj, index) => {
          return (
            <div key={index} className="todo">
              <div className="left">
                <input
                  onChange={(e) => {
                    console.log(e.target.checked);
                    setTodos(
                      todos.filter((obj2) => {
                        if (obj2.id === obj.id) {
                          obj2.status = e.target.checked;
                        }
                        return obj2;
                      })
                    );
                  }}
                  type="checkbox"
                  value={obj.status}
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    setTodos(todos.filter((item) => item.id !== obj.id));
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <div className="jobDone">
          <h4>Task done :</h4>
          {todos.map((obj3) => {
            if (obj3.status) {
              return <p>- {obj3.text}</p>;
            }
          })}
        </div>
        <div className="jobPending">
          <h4>Pending tasks :</h4>
          {todos.map((obj3) => {
            if (!obj3.status) {
              return <p>- {obj3.text}</p>;
            }
          })}
        </div>
      </div>
     <button onClick={()=>setTodos([])}>Clear All</button>
    </div>
  );
}

export default App;
