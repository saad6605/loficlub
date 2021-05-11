import React from "react";

const KeyboardShortcuts = () => {
  return (
    <div className="flex items-center justify-center flex-col text-[#FAFAFA]">
      <div className="animate__animated animate__fadeInDown">
        <h1 className="text-5xl">Keyboard Shortcuts</h1>
        <p className="text-sm font-light">
          Here are the keyboard shortcuts to enhance your productivity.
        </p>
      </div>
      <div className="flex items-center justify-center w-12/12 flex-wrap mt-3">
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>Spacebar</kbd>
          <h3 className="font-thin text-xl ml-1">- Pause/Play</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>Up/Down</kbd>
          <h3 className="font-thin text-xl ml-1">- Increase/Decrease Volume</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>Left/Right</kbd>
          <h3 className="font-thin text-xl ml-1">- Next/Previous Track</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>F</kbd>
          <h3 className="font-thin text-xl ml-1">- Enter Full Screen Mode</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>R</kbd>
          <h3 className="font-thin text-xl ml-1">- Random Track</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>A</kbd>
          <h3 className="font-thin text-xl ml-1">- View All Tracks</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>H</kbd>
          <h3 className="font-thin text-xl ml-1">- Go to Home</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>C</kbd>
          <h3 className="font-thin text-xl ml-1">- Go to Live Chat</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>P</kbd>
          <h3 className="font-thin text-xl ml-1">- Go to Pomodoro Timer</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>L</kbd>
          <h3 className="font-thin text-xl ml-1">- Go to Todo Page</h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>K</kbd>
          <h3 className="font-thin text-xl ml-1">
            - View All KeyBoard Shortcuts
          </h3>
        </div>
        <div className="p-4 m-2 h-[80px] relative flex w-3/12 items-center bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
          <kbd>T</kbd>
          <h3 className="font-thin text-xl ml-1">- Share to Twitter</h3>
        </div>
      </div>
    </div>
  );
};

export default KeyboardShortcuts;
