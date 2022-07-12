const InputField = ({ addTodo, isRTL }) => {
  return (
    <div className="w-full rounded-md bg-white py-3 px-8 shadow dark:bg-veryDarkDesaturatedBlue">
      <form className="flex items-center" onSubmit={addTodo}>
        <button type="checkbox" className="group rounded-full bg-inherit p-3" />
        <input
          type="text"
          className="w-full border-none bg-inherit py-2 px-8 text-lg text-veryDarkBlue placeholder:text-lg placeholder:text-darkGrayishBlue1 focus:outline-none focus:ring-0  dark:text-lightGrayishBlue1"
          placeholder={
            isRTL ? "اضافه کردن کار جدید..." : "Create a new Todo ..."
          }
        />
      </form>
    </div>
  );
};

export default InputField;
