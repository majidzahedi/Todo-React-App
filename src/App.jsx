import useTodo from "./hooks";
import Container from "./layout/Container";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { useRtl } from "./hooks";

function App() {
  const [isRTL, toggleRTL] = useRtl();
  const [
    filterdTodos,
    { addTodo, toggleTodo, removeTodo, clearCompleted },
    { filterBy, setFilterBy, todos },
  ] = useTodo();

  return (
    <Container isRTL={isRTL} toggleRTL={toggleRTL}>
      <InputField addTodo={addTodo} isRTL={isRTL} />
      <TodoList
        isRTL={isRTL}
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
