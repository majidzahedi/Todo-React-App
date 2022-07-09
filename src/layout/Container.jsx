import { useDarkMode } from "../hooks";
const Container = ({ children }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="mx-4 min-h-screen border-gray-50 bg-veryLightGray bg-desktop-light bg-top bg-no-repeat dark:bg-veryDarkBlue dark:bg-desktop-dark md:mx-0">
      <div className="mx-auto flex max-w-3xl flex-col space-y-8 py-16">
        <header className="flex items-center justify-between ">
          <h1 className="text-5xl font-bold uppercase tracking-widest text-white">
            Todo
          </h1>
          <button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <img src="/icon-sun.svg" alt="" />
            ) : (
              <img src="/icon-moon.svg" alt="" />
            )}
          </button>
        </header>
        {children}
        <footer className="text-center text-sm text-gray-500">
          Drag and drop to reorder list
        </footer>
      </div>
    </div>
  );
};

export default Container;
