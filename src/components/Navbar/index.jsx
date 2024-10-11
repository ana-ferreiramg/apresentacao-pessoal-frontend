import {
  NavLink,
} from 'react-router-dom';

import menu from '../../icon/menu.svg';

import { useState } from 'react';


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-end lg:justify-start">
      <div className="flex lg:hidden z-10 bg-primary">
        <button type="button" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ?
            (<span className="text-bold text-2xl">X</span>)
            :
            (<img src={menu} alt="Menu bar" height="17px" width="25px" />)}
        </button>
      </div>

      <ul className="hidden lg:flex md:flex-col gap-3">
        <li className="group">
          <NavLink
            to="about"
            className={({isActive}) => (isActive ? 'flex items-center gap-4 text-white font-bold uppercase text-sm tracking-widest group-hover:text-white' : 'flex items-center gap-4 text-gray uppercase text-sm tracking-widest group-hover:text-white')}
          >
            <span className="inline-block w-8 h-0.5 bg-gray group-hover:bg-white group-hover:w-16 transition-all"></span>
            About
          </NavLink>
        </li>
        <li  className="group">
          <NavLink
            to="projects"
            className={({isActive}) => (isActive ? 'flex items-center gap-4 text-white font-bold uppercase text-sm tracking-widest group-hover:text-white' : 'flex items-center gap-4 text-gray uppercase text-sm tracking-widest group-hover:text-white')}
          >
            <span className="inline-block w-8 h-0.5 bg-gray group-hover:bg-white group-hover:w-16 transition-all"></span>
            Projects
          </NavLink>
        </li>
      </ul>

      <div className={isOpen ? 'fixed top-[35vh] left-0 flex flex-col items-end bg-primary' : 'hidden'}>
        <ul className="w-screen h-screen gap-3 flex flex-col items-center">
          <li className="group p-2">
            <NavLink
              to="about"
              className={({isActive}) => (isActive ? 'flex items-center gap-4 text-white font-bold uppercase text-sm tracking-widest' : 'flex items-center gap-4 text-gray uppercase text-sm tracking-widest')}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li  className="group p-2">
            <NavLink
              to="projects"
              className={({isActive}) => (isActive ? 'flex items-center gap-4 text-white font-bold uppercase text-sm tracking-widest' : 'flex items-center gap-4 text-gray uppercase text-sm tracking-widest')}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
