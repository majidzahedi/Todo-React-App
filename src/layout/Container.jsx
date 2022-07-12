import { useDarkMode } from "../hooks";
const Container = ({ children, isRTL, toggleRTL }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className="min-h-screen border-gray-50 bg-veryLightGray bg-desktop-light bg-top bg-no-repeat px-2 rtl:font-vazir dark:bg-veryDarkBlue dark:bg-desktop-dark md:mx-0">
      <div className="mx-auto flex max-w-xl flex-col space-y-8 py-20">
        <header className="flex items-center justify-between ">
          <h1 className="text-5xl font-bold uppercase tracking-widest text-white rtl:tracking-normal">
            {isRTL ? "کارها" : "TODO"}
          </h1>
          <div className="items-cetner flex justify-between rtl:justify-between">
            <button onClick={toggleRTL} className="px-3">
              {isRTL ? (
                <img className="w-8" src="/En.svg" alt="" />
              ) : (
                <img className="w-8" src="/FA.svg" alt="" />
              )}
            </button>
            <button onClick={toggleDarkMode} className="px-3">
              {isDarkMode ? (
                <img src="/icon-sun.svg" alt="" />
              ) : (
                <img src="/icon-moon.svg" alt="" />
              )}
            </button>
          </div>
        </header>
        {children}
        <footer className="text-center text-sm text-gray-500">
          {isRTL
            ? "برای مرتب کردن آیتم ها را جابجا کنید"
            : "Drag and Drop to reorder list"}
        </footer>
      </div>
    </div>
  );
};

export default Container;
