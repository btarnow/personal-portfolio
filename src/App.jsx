import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Skills from './sections/skills/Skills';
import About from './sections/about/About';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <FloatingNav/>
  
    </main>
  )
}

export default App