import React, { useState } from 'react'
import { hamburger } from '../assets/icons'
import Slidebar from '../sections/Slidebar';

export default function OpenSlideBar() {
    const [open, setOpen] =  useState(false);

    
  return (
    <main>
      <div onClick={() => (setOpen(true),
      document.body.style.overflow = 'hidden')}
      >
      <img src={hamburger} 
            alt="hamburger icon" 
            height={20} 
            width={24}
            className=" hover:cursor-pointer" />
    </div>

    <Slidebar open={open} onClose={() => setOpen(false)} />
    </main>
  )
}
