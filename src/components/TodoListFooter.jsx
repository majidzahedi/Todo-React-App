import useStore from "../store";
const TodoListFooter = () => {
  const { removeCompleted, setFilter, activeTodosCount, status } = useStore();

  const handleClearCompleted = () => removeCompleted();
  const handleFilter = (event) => {
    setFilter(event.target.name);
  };
  return (
    <div className="flex items-center  justify-between py-4 px-2 md:px-8">
      <p className="w-1/3 text-xs text-gray-400 md:text-sm">
        {activeTodosCount()} Items Left
      </p>
      <div className=" flex w-1/3 items-center  justify-between  text-xs md:text-base">
        <button
          onClick={handleFilter}
          name="all"
          className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
            status === "all" && "text-blue-500"
          }`}
        >
          All
        </button>
        <button
          onClick={handleFilter}
          name="active"
          className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
            status === "active" && "text-blue-500"
          }`}
        >
          Active
        </button>
        <button
          onClick={handleFilter}
          className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
            status === "" && "text-blue-500"
          }`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={handleClearCompleted}
        className="w-1/3 text-right  text-xs text-gray-400 hover:text-veryDarkBlue rtl:text-left dark:hover:text-lightGrayishBlue md:text-sm"
      >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoListFooter;
