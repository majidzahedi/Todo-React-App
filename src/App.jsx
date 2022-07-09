import useTodo from "./hooks";
import Container from "./layout/Container";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  const [
    filterdTodos,
    { addTodo, toggleTodo, removeTodo, clearCompleted },
    { filterBy, setFilterBy, todos },
  ] = useTodo();

  return (
    <Container>
      <InputField addTodo={addTodo} />
      <TodoList
        todos={filterdTodos}
        toggleTodo={toggleTodo}
        setFilterBy={setFilterBy}
        removeTodo={removeTodo}
        filterBy={filterBy}
        clearCompleted={clearCompleted}
        numberOfActiveTodos={
          todos.filter((todo) => todo.isDone === false).length
        }
      />
    </Container>
  );
}

export default App;
