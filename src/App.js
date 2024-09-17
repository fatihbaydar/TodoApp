import Header from "./components/Header";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="App">
      <h1>
        <Header/>
        <TodoList/>
      </h1>
    </div>
  );
}

export default App;
