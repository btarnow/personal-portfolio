import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import Skills from './sections/skills/Skills';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
// import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App