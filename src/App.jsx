import Container from "./layout/Container";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Container>
      <InputField />
      <TodoList />
    </Container>
  );
}

export default App;
