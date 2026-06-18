"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
   { name: "About", href: "#about" }
];

export default function Navigation() {
    const [open, setOpen] = useState(false)
    function handleClick() {
       setOpen(!open)
    }
   return (
       <nav className="bg-blue-600 px-4">
       
        <div className="h-16  sm:items-center sm:justify-around text-indigo-50 hidden sm:flex">
          {navLinks.map((link)=> {
            return(
            <a href={link.href} key={link.name}>{link.name}</a>
            )
          })}
           
        </div> 
        <div className="sm:hidden flex items-center text-indigo-50">
          <button className="text-3xl ml-auto mt-2" onClick={handleClick}>
           <RxHamburgerMenu />
          </button>
        </div>
     { open &&   <div className="block sm:hidden space-y-2 p-3 z-50">
           {navLinks.map((link)=> {
            return(
            <a onClick={()=> setOpen(false)} className="flex justify-center text-indigo-50" href={link.href} key={link.name}>{link.name}</a>
            )
          })}
          
        </div> }
       </nav>
    )
}


