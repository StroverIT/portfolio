import React, { useEffect, useRef, useState } from 'react'
import "./hamburger.scss"
export default function Hamburger({navigation}) {

  const [open, setOpen] = useState(false);

  const hamburger= useRef(null)
  const bluryBg = useRef(null)

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
      bluryBg.current.classList.remove("d-none")

      document.body.classList.add("blur")
      }else{
        hamburger.current.classList.remove("open")
  navigation.current.classList.remove("open-menu")
  bluryBg.current.classList.add("d-none")

  document.body.classList.remove("blur")
      
    }
    return ()=>{
      if(navigation.current){
        navigation.current.removeEventListener("click", linksClick)
      }
    }
  }, [open,hamburger])

  return (
    <>
    <div className="header__nav__hamburger d-lg-none" onClick={() => setOpen(!open)} ref={hamburger}>
    <div></div>
    <div></div>
    <div></div>
    </div>
    <div className="blury-bg d-none" onClick={() => setOpen(!open)} ref={bluryBg}></div>
    </>
  )
}