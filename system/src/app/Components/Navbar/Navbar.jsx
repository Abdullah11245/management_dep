'use client'
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
  <>
  
  <div className="flex flex-col flex-1  py-4 px-2 rounded ml-72 fixed w-4/6">
        <div className="flex items-center justify-between h-16 bg-gray-50  p-2 w-[121%]" >
          <div className="flex items-center px-4 space-x-2">
            <button className="text-gray-500 focus:outline-none focus:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
             <p className='text-sm text-light'>Account Management System - Admin</p>
          </div>
          <div className="flex items-center pr-4">
          <div className='flex justify-center items-center space-x-2'>
                    <a
                      href="#"
                      className="flex items-center p-2 text-base font-normal w-8 h-8 text-gray-900  dark:text-white rounded-full bg-slate-500 dark:hover:bg-gray-700"
                    >
                      
                    </a>
                      <span className=" font-semibold">Lorem Ipsum</span>
              </div>
          </div>
        </div>
       
      </div>
   
  </>
  );
};

export default Navbar;
