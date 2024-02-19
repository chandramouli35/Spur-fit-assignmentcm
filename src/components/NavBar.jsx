import React from 'react';

export default function Navbar() {
    return (
      <div className="fixed top-0 left-0 bg-white z-100 w-full" style={{postion:"fixed", top:"0px", backgroundColor:"#ffffff", zIndex:"9999"}}>
        <header className="flex justify-between h-20 items-center py-3 px-10">
          <div className=""><img width={50} height={50} alt="" src="https://res.cloudinary.com/dgonqoet4/image/upload/v1708325588/ahead-logo_pydutt.png" /></div>
          <div className="">
            <ul className="flex gap-6 items-center">
              <li className="cursor-pointer font-semibold">Emotions</li>
              <li className="cursor-pointer font-semibold">Manifesto</li>
              <li className="cursor-pointer font-semibold">
                Self-awareness test
              </li>
              <li className="cursor-pointer font-semibold">Work With Us</li>
            </ul>
          </div>
          <div className="">
            <button className="cursor-pointer text-white bg-black rounded-full px-4 py-2 font-semibold">
              Download app
            </button>
          </div>
        </header>
      </div>
    );
  }