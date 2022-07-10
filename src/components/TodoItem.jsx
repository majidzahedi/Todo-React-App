const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const { title, isDone, id } = todo;
  return (
    <div className="group relative flex items-center border-b border-lightGrayishBlue py-5 px-8 dark:border-darkGrayishBlue1">
      <input
        type="checkbox"
        checked={isDone}
        className="group rounded-full bg-inherit p-3 checked:bg-purple-400  focus:outline-none focus:ring-0 checked:focus:bg-purple-400 "
        onChange={toggleTodo(id)}
      />
      <h3
        className={`w-full border-none bg-inherit px-8 text-lg text-veryDarkBlue first-letter:capitalize placeholder:text-lg placeholder:text-gray-500  focus:outline-none focus:ring-0  dark:text-lightGrayishBlue1 ${
          isDone &&
          "text-darkGrayishBlue line-through dark:text-darkGrayishBlue"
        }`}
      >
        {title}
      </h3>
      <button
        className="hidden transition-all duration-200 group-hover:block"
        onClick={removeTodo(id)}
      >
        <img src="/icon-cross.svg" alt="" />
      </button>
    </div>
  );
};

export default TodoItem;
