import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const { pathname } = useLocation();

  const menuItem = [
    { path: '/about', label: 'about' },
    { path: '/experience', label: 'experience' },
    { path: '/projects', label: 'projects' },
    { path: '/contact', label: 'contact' },
  ];

  return (
    <section className= 'text-[#8E8E8E] flex items-center justify-around bg-[#F4F4F4] h-24'>
      <div className='@JasperBucad hover:text-black'>
        <a href= '/'> © 2023 Jasper Bucad</a>
      </div>

      <nav className= 'FooterMenu'>
        <ul className='flex justify-around w-80'>
        {menuItem.map((item, index) => (
            <li key={index}>
              <a className='hover:text-gray-600' href= {item.path}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  )
}