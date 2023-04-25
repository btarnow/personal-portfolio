import './portfolio.css'
import Projects from './Projects'
import data from './data'
import { useState } from 'react'


const Portfolio = () => {

  const [projects, setProjects] = useState(data);
  
  return (
    <section id="portfolio">
      <h2>Projects</h2>
      <div className="container portfolio__container">
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio