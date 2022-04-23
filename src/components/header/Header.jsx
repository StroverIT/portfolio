import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <header className="d-flex justify-content-center flex-column">
     <div className="pb-sm-1">
       <p className="primary-color bigger-text">Hi, my name is</p>
     </div>
      <div >
        <h1 className="title-color big-title">Emil Zlatinov</h1>
      </div>
     <div>
       <h1 className="reading-text-color big-title">I build things for the web</h1>
     </div>
     <div className="col-sm-7 mt-sm-1">
       <p className="reading-text-color ">I'm a software engineer specializing in building (and occasionally designing). I'm focused on builing my web and social skills.</p>
     </div>
    </header>
  )
}
