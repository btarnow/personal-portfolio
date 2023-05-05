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
          <div className='center_btn'>
            <a href={Resume} download className='btn primary'>Download Resume<HiDownload /></a>
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
            I began my professional career in education. I worked in Indianapolis 
            Public Schools for seven years as both a teacher and an instructional 
            coach. I loved teaching math and automating processes for our school 
            through technology. I transitioned into software engineering because 
            I have knack for solving problems with technology and want to build 
            products that make a positive impact on the world. 
            </p>
            <br></br>
            <h4>Fun Facts:</h4>
            <ul>
              <li>🧠 I enjoy learning about the brain & applied neuroscience </li>
              <li>🥒 I'm exploring eating less meat & like cooking new meals</li>
              <li>👩🏼‍🌾 I genuinely love yard work</li>
              <li>🐶 My dog and I are a certified therapy dog team together</li>
              <li>🌾 Favorite Board Game: Catan</li>
              <li>🍣 Favorite Food: Sushi</li>
              <li>🇮🇸 Favorite Place I've Traveled: Iceland</li>
            </ul>

        </div>
      </div>
    </section>
  )
} 

export default About