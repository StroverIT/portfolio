import Header from "./components/header/Header"
import Nav from "./components/nav/Navigation"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import "./index.css"

function App() {
  return (
    <div className="container">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Nav />
    </div>
  );
}

export default App;
