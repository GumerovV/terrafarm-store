import React, { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex h-screen w-full items-center justify-center bg-bg">
      <div className="w-[500px] h-[100px] bg-btn rounded-xl hover:w-[500px] hover:h-[200px] transition-all"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <div className="w-full h-full text-center text-white text-5xl font-bold cursor-pointer hover:text-center mt-5">
          Hello TerraFarm
          <div className={`${visible ? '' : 'hidden'} w-full text-white text-3xl mt-10 transition-none`}>
            <a className="text-aqua text-cyan-400 hover:text-cyan-600 transition-colors" href="https://terrafarm.store/">Redirect on site</a>
          </div>
          </div>
      </div>
    </div>
  );
}

export default App;
