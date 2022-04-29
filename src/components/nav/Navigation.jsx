import React, {useState, useEffect} from "react";
import "./navigation.scss";
import Logo from "../../assets/Logo.svg";
import SocMedIcons from "../icons/SocialMedia";
const Navigation = () => {
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
      <section className={`navTextContainer ${checker()} test`}>
        <div className={`${show != null && show ? "shadow" : ""}`}>

       
        <div className="container-fluid d-flex justify-content-between flex-row ">

        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="d-flex nav-links">
          <ul className="d-flex flex-column flex-md-row align-items-center">
            <li className="secondary-color">
              <a href="#about"><span className="primary-color">01.</span> About</a>
            </li>
            <li className="secondary-color">
              <a href="#work"><span className="primary-color">02.</span> Work</a>
            </li>
            <li className="secondary-color">
              <a href="#contact"><span className="primary-color">03.</span> Contact</a>
            </li>
            <li className="btn btn-outlined">Resume</li>
          </ul>
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
