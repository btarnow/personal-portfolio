import './header.css'
import ProfilePic from '../../assets/profile-pic.jpeg'
import data from './data'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={ProfilePic} alt="Header Portrait" />
        </div>
        <h1 className='hello'>Hi, I'm Becky.</h1>
        <p>
        I am a software engineer with a background in education.
        </p>
        
        {/* Header "Call To Action area" */}
        <div className="header__cta">
          <a href="#contact" className="btn primary">Let's talk</a>
          <a href="#portfolio" className="btn light">My Work</a>
        </div>

        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      
      </div>
    </header>
  )
}

export default Header