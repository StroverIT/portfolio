import Header from "./components/header/Header"
import Nav from "./components/nav/Navigation"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import CV from "./components/resume/CV"

import "./index.css"
import { useEffect } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const currentUrl = new URL(window.location.href)
  const hash = currentUrl.hash

  useEffect(()=>{
    if(hash){
      const item = document.querySelector(hash)
      if(item){
          item.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
      }
  }
  }, [window.onload])


  return (
    
    <>
      <Nav/>
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
    <Routes>
          <Route path="/cv">
            <CV />
          </Route>
       
         
        </Routes>
    <ToastContainer />
    </>
  );
}

export default App;
