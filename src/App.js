import Header from "./components/header/Header"
import Nav from "./components/nav/Navigation"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import "./index.css"
// ADD on selection different color
function App() {
  return (
    <>
      <Nav/>
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
    </>
  );
}

export default App;
