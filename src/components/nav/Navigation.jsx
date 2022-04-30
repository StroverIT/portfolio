import React, {useState, useEffect, useRef} from "react";
import "./navigation.scss";
import Logo from "../../assets/Logo.svg";
import SocMedIcons from "../icons/SocialMedia";
import NavLinks from "./navLinks/NavLinks"
import Hamburger from "./hamburger/Hamburger";

const Navigation = () => {
  const navLinks = useRef(null)
  const [show, setShow] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = ()=>{
    if(window.scrollY <= 20){
      return setShow(null)
    }
    if(window.scrollY > lastScrollY ){
      setShow(false)
    }else{
        setShow(true)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(()=>{
    if(typeof window !== "undefined"){
      window.addEventListener("scroll", controlNavbar)
    }
    return()=>{
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])
  function checker(){
  if(show == null) return ""
    if(show ) return "visible"
    if(!show) return "hidden"
  }
  return (
    <nav className="">
      <section className={`navTextContainer ${checker()}`}>
        <div className={`${show != null && show ? "shadow" : ""}`}>

       
        <div className="container-fluid d-flex justify-content-between flex-row ">

        <div>
          <a href="/"><img src={Logo} alt="" /></a>
        </div>
        <div className="d-flex align-items-center">
            <Hamburger navigation={navLinks}/>
        </div>
        <div className="d-md-flex align-items-center nav-links-container" ref={navLinks}>
            <NavLinks />
          </div>
        </div>
        </div>

      </section>
      <section className="navIconContainer d-none d-lg-block container-fluid">
          <div className="fixed-wrapper">
              <div className="navSticky nav-social ">
              <SocMedIcons position="flex-column" />
              </div>
          </div>
          <div className="fixed-wrapper fixed-wrapper-right">
              <div className="navSticky nav-email d-flex flex-column ">
                <a className="d-flex justify-content-center align-content-center secondary-color" href="#">emilzlatinov1@abv.bg</a>
              </div>
          </div>
      </section>
    </nav>
  );
};

export default Navigation;
