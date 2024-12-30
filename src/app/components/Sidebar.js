"use client";

import Link from 'next/link';
import { useState } from 'react';


const Sidebar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    // Add logout logic here
    setIsLoggedIn(false);
  };

  return (
    <aside className="w-1/5 min-h-screen bg-blue-100 text-gray-800 flex flex-col">
      <div className="p-4 text-2xl font-bold text-center border-b border-blue-200">
        Dashboard
      </div>
      <ul className="flex-1 p-4 space-y-4">
        <li>
          <Link href="/dashboard">
            <span className="block px-4 py-2 rounded hover:bg-blue-200">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/registrants">
            <span className="block px-4 py-2 rounded hover:bg-blue-200">Registrants</span>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/reports">
            <span className="block px-4 py-2 rounded hover:bg-blue-200">Reports</span>
          </Link>
        </li>
      </ul>
      <div className="p-4 border-t border-blue-200">
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <span className="block w-full px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
              Login
            </span>
          </Link>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
