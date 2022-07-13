import useStore from "../sotre";

const TodoItem = ({ todo }) => {
  const { removeTodo, toggleTodo } = useStore();
  const { title, isDone, id } = todo;

  const handleRemove = (id) => () => removeTodo(id);
  const handleToggle = (id) => () => toggleTodo(id);

  return (
    <div className="group relative flex items-center border-b border-lightGrayishBlue py-5 px-8 dark:border-veryDarkGrayishBlue">
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox"
          checked={isDone}
          onChange={handleToggle(id)}
        />
      </div>
      <h3
        className={`w-full  px-8 text-lg text-veryDarkBlue first-letter:capitalize dark:text-lightGrayishBlue1 ${
          isDone &&
          "text-darkGrayishBlue line-through dark:text-darkGrayishBlue"
        }`}
      >
        {title}
      </h3>
      <button className="hidden  group-hover:block" onClick={handleRemove(id)}>
        <img src="/icon-cross.svg" alt="delete" />
      </button>
    </div>
  );
};

export default TodoItem;
