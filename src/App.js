import Header from "./components/header/Header"
import Nav from "./components/nav/Navigation"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

import "./index.css"
import { useEffect } from "react"
function App() {
  const currentUrl = new URL(window.location.href)
  const hash = currentUrl.hash

  useEffect(()=>{
    if(hash){
      console.log(hash);
      const item = document.querySelector(hash)
      console.log(item);
      if(item){
          
          item.scrollIntoView({behavior: "smooth"} )
      }
  }
  }, [window])


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
    </>
  );
}

export default App;
