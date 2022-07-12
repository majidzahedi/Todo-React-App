import TodoItem from "./TodoItem";
import language from "../../public/assets/language";

const TodoList = ({
  todos,
  setFilterBy,
  filterBy,
  toggleTodo,
  removeTodo,
  clearCompleted,
  numberOfActiveTodos,
  isRTL,
}) => {
  return (
    <div className="flex flex-col rounded-lg bg-white shadow dark:bg-veryDarkDesaturatedBlue">
      {todos.length !== 0 ? (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        ))
      ) : (
        <h3 className="border-b border-lightGrayishBlue px-8 py-6 text-center text-veryDarkBlue dark:border-darkGrayishBlue1 dark:text-veryLightGrayishBlue">
          {isRTL ? "کاری برای انجام دادن نیست" : "You've Got Nothing TODO! 🥳"}
        </h3>
      )}
      <div className="flex items-center  justify-between py-4 px-2 md:px-8">
        <p className="w-1/3 text-xs text-gray-400 md:text-sm">
          {numberOfActiveTodos} {isRTL ? "کار باقیمانده" : "Items Left"}
        </p>
        <div className=" flex w-1/3 items-center  justify-between  text-xs md:text-base">
          <button
            onClick={setFilterBy("all")}
            className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
              filterBy === "all" && "text-blue-500"
            }`}
          >
            {isRTL ? "همه" : "All"}
          </button>
          <button
            onClick={setFilterBy("active")}
            className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
              filterBy === "active" && "text-blue-500"
            }`}
          >
            {isRTL ? "فعال" : "Active"}
          </button>
          <button
            onClick={setFilterBy("completed")}
            className={`font-bold text-darkGrayishBlue hover:text-veryDarkBlue dark:hover:text-lightGrayishBlue ${
              filterBy === "completed" && "text-blue-500"
            }`}
          >
            {isRTL ? "انجام شده ها" : "Completed"}
          </button>
        </div>
        <button
          onClick={clearCompleted}
          className="w-1/3 text-right  text-xs text-gray-400 hover:text-veryDarkBlue rtl:text-left dark:hover:text-lightGrayishBlue md:text-sm"
        >
          {isRTL ? "پاک کردن انجام شده ها " : "Clear Completed"}
        </button>
      </div>
    </div>
  );
};

export default TodoList;
