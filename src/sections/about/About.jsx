import './about.css'
import RowinPic from '../../assets/Rowin-and-I.png'
import Resume from '../../assets/resume.pdf'
import {HiDownload} from 'react-icons/hi'
import Card from '../../components/Card'
import data from './data'


const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={RowinPic} alt="Becky with her dog Rowin" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className='about__cards'>
            {
              data.map(item => (
                <Card key={item.id} className="about__card" >
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
            }
          </div>
          <p>
              Text about myself. Text about myself. Text about myself. 
              Text about myself. Text about myself. Text about myself.
            </p>
            <p>
              Text about myself. Text about myself. Text about myself. 
              Text about myself. Text about myself. Text about myself.  
            </p>
            <a href={Resume} download className='btn primary'>Download Resume<HiDownload /></a>
        </div>
      </div>
    </section>
  )
} 

export default About