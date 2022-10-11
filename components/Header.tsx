import React from 'react'
// import {
//  SearchIcon,
//  PlusCircleIcon,
//  UserGroupIcon,
//  HeartIcon,
//  PaperAirplaneIcon,
//  MenuIcon,
// } from '@heroicons/react/outline'

const Header: React.FC = () => {
 return (
  <div>
   <div className="flex justify-between max-w-6xl">
    {/* left  */}
    <div className="cursor-pointer">
     <h1>Catstagram</h1>
    </div>

    {/* Middle  */}
    <div>
     <div></div>
     <input type="text" placeholder="Search"></input>
    </div>

    {/* Right  */}
   </div>
  </div>
 )
}

export default Header
