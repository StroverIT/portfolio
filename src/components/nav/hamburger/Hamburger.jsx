import React, { useEffect, useRef, useState } from 'react'
import "./hamburger.scss"
export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const hamburger= useRef(null)
  useEffect(()=>{
    const ul = hamburger.current.nextSibling
      if(open){
        hamburger.current.classList.add("open")
        ul.classList.remove("d-none")

        }else{
          hamburger.current.classList.remove("open")
        
      }
  }, [open,hamburger])

  return (
    <>
    <div className="header__nav__hamburger d-lg-none" onClick={open ? () => setOpen(false) : () =>setOpen(true)} ref={hamburger}>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </>
  )
}