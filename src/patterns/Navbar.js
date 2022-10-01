import React from 'react';
import Headroom from 'react-headroom';
import { WiDaySunny, WiMoonWaningCrescent4 } from 'react-icons/wi';
import { useTheme } from '../contexts/theme';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  function toggleDarkMode() {
    toggleTheme();
  }

  return (
    <Headroom
      style={{
        webkitTransition: 'all .5s ease-in-out',
        mozTransition: 'all .5s ease-in-out',
        oTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out',
        display: 'flex',
        width: '100%',
        height: '70px',
      }}
    >
      <div className="flex w-full bg-neutral-100 h-full dark:bg-[#111] items-center justify-center shadow-lg">
        <div className="flex items-center w-full max-w-7xl xl:px-0 justify-between">
          <h1 className="text-2xl font-extrabold">WhatCode</h1>

          <button
            type="button"
            onClick={toggleDarkMode}
            className="flex items-center justify-center bg-zinc-300 dark:bg-[#333] rounded-full h-8 w-8"
          >
            {theme === 'dark' ? (
              <WiDaySunny size={20} />
            ) : (
              <WiMoonWaningCrescent4 size={20} className="rotate-45" />
            )}
          </button>
        </div>
      </div>
    </Headroom>
  );
}
