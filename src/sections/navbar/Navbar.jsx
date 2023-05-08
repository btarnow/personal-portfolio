import ProfilePic from '../../assets/profile-pic.jpeg'
import {showModalContext, useModalAContext} from '../../context/modal-context'
import data from './data'
import {IoIosColorPalette} from 'react-icons/io'
import './navbar.css'

const Navbar = () => {
  const {showModalHandler} = useModalAContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={ProfilePic} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id="theme__icon" onClick={showModalHandler}><IoIosColorPalette/></button>
      </div>
    </nav>
  ) 
}

export default Navbar