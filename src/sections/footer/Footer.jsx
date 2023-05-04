import './footer.css'
import {links, socials} from './data'


const Footer = () => {
  return (
    <footer>
      <div className='container footer__container'>
        <ul className='nav__menu'>
          {
            links.map(footerLink => <li key={footerLink.id}>
              <a href={footerLink.link}>{footerLink.title}</a></li>)
          }
        </ul>
        <div className='footer__socials'>
          {
            socials.map(social => <a class="social_icon" key={social.id} href={social.link} 
            target='_blank' rel='noopener noreferrer'>{social.icon}</a>)
          }
        </div>
      </div>
      <div className="footer__copyright">
        <small>&copy; Becky Tarnowski 2023</small>
      </div>
    </footer>
  )
}

export default Footer