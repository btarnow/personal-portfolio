import './header.css'
import ProfilePic from '../../assets/profile-pic.jpeg'
import data from './data'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">

        <div className="header_profile">
          <img src={ProfilePic} alt="Profile" />
        </div>

        <h3>Becky Tarnowski</h3>
        <p>
          Text here about myself.
        </p>

        <div classNate="header__cta">
          <a href="#contact" className="btn primary">Let's talk</a>
          <a href="#projects" className="btn light">My Work</a>
        </div>

        <div className="header_socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      
      </div>
    </header>
  )
}

export default Header