import useStore from "../sotre";

const Container = ({ children }) => {
  const { darkMode, toggleDarkMode } = useStore();
  return (
    <main className="min-h-screen bg-veryLightGray bg-desktop-light bg-top bg-no-repeat px-2 dark:bg-veryDarkBlue dark:bg-desktop-dark ">
      <div className="mx-auto flex max-w-xl flex-col space-y-8 py-20">
        <header className="flex items-center justify-between ">
          <h1 className="text-5xl font-bold uppercase tracking-widest text-white">
            TODO
          </h1>
          <div className="items-cetner flex justify-between ">
            <button onClick={() => toggleDarkMode()} className="px-3">
              {darkMode ? (
                <img src="/icon-sun.svg" alt="lightmode" />
              ) : (
                <img src="/icon-moon.svg" alt="darkmode" />
              )}
            </button>
          </div>
        </header>
        {children}
        <footer className="text-center text-sm text-gray-500">
          drag and Drop to reorder list
        </footer>
      </div>
    </main>
  );
};

export default Container;
