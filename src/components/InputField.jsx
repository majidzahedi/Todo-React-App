import useStore from "../sotre";

const InputField = () => {
  const { addTodo } = useStore();

  const handelSubmit = (event) => {
    event.preventDefault();
    const title = event.target[1].value;
    if (title === "") {
      return;
    }
    const payload = {
      title,
      isDone: event.target[0].checked,
    };
    addTodo(payload);
    event.target[1].value = "";
    event.target[0].checked = false;
  };

  return (
    <div className="w-full rounded-lg bg-white py-3 px-8 shadow dark:bg-veryDarkDesaturatedBlue">
      <form className="group flex items-center" onSubmit={handelSubmit}>
        <div className="checkbox-container">
          <input
            readOnly={true}
            type="checkbox"
            title="add"
            className="checkbox"
          />
        </div>
        <input
          type="text"
          className="w-full border-none bg-inherit py-2 px-8 text-lg text-veryDarkBlue placeholder:text-lg placeholder:text-darkGrayishBlue1 focus:outline-none focus:ring-0  dark:text-lightGrayishBlue1"
          placeholder="Create a new Todo ..."
        />
        <button className="hidden  group-hover:block" type="submit">
          <img src="/icon-cross.svg" alt="add" className="rotate-45" />
        </button>
      </form>
    </div>
  );
};

export default InputField;
