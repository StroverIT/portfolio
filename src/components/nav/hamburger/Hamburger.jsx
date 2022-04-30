import React, { useEffect, useRef, useState } from 'react'
import "./hamburger.scss"
export default function Hamburger({navigation}) {
  const [open, setOpen] = useState(false);
  const hamburger= useRef(null)
  const linksClick = event => {
   const target = event.target
   if(target.tagName === "SPAN" || target.tagName === "A"){
     setOpen(false) 
   }
  }
  useEffect(()=>{
    navigation.current.addEventListener("click", linksClick);
      if(open){
        hamburger.current.classList.add("open")
        navigation.current.classList.add("open-menu")

        document.body.classList.add("blur")
        }else{
          hamburger.current.classList.remove("open")
    navigation.current.classList.remove("open-menu")
    document.body.classList.remove("blur")
        
      }
      return ()=>{
        navigation.current.removeEventListener("click", linksClick)
      }
  }, [open,hamburger])

  return (
    <div className="header__nav__hamburger d-lg-none" onClick={() => setOpen(!open)} ref={hamburger}>
    <div></div>
    <div></div>
    <div></div>
    </div>
  )
}