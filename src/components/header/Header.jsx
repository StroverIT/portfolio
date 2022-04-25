import React from 'react'
import "./header.scss"

export default function Header() {
  return (
    <header className="d-flex justify-content-center flex-column">
     <div className="pb-1">
       <p className="primary-color bigger-text header-welcome">Hi, my name is</p>
     </div>
      <div className="header-name">
        <h1 className="title-color big-title">Emil Zlatinov</h1>
      </div>
     <div className="header-description">
       <h1 className="reading-text-color big-title">I build things for the web.</h1>
     </div>
     <div className="col-sm-7 mt-1">
       <p className="reading-text-color ">I'm a software engineer specializing in building (and occasionally designing). I'm focused on builing my web and social skills.</p>
     </div>
    </header>
  )
}
