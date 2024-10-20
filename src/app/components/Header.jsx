import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="navbar bg-blue-500 fixed top-0 left-0 w-full z-10">
        <div className="flex-1">
            <a className="btn btn-ghost text-xl text-white">PST From Anywhere</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><a className="text-white">Infografis Indikator Makro</a></li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header;
