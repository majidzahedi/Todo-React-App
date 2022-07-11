const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  const { title, isDone, id } = todo;
  return (
    <div className="group relative flex items-center border-b border-lightGrayishBlue py-5 px-8 dark:border-darkGrayishBlue1">
      <div className="flex  items-center justify-center rounded-full bg-checkBackground1">
        <input
          type="checkbox"
          checked={isDone}
          className="m-[1px] rounded-full border-0 p-3 ring-[1.1px] ring-lightGrayishBlue1 checked:bg-inherit checked:ring-opacity-0 hover:ring-opacity-0 checked:hover:bg-inherit focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:bg-inherit dark:bg-veryDarkDesaturatedBlue dark:checked:bg-inherit"
          onChange={toggleTodo(id)}
        />
      </div>
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
